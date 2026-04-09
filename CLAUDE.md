# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EasyShiftHQ — a marketing/landing site for a restaurant management SaaS product. It is a Next.js 15 App Router project using React 19, TypeScript, and Tailwind CSS v4. The site collects waitlist signups via a contact form powered by Resend (email API).

## Commands

- `pnpm dev` — start dev server (localhost:3000)
- `pnpm build` — production build
- `pnpm lint` — run ESLint
- `pnpm start` — serve production build

Package manager is **pnpm**. No test framework is configured.

## Architecture

- **App Router**: all pages live under `app/`. Uses Next.js file-based routing with `page.tsx` files.
- **Server Actions**: `app/actions.tsx` contains the `joinWaitlist` server action that sends emails via Resend. Requires env vars: `RESEND_API_KEY`, `SENDER_EMAIL_NOTIFICATIONS`, `SENDER_EMAIL_WELCOME`, `ADMIN_EMAIL`.
- **Feature pages**: `app/features/*/page.tsx` — each feature detail page uses the shared `components/feature-page-layout.tsx` layout component.
- **UI components**: `components/ui/` contains shadcn/ui components (new-york style, RSC-compatible). Add new ones via `npx shadcn@latest add <component>`.
- **Path aliases**: `@/*` maps to the project root (e.g., `@/components/...`, `@/lib/...`).
- **Styling**: Tailwind CSS v4 with CSS variables for theming. Global styles in `app/globals.css`. The `styles/globals.css` file also exists but `app/globals.css` is the one imported in the layout.
- **SEO**: Structured data components in `components/structured-data.tsx`. Metadata defined in `app/layout.tsx`. Google Analytics (G-59L6CWW9YN) loaded via `next/script`.
- **Build config**: TypeScript and ESLint errors are ignored during builds (`next.config.mjs`).
