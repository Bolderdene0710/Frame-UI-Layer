# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### FrameUI Demo (`artifacts/frame-ui`)
- React + Vite frontend-only app at `/`
- Interactive documentation and showcase for FrameUI headless UI library
- Pages: Home (`/`), Components index (`/components`), individual component pages
- Headless components in `src/components/frame-ui/`: Modal, Dropdown, Accordion, Tabs, Tooltip, Select, Checkbox, Switch
- Each component page includes live demo, copy-able code snippet, props table, accessibility notes
- Dark/light mode support via ThemeProvider
- Font: DM Sans (sans) + JetBrains Mono (code) via Google Fonts

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
