
# ts-easy 🛠️

**ts-easy** is your minimalist TypeScript starter for Node.js projects. No fluff, just the essentials to get you up and running with TypeScript, ESLint, Prettier, and more. Perfect for initiating any TypeScript project, whether it's a CLI tool, library, or something entirely different.

## Features ✨

- **TypeScript**: Strongly typed JavaScript for the win.
- **ESLint**: Keep your code clean and consistent.
- **Prettier**: Automatic code formatting to keep everything looking sharp.
- **VSCode Settings**: Optimized workspace settings out of the box.
- **pnpm**: Fast, disk space-efficient package manager.
- **ts-node-dev**: Instant feedback with autoreload on save.
- **tsup**: Super fast TypeScript bundler.
- **Zod**: Type-safe schema validation made easy.

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

### 3. Start Developing

Kickstart your development with autoreload on save:

```bash
pnpm dev
```

### 4. Build for Production

Ready to ship? Build your project with:

```bash
pnpm build
```

### Project Structure 📁

```bash
ts-easy/
├── src/
│   └── main.ts      	# Entry point for your TypeScript project
├── .vscode/
│   └── settings.json 	# VSCode workspace settings
│   └── extensions.json # Recommended VSCode extensions
├── eslint.config.mjs   # ESLint configuration
├── build.ts      	# Build configurations for tsup
├── .prettierrc      	# Prettier configuration
├── tsconfig.json    	# TypeScript configuration
├── package.json     	# Project metadata and scripts
└── pnpm-lock.yaml   	# Dependency lockfile
```

### Scripts 📝

* **pnpm dev:** Run your project with autoreload.
* **pnpm start:** Run your build.
* **pnpm lint:** Lint your TypeScript code using ESLint.
* **pnpm lint:fix:** Lint and fix your TypeScript code using ESLint.
* **pnpm format:** Format your code with Prettier.
* **pnpm build:** Bundle your project using tsup.

### Why ts-easy? 🤔

* **Minimal:** Just the essentials, no bloat.
* **Flexible:** Use it for any TypeScript-based project.
* **Modern:** Includes the latest and greatest tools like tsup and Zod.

### License 📄

This project is licensed under the MIT License.
