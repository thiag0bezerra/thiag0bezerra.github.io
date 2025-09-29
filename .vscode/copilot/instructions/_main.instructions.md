---
applyTo: "**"
---

# Copilot — main overview (stack, principles, workflow)

Stack
- Next.js 15 (App Router), React 19, TypeScript 5, Tailwind 4 + Shadcn, PNPM
- Node.js 20+
- Use the #context7 tool to consult package documentation
- Use the #shadcn tool to request, consult, configure, and customize UI components.
- Use the #todos tool to manage tasks and reminders.
- Use the #think tool to reason about complex problems and generate solutions.
- The .mdx files use GitHub Flavored Markdown (GFM).


Principles
- Production quality: simple > complex, explicit > implicit.
- Explicit types (never reference `any`); small and deterministic functions.
- Fail fast: early validation, clear messages.
- Comments only when logic is not obvious.
- Consistent and accessible UI. Use auto layout and consistent spacing. Prefer a responsive and mobile-first approach.
- Prefer lean and objective page.tsx pages: seek to reuse components from src/components/**/*.tsx rather than manually implementing all elements on the page.
