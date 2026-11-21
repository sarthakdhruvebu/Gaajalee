# Gajalee (trial site)

Mobile-first restaurant site built with:

- **Vite** — fast dev server & production build
- **React 19** — component UI
- **TypeScript** — typed menu/outlet data
- **Tailwind CSS v4** — utility styling with brand theme tokens

> Trial website for demonstration only. Not an official Gajalee site.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command         | What it does              |
| --------------- | ------------------------- |
| `npm run dev`   | Start development server  |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview the production build |

## Project layout

- `src/components/` — page sections (Header, Menu, Locations, …)
- `src/data/` — editable menu items & outlet info
- `src/hooks/` — open/closed hours helper (IST)
- `public/logo.svg` — logo / favicon placeholder
