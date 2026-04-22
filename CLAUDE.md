# Plaza Victoria — CLAUDE.md

## Project Overview

Web application for **Plaza Victoria**, a shopping mall. Visitors can browse the store directory, read news and promotions, see available commercial spaces for rent/sale, and explore an interactive 3D visualization of the mall floor.

Fully static React SPA — no backend, no database. All data lives in TypeScript files under `src/data/`.

---

## Commands

```bash
npm run dev       # Start dev server (Vite, hot reload)
npm run build     # tsc check → vite build → generate OG pages
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

Deployment is on **Netlify** (`netlify.toml`). `dist/` is the publish directory.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Routing | React Router v7 |
| Build | Vite 6 |
| Styling | Tailwind CSS 3 (custom gold palette, base `#C4973E`) |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Icons | Lucide React, React Icons |
| SEO | React Helmet Async, JSON-LD (ShoppingCenter schema) |
| Fonts | Inter (Google Fonts, loaded in `index.html`) |

---

## Routes

| Path | Page | Notes |
|---|---|---|
| `/inicio` | Home/landing | Hero, About, Features, Hours, CTA |
| `/tiendas` | Store directory | Search + category filter |
| `/tiendas/:slug` | Store detail | Gallery, hours, contact buttons |
| `/novedades` | News feed | Excludes posts labeled "promociones" |
| `/novedades/:slug` | Post detail | Full post with media |
| `/ofertas` | Promotions | Only posts labeled "promociones" with `active: true` |
| `/adquiere-tu-local` | Space rental | Available spaces + contact form |
| `/` | — | Redirects to `/inicio` |
| `/directorio/*`, `/nosotros`, `/local`, `/agendar` | — | Legacy redirects |

---

## Data Files (`src/data/`)

All content is hardcoded here — no API calls.

- **`negociosData.ts`** — Array of `Negocio[]`. Each store has: id, nombre, categoria, logo, imagenes[], horario, ubicacion, contacto (tel, whatsapp, facebook, instagram), ruta (slug).
- **`postData.ts`** — Array of `Post[]`. Each post has: id, slug, title, media[] (`{type: 'image'|'video', src}`), labels[] (`'eventos'|'aperturas'|'promociones'`), date (YYYY-MM-DD), active (optional, defaults true). Set `active: false` to hide from `/ofertas` while keeping it visible in `/novedades`.
- **`plazaInfo.ts`** — Single object with plaza name, slogan, address, hours[], features[], Google Maps embed URL, social links, WhatsApp contact.
- **`spacesData.ts`** — Array of `CommercialSpace[]`. Each has: id, unit, type (`'renta'|'venta'`), floor, size (m²), description, image.

---

## Directory Structure

```
src/
├── pages/
│   ├── Inicio/           # Landing page + sections/
│   ├── Tiendas/          # Directory + TiendaDetalle + components/
│   ├── Novedades/        # News feed + PostDetail
│   ├── Ofertas/          # Promos feed + components/
│   ├── AdquiereTuLocal/  # Space listings + ContactForm
│   └── (Home|Local|Directorio|Nosotros|Agendar)/  # Legacy — redirects only
├── components/
│   ├── layout/           # Header, Footer, MobileBottomNav
│   ├── ui/               # Button, SectionLabel (reusable primitives)
│   └── Renders3D/        # 3DPiso1.tsx — Three.js interactive floor map
├── data/                 # All static content (see above)
├── assets/               # Bundled images (imported by data files)
├── lib/
│   └── formatDate.ts     # YYYY-MM-DD → "21 de marzo de 2026" (es-MX)
├── routes/
│   └── AppRoutes.tsx     # All route definitions + legacy redirects
├── App.tsx
└── main.tsx

public/
├── plaza/                # Plaza interior/exterior photos
├── feed/                 # Post media (images and videos)
├── negocios/             # Store logos and gallery images
└── renders/              # 3D model files (Piso11.glb)

scripts/
└── generar-og-pages.ts   # Generates /dist/novedades/:slug/index.html for OG previews
```

---

## Key Conventions

- **Image paths:** Public images use root-relative paths like `/negocios/sneakers-warriors/logo.jpg` or `/feed/Images/foto.jpg`. Bundled assets under `src/assets/` use TypeScript imports via `src/assets/images.ts`.
- **Post filtering logic:** `/novedades` filters OUT "promociones" label; `/ofertas` filters IN "promociones" AND checks `active !== false`.
- **Contact form:** `ContactForm.tsx` submits by building a WhatsApp deep-link URL — no server needed.
- **Mobile nav:** Pages use `pb-16` bottom padding to avoid content hidden under `MobileBottomNav`.
- **Legacy folders:** `src/pages/Home/`, `src/components/Home/`, `src/components/Directorio/`, etc. are old code kept for reference. Don't add features there.
- **Tailwind primary color:** Use `primary-600` (gold) as the brand accent. Full palette defined in `tailwind.config.js`.
