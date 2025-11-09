
# ts-easy 🛠️

**ts-easy** is your minimalist TypeScript starter for Node.js projects. No fluff, just the essentials to get you up and running with TypeScript, Biome, and more. Perfect for initiating any TypeScript project, whether it's a CLI tool, library, or something entirely different.

## Features ✨

- **TypeScript**: Strongly typed JavaScript for the win.
- **Biome**: Unified linting and formatting - one tool to rule them all.
- **tsx**: Lightning-fast TypeScript execution with hot-reload for development.
- **tsup**: Super fast TypeScript bundler for production builds.
- **Zod**: Type-safe schema validation and environment variable management.
- **dotenv**: Secure environment variable handling with validation.
- **pnpm**: Fast, disk space-efficient package manager.

## Getting Started 🚀

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ts-easy.git
cd ts-easy
```

### 2. Install Dependencies

Make sure you have pnpm installed. Then, run:

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
NODE_ENV=development
PORT=3000
DATABASE_URL=your_database_url_here
LOG_LEVEL=info
```

### 4. Start Developing

Kickstart your development with autoreload on save:

```bash
pnpm dev
```

### 5. Build for Production

Ready to ship? Build your project with:

```bash
pnpm build
pnpm start
```

### Project Structure 📁

```bash
ts-easy/
├── src/
│   ├── main.ts      	# Entry point for your TypeScript project
│   └── env.ts       	# Environment variable validation with Zod
├── build.ts         	# Build configurations for tsup
├── biome.json       	# Biome linter and formatter configuration
├── tsconfig.json    	# TypeScript configuration
├── package.json     	# Project metadata and scripts
├── .env             	# Environment variables (create this file)
└── pnpm-lock.yaml   	# Dependency lockfile
```

### Available Scripts 📝

* **pnpm dev** - Run your project in development mode with tsx (hot-reload enabled)
* **pnpm build** - Bundle your project for production using tsup
* **pnpm start** - Run the production build
* **pnpm typecheck** - Run TypeScript type checking without emitting files
* **pnpm lint** - Check your code with Biome linter
* **pnpm lint:fix** - Lint and auto-fix issues with Biome
* **pnpm format** - Format your code with Biome

## What Makes ts-easy Different? 🤔

* **All-in-One Tooling:** Biome replaces both ESLint and Prettier with a single, blazing-fast tool
* **Type-Safe Everything:** Zod schemas for runtime validation, including environment variables
* **Production-Ready:** Built-in environment validation ensures your app fails fast with clear error messages
* **Zero Config:** Sensible defaults out of the box, customize only when needed
* **Modern Stack:** Uses the latest tools (tsx, tsup, Biome) for the best developer experience

## Environment Variables

Environment variables are validated at runtime using Zod schemas in `src/env.ts`. Required variables:

- `NODE_ENV` - Application environment (development/production/test)
- `PORT` - Server port (default: 3000)
- `DATABASE_URL` - Database connection string (required)
- `LOG_LEVEL` - Logging level (debug/info/warn/error, default: info)
- `API_KEY` - Optional API key

The application will fail at startup with clear error messages if required variables are missing or invalid.

## License 📄

This project is licensed under the MIT License.
