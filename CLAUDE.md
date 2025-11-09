# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ts-easy** is a minimalist TypeScript starter template for Node.js projects. It's designed to be a lightweight, flexible foundation for building CLI tools, libraries, or other TypeScript-based projects.

## Development Commands

### Essential Commands
- `pnpm dev` - Run development mode with hot-reload using tsx
- `pnpm build` - Build for production using tsup (outputs to `dist/`)
- `pnpm start` - Run the production build from `dist/main.js`
- `pnpm typecheck` - Type-check without emitting files
- `pnpm lint` - Check code with Biome linter
- `pnpm lint:fix` - Check and auto-fix issues with Biome
- `pnpm format` - Format code with Biome

### Environment Variables
- Development and production commands require a `.env` file (loaded via `dotenv-cli`)
- Environment validation is handled in [src/env.ts](src/env.ts) using Zod schemas
- The app will fail fast on startup if required environment variables are missing or invalid

## Architecture & Key Patterns

### Build System
- **tsup** is used for bundling (config in [build.ts](build.ts))
- Entry point: [src/main.ts](src/main.ts)
- Output: single bundled file at `dist/main.js` with sourcemaps, minification, and name preservation

### TypeScript Configuration
- Target: ESNext with NodeNext modules
- Strict mode enabled with `noImplicitAny`
- `strictPropertyInitialization` is disabled
- Experimental decorators enabled
- Output directory: `./dist`

### Code Quality & Formatting
- **Biome** is the unified linter and formatter (replaces ESLint/Prettier)
- Configuration in [biome.json](biome.json):
  - Tabs for indentation
  - Double quotes for strings
  - Auto-organize imports enabled
  - Recommended rules enabled

### Environment & Configuration
- [src/env.ts](src/env.ts) defines and validates all environment variables using Zod
- Zod schemas are used for runtime validation and type inference
- Environment validation happens at application startup
- Pattern: Define schema → validate with `safeParse()` → export typed `env` object

### Dependencies
- **zod**: Schema validation and type inference
- **tsx**: Fast TypeScript execution for development
- **tsup**: Production bundling
- **dotenv/dotenv-cli**: Environment variable management
- **@biomejs/biome**: Linting and formatting

## Project Structure

```
src/
  main.ts      - Application entry point
  env.ts       - Environment variable validation
build.ts       - tsup build configuration
biome.json     - Biome linter/formatter config
tsconfig.json  - TypeScript compiler options
```

## Key Conventions

- Use Zod for all runtime validation and type inference
- Environment variables must be validated in `src/env.ts`
- The main entry point is always [src/main.ts](src/main.ts)
- Use `dotenv -e .env` prefix for scripts that need environment variables
