import z from "zod";

const UserSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email format"),
	age: z.number().int().positive().min(13, "Must be at least 13 years old"),
	role: z.enum(["admin", "user", "guest"]).default("user"),
});

type User = z.infer<typeof UserSchema>;

function createUser(data: unknown): User {
	try {
		const user = UserSchema.parse(data);
		console.log("✓ Valid user created:", user);
		return user;
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error("✗ Validation failed:");
			error.errors.forEach((err) => {
				console.error(`  - ${err.path.join(".")}: ${err.message}`);
			});
		}
		throw error;
	}
}

function processUserData(data: unknown): void {
	const result = UserSchema.safeParse(data);

	if (result.success) {
		console.log("✓ User data is valid:", result.data);
	} else {
		console.log("✗ Invalid user data:");
		result.error.errors.forEach((err) => {
			console.log(`  - ${err.path.join(".")}: ${err.message}`);
		});
	}
}

function main() {
	console.log("=== TypeScript + Zod Starter ===\n");

	console.log("1. Creating valid user:");
	const validUser = {
		name: "Alice Johnson",
		email: "alice@example.com",
		age: 28,
		role: "admin" as const,
	};
	createUser(validUser);

	console.log("\n2. Processing invalid user data:");
	const invalidUser = {
		name: "B",
		email: "not-an-email",
		age: -5,
	};
	processUserData(invalidUser);

	console.log("\n3. Processing another valid user:");
	const anotherUser = {
		name: "Bob Smith",
		email: "bob@example.com",
		age: 25,
		// role will default to 'user'
	};
	processUserData(anotherUser);

	console.log("\n=== Done! ===");
}

main();
