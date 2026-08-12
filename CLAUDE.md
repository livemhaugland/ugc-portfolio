# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured in this repo.

## Architecture

This is a single-page portfolio site (UGC/content-creator portfolio) built with React 19 + Vite, styled with Tailwind v4 (via `@tailwindcss/vite`). Despite Tailwind being wired up, the page is actually styled almost entirely with **inline `style={{...}}` objects**, not Tailwind classes — follow that existing convention when editing rather than introducing Tailwind utility classes or a separate CSS module.

- **Everything lives in `src/App.jsx`** (~700 lines, single file). It is *not* split into a components directory — small presentational components (e.g. `BrandsSection`, `MasonryPhotoGrid`, `FixedPhotoGrid`, `VideoRow`, `HotelRow`, `AutoplayVideo`, `ClickToPlayVideo`, `InstagramFeed`) are defined top-to-bottom in the same file above the default-exported `App` component. Keep new sections/components in this file unless the user asks for a restructure.
- **Content is data-driven via arrays/objects at the top of `App.jsx`**, which map onto the layout components below them:
  - `categories` (Fashion / Beauty / Wellness & Lifestyle) + `videos[categoryId]` + `captions[categoryId]` drive the `VideoRow` grids in the Portfolio section. Each category has a fixed `SLOTS = 8`; empty string slots render an "Add video" placeholder.
  - `hotels` drives `HotelRow` (Hotels & Travel section) — each hotel has a `title`, optional `video` (shown in the large first grid cell), and a `photos` array.
  - `brands` drives `BrandsSection` (logo strip); entries can have a `logo` image, a text `name`, or be blank for an "Add logo" placeholder.
  - `heroRowPhotos` drives the fixed 3:4 photo row under the hero.
  - `instagramPosts` drives `InstagramFeed`, which lazily injects Instagram's `embed.js` script.
  - To add new photos/videos/brands: drop the file in `src/assets/`, import it at the top of `App.jsx`, and reference it in the relevant array. Empty string (`""`) is the convention for an unfilled placeholder slot, not `null`/`undefined`.
- **Two video components with different loading strategies**, used deliberately in different places:
  - `AutoplayVideo` — used only for the hero video; loads and autoplays immediately (no lazy-loading, since it's always above the fold).
  - `ClickToPlayVideo` — used everywhere else; uses an `IntersectionObserver` to defer loading until near-viewport, shows a play-button overlay, and only loads/plays audio after a user click.
- **Responsive behavior** is handled by a single `<style>` block injected inline in `App`'s JSX (not a separate CSS file), with one `@media (max-width: 768px)` block overriding specific class names (`.hero-split`, `.video-card`, `.about-grid`, etc.) that are set on elements via `className` alongside their inline styles. When adjusting mobile layout, edit this block rather than adding new CSS files.
- Fonts (`Cormorant Garamond`, `Jost`) are loaded via a Google Fonts `@import` inside that same injected `<style>` block.
- `src/App.css` is unused dead weight from the Vite template — don't add styles there.
