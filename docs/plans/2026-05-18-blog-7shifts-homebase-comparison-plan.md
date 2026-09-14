# Plan: Blog article #6 — 7shifts vs Homebase vs EasyShiftHQ

Source draft: `~/Documents/GitHub/executive-assistant/easyshifthq/blog-drafts/2026-05-18-7shifts-vs-homebase-vs-easyshifthq.md`

## Scope

Ship a new MDX article comparing 7shifts, Homebase, and EasyShiftHQ from an operator perspective. Sixth in the 2026-05 blog series; format and tone match prior posts (#1–#5).

## Tasks

1. Drop draft content into `content/blog/2026-05-18-7shifts-vs-homebase-vs-easyshifthq.mdx` with frontmatter matching `BlogPostMeta` (title, description, slug, publishedAt, author, authorTitle, tags, ogImage). ✅ done before workflow started.
2. Isolate work in a git worktree on a feature branch.
3. Verify locally: `pnpm lint` and `pnpm build` (no unit tests for blog content).
4. CodeRabbit pass on committed changes.
5. Push, open PR, watch CI, fix any failures.

## Verification

- Build succeeds and statically generates the new route at `/blog/7shifts-vs-homebase-vs-easyshifthq`.
- Lint passes.
- Post appears in `/blog` index sorted by `publishedAt`.

## Risks

- Trademark references ("7shifts", "Homebase", "Cold Stone", "Wetzel's Pretzels") — handled by treating as nominative fair use, no logos.
- OG image path `/og/blog-7shifts-vs-homebase-vs-easyshifthq.jpg` may not exist yet; metadata will degrade gracefully (no image card) until the asset lands. Consistent with prior posts in the series.
