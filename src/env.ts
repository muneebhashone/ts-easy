import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	PORT: z.coerce.number().default(3000),
	DATABASE_URL: z.string().min(1),
	API_KEY: z.string().optional(),
	LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
	// Add more environment variables as needed
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
	console.error(
		"Invalid environment variables:",
		parsed.error.flatten().fieldErrors,
	);
	throw new Error("Invalid environment variables");
}

export const env = parsed.data;
