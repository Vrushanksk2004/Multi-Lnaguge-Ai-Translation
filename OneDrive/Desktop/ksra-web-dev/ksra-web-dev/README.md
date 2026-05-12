🚀 **Project Overview**
This is a production-ready, scalable Next.js application using a strict feature-based architecture. It includes a robust reusable UI system, a standardized design system, and clear separation of concerns to ensure long-term maintainability.

---

## 🚀 Tech Stack
| Technology | Purpose |
| :--- | :--- |
| **Framework** | Next.js (App Router, Turbopack for dev) |
| **Styling** | Tailwind CSS (v4) |
| **UI Components** | shadcn/ui, base-ui, Radix UI |
| **Data Fetching** | TanStack Query |
| **State Management** | Zustand |
| **Validation** | Zod |
| **Tables & Charts** | TanStack Table, Recharts |
| **Authentication** | Auth.js |
| **Backend/DB** | External APIs (e.g., Supabase) |

---

<details>
<summary>📦 Getting Started & Local Setup (Click to expand)</summary>

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- [pnpm](https://pnpm.io/) (recommended, matches project CLI commands) or npm/yarn
- (Optional) [GitHub CLI](https://cli.github.com/) for multi-account credential management

### Installation
Clone the repository (replace `<your-repo-url>` with your actual repo URL, and `ksra` with your project directory name if different):
```bash
git clone <your-repo-url>
cd ksra
pnpm install  # npm install / yarn install also work
```

### Local Development
Start the Turbopack-powered dev server:
```bash
pnpm dev  # npm run dev / yarn dev also work
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

### Code Quality Checks
Run these before committing to ensure compliance with project standards:
```bash
pnpm lint       # Check linting errors (npm run lint / yarn lint)
pnpm format     # Auto-format with Prettier (npm run format / yarn format)
pnpm typecheck  # TypeScript type checking (npm run typecheck / yarn typecheck)
```
</details>

---

## 🐙 Git & GitHub Workflow (CRITICAL - MANDATORY RULES)
To maintain a clean, reliable project history, **all team members must follow these rules without exception**:

### Branching Strategy
- ❌ **NEVER commit or push directly to `main` or `dev`**: These branches are protected.
- ⬇️ **Only pull updates from `dev`**: Do not pull from `main` for day-to-day work.
- ⬆️ **Only push to dedicated feature/bugfix branches**: Never push work to `main`/`dev`.

#### Branch Naming Conventions
| Branch Type | Format |
| :--- | :--- |
| Features | `feature/descriptive-feature-name` |
| Bug Fixes | `bugfix/descriptive-issue-name` |

### Daily Sync & Post-Pull Routine
Whenever you start work or pull new changes, follow these steps to avoid broken local environments:
```bash
# 1. Switch to dev and pull latest updates
git checkout dev
git pull origin dev

# 2. Switch back to your feature branch and sync with dev
git checkout feature/your-feature-name
git rebase dev  # Preferred: Creates cleaner history. Use git merge dev only if rebase causes unresolvable conflicts

# 3. ⚠️ CRITICAL: Reinstall dependencies after syncing
pnpm install  # npm install / yarn install
```
> **Why?** If another developer adds a new package to `package.json`, your app will crash until you reinstall dependencies.

### Commit Message Guidelines
Use [Conventional Commits](https://www.conventionalcommits.org/) format for all commits:
- Examples: `feat: add user dashboard charts`, `fix: resolve mobile header alignment`, `chore: update dependencies`

The commit contains the following structural elements, to communicate intent to the consumers of your library:

fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

### Multi-Account GitHub Setup (No SSH Required)
If you need to manage multiple GitHub accounts without using SSH keys, use the HTTPS method with either VS Code's built-in account switcher or the GitHub CLI (`gh`). This is simpler for most setups.

#### Method 1: VS Code Account Switcher (Easiest)
VS Code natively supports multiple GitHub accounts with no terminal configuration required:
1. Sign In: Click the **Accounts Icon** (person silhouette) in the bottom-left corner of VS Code.
2. Add Account: Select "Sign in with GitHub" (or "Backup and Sync Settings" to link accounts). This will open your default browser.
3. Browser Setup: Ensure you are logged into your target GitHub account in the browser, then complete the authorization prompt.
4. Clone Repositories:
   - Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS) to open the command palette.
   - Type `Git: Clone` and select the option.
   - Select "Clone from GitHub".
   - VS Code will prompt you to select which GitHub account to use for the clone — choose your target account.

#### Method 2: GitHub CLI (`gh`)
If you have the [GitHub CLI](https://cli.github.com/) installed, it handles credential switching automatically:
1. Log in to your new GitHub account:
   ```bash
   gh auth login
   ```
   Follow the interactive prompts to authenticate via HTTPS.

#### Remove Old GitHub Credentials (Windows Only)
If you are using Windows (Git Bash) and need to switch accounts, clear old cached credentials first:
1. Open **Windows Credential Manager** (search for it in the Start menu).
2. Navigate to the **Windows Credentials** tab.
3. Find and delete all entries matching `git:https://github.com`.

#### Set Git Commit Identity
Set your commit author details (this changes the committer name/email, not your GitHub login):
```bash
# Global (applies to all repositories on your machine)
git config --global user.name "Your New Name"
git config --global user.email "your-new-email@example.com"

# Per-repository (recommended for multiple accounts, run inside your repo directory)
git config --local user.name "Your New Name"
git config --local user.email "your-new-email@example.com"
```
> 💡 Use `--local` instead of `--global` if you work with multiple GitHub accounts across different repositories.

---

<details>
<summary>🛠️ CLI Utilities (shadcn/ui) (Click to expand)</summary>

### Project Initialization
Run this once to set up the project with the pre-configured shadcn preset:
```bash
pnpm dlx shadcn@latest init --preset b38miVIpO --template next --pointer
```

### Component Management
```bash
pnpm dlx shadcn@latest add --all       # Install all base components
pnpm dlx shadcn@latest add button      # Install a specific component
pnpm dlx shadcn@latest add --help      # View CLI help
pnpm dlx shadcn@latest info            # Check current preset settings
```
</details>

<details>
<summary>🧠 Core Architecture Philosophy (Click to expand)</summary>

### 1. Strict Feature-Based Architecture
All logic must be scoped to a feature. No scattered components or business logic.
- ✅ **Feature-only components**: If a component/hook/type is used *only* in one feature, it must live in that feature’s directory.

### 2. App Router = Routing Only
The `app/` directory is **only** for Next.js routing configuration:
- ✅ Allowed: Route pages, layouts, loading/error states, metadata.
- ❌ Prohibited: Business logic, feature components, API route handlers (`route.js`). All data operations must go through the `features/<feature>/api/` layer to external APIs.

### 3. Separation of Concerns
| Directory | Responsibility |
| :--- | :--- |
| `app/` | Routing and Next.js configuration only |
| `features/` | Business logic, state management, feature-specific components/hooks/types |
| `api/` | Wrapper layer for all external API calls (Supabase, third-party services, etc.) |

### 4. Mandatory Feature Structure
Every feature must follow this exact folder structure:
```text
features/<feature-name>/
├── api/          # External API call wrappers (e.g., Supabase, third-party endpoints)
├── hooks/        # React Query/mutation logic
├── store/        # Zustand state stores
├── components/   # UI components used ONLY in this feature
├── types/        # Feature-specific TypeScript types
└── index.ts      # Public exports for the feature (avoid barrel file bloat)
```
</details>

<details>
<summary>⚡ Development Guidelines (Click to expand)</summary>

- Keep components small and reusable where possible.
- Use consistent Tailwind CSS classes; avoid inline style hacks.
- **Validation**: All forms must use Zod for validation.
- **Tables**: All tabular data must use TanStack Table.
- **Authentication**: All auth flows must use Auth.js.
- **Database Rule (CRITICAL)**: Even when using Supabase, never call the database directly from UI code. Always go through `features/<feature>/api/` to hit external APIs.
- **Dark Mode**: Enabled via `next-themes`. Toggle with the keyboard shortcut `d` (custom project implementation).
</details>

---

## ⚠️ STRICT Rules (PRs Will Be Rejected If Violated)
❌ **NEVER modify these files/directories**:
- `components/ui/*` (all shadcn auto-generated UI components)
- `components/theme-provider.tsx`
- `hooks/use-mobile.ts` (if present)
- Any other auto-generated shadcn configuration files

✅ **Allowed Changes**:
- Create new pages/routes in `app/`
- Build new feature components in `features/`
- Use existing shadcn components in your features code
- Add custom logic, API wrappers, and hooks in the appropriate feature directories

---

## 🔀 PR Guidelines & Pre-Flight Checklist
All PRs must be opened from your `feature/xxx` or `bugfix/xxx` branch to the `dev` branch (PRs targeting `main` will be automatically closed).

### Mandatory Pre-PR Checks
Run these locally and fix all errors before opening a PR:
```bash
pnpm format
pnpm typecheck
pnpm lint
pnpm build
```

### PRs Will Be Automatically Rejected If:
❌ They target `main` instead of `dev`
❌ They modify restricted shadcn UI files
❌ They include `route.js` files or business logic in the `app/` directory
❌ They bypass the `api/` layer to call databases/APIs directly from UI code
❌ They fail to build, have type errors, or lack Zod validation for forms



If you want to create a new branch locally:

git checkout -b feature/feture name

or:

git switch -c feature/feture name


Then push it to GitHub:

git push -u origin feature/feture name


$ git branch --list