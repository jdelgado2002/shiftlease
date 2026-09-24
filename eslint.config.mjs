import path from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"

// eslint-config-next@15.5.26 only ships eslintrc-style config (index.js /
// core-web-vitals.js export plain `{ extends, plugins, rules, ... }`
// objects, not a flat config array) — confirmed by inspecting
// node_modules/eslint-config-next directly. FlatCompat bridges that
// eslintrc-style shareable config into ESLint 9's flat config format.
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      // Agent worktrees are full copies of this repo. Without this, every
      // finding is reported once per worktree and the counts multiply.
      ".claude/**",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
]

export default eslintConfig
