# Next.js Portfolio Migration Design

**Date:** 2026-04-21
**Goal:** Migrate existing React/Vite portfolio (natkdev.com) to Next.js 16 with design tokens, dark/light mode, and best practices. Same visual identity, better architecture.

---

## Decisions Made

| Topic                       | Decision                                                                 |
| --------------------------- | ------------------------------------------------------------------------ |
| Sub-pages (games, 3D, etc.) | Deferred — ship main portfolio first                                     |
| Internationalisation        | Dropped — English only for now                                           |
| Storybook                   | After launch — add as a portfolio showcase item                          |
| Visual identity             | Evolve current palette — keep mint/charcoal/coral, clean token structure |
| Design tooling              | Code-first — tokens live in `globals.css`, no Figma needed               |

---

## Architecture

**Stack:**

- Next.js 16, App Router, TypeScript strict
- Tailwind v4 (CSS variables as token layer — `globals.css` is the config)
- Framer Motion for animations (Client Components only)
- `next/image` — automatic WebP, srcset, lazy loading
- `next/font` — zero layout shift typography

**Routing:**

- `app/page.tsx` — main page, all sections
- `app/not-found.tsx` — 404
- `app/loading.tsx` — skeleton fallback

**Server vs Client split:**

- Server Components: Footer, Hero, AboutMe, Projects, Experience, Education, Contacts
- Client Components: Header (menu + theme toggle), ThemeProvider, scroll animations wrapper

---

## Design Token System

Three layers in `globals.css`:

### Layer 1 — Primitives (never used directly in components)

```css
/* Mint scale */
--mint-50 ... --mint-900

/* Charcoal scale */
--charcoal-50 ... --charcoal-900

/* Coral scale */
--coral-100 ... --coral-500
```

### Layer 2 — Semantic tokens (what components reference)

```css
:root {
  --color-background: var(--mint-50);
  --color-surface: white;
  --color-foreground: var(--charcoal-800);
  --color-muted: var(--charcoal-400);
  --color-primary: var(--mint-500);
  --color-accent: var(--coral-300);
  --color-border: var(--mint-200);
}

.dark {
  --color-background: var(--charcoal-900);
  --color-surface: var(--charcoal-800);
  --color-foreground: var(--mint-50);
  --color-muted: var(--charcoal-400);
  --color-primary: var(--mint-400);
  --color-accent: var(--coral-300);
  --color-border: var(--charcoal-700);
}
```

### Layer 3 — Component tokens (added as needed)

```css
--button-bg: var(--color-primary);
--card-surface: var(--color-surface);
```

In Tailwind v4: use `bg-[--color-background]`, `text-[--color-foreground]` etc.

---

## Component Structure

```
src/
  components/
    layout/
      Header.tsx          ← client: nav, mobile menu, theme toggle
      Footer.tsx          ← server
    sections/
      Hero.tsx            ← server
      AboutMe.tsx         ← server
      Projects.tsx        ← server
      Experience.tsx      ← server (timeline)
      Education.tsx       ← server
      Contacts.tsx        ← server
    ui/
      Button.tsx          ← variant="primary|ghost|outline"
      Card.tsx
      SectionHeading.tsx
      Badge.tsx           ← tech stack icons/labels
      BackToTop.tsx       ← client: scroll behavior
  lib/
    data.ts               ← typed content: experiences, projects, contacts
  types/
    index.ts              ← shared interfaces
```

**Content sources from old project:**

- `src/constants/index.js` → `lib/data.ts`
- `src/components/home/main/projects/projects-info.js` → `lib/data.ts`
- `src/components/home/main/contacts/contacts-info.js` → `lib/data.ts`
- `src/components/home/main/blogs/blogs-info.js` → `lib/data.ts`
- `src/assets/locales/en/translation.json` → inlined as strings (no i18n wrapper)
- `public/` assets → copied as-is

---

## Dark Mode Implementation

`ThemeProvider` (Client Component) wraps `layout.tsx`. On mount:

1. Reads `localStorage` for saved preference
2. Falls back to `prefers-color-scheme` if no saved value
3. Sets `class="dark"` on `<html>`

Toggle button in `Header.tsx` flips the class and saves to `localStorage`.

No external theme library — simple and zero-dependency.

**Blocking inline script** in `layout.tsx` prevents flash of wrong theme before hydration.

---

## Implementation Phases

### Phase 1 — Foundation (~half a day)

- [ ] Design tokens in `globals.css` (primitives + semantic layer)
- [ ] `ThemeProvider` client component
- [ ] `Header` with nav + dark/light toggle
- [ ] `Footer`
- [ ] Verify light/dark looks correct

### Phase 2 — Content migration (~1 day)

- [ ] Copy assets from old project `/public`
- [ ] Build `lib/data.ts` with TypeScript interfaces
- [ ] `Hero` section
- [ ] `AboutMe` section
- [ ] `Projects` section + `ProjectCard`
- [ ] `Experience` section (timeline)
- [ ] `Education` section
- [ ] `Contacts` section

### Phase 3 — Polish + deploy (~half a day)

- [ ] Framer Motion scroll animations on Projects
- [ ] `not-found.tsx` and `loading.tsx`
- [ ] Metadata API (title, description, OpenGraph)
- [ ] Lighthouse audit + fixes
- [ ] Deploy to Vercel

### Phase 4 — Storybook (separate effort, post-launch)

- [ ] Add Storybook
- [ ] Write stories for all `ui/` components
- [ ] Feature it as a portfolio item

---

## What This Fixes vs Old Project

| Problem                          | Fix                                              |
| -------------------------------- | ------------------------------------------------ |
| TypeScript configured but unused | All components in `.tsx`, typed data layer       |
| CSS variables in two places      | Single source: `globals.css`                     |
| No dark mode toggle              | `ThemeProvider` + Header toggle + localStorage   |
| No responsive images             | `next/image` handles srcset automatically        |
| No SEO/OpenGraph                 | Next.js Metadata API                             |
| No 404/loading pages             | `not-found.tsx`, `loading.tsx`                   |
| Heavy JS for static sections     | Server Components — zero JS sent                 |
| Fragile GA injection             | `next/script` with `strategy="afterInteractive"` |
