# Plaza Victoria — Sitio Web

Sitio web oficial de **Plaza Victoria**, un centro comercial ubicado en México. Permite a los visitantes explorar las tiendas, ver novedades y promociones, conocer los locales disponibles y explorar una visualización 3D interactiva del piso del plaza.

## Características

- **Directorio de tiendas** — Búsqueda y filtro por categoría, con página de detalle por tienda (galería, horarios, contacto directo por WhatsApp, teléfono, redes sociales).
- **Novedades y promociones** — Feed de publicaciones separado: eventos y aperturas en `/novedades`, ofertas activas en `/ofertas`.
- **Adquiere tu local** — Listado de espacios comerciales disponibles en renta o venta con formulario de contacto vía WhatsApp.
- **Visualización 3D** — Renderizado interactivo del piso 1 del plaza usando Three.js.
- **SEO completo** — Meta tags dinámicos, Open Graph, schema.org (ShoppingCenter), pre-renderizado de páginas para redes sociales.
- **Diseño responsivo** — Mobile-first con navegación inferior en dispositivos móviles.

## Tech Stack

- **React 19** + **TypeScript**
- **React Router v7** — enrutamiento client-side
- **Vite 6** — build tool
- **Tailwind CSS 3** — estilos con paleta dorada personalizada
- **Three.js** + **@react-three/fiber** — visualización 3D
- **React Helmet Async** — gestión de `<head>` y SEO

## Comandos

```bash
npm run dev       # Servidor de desarrollo con hot reload
npm run build     # Build de producción (TypeScript check → Vite → OG pages)
npm run lint      # Linter (ESLint)
npm run preview   # Vista previa del build de producción
```

## Estructura principal

```
src/
├── pages/          # Páginas: Inicio, Tiendas, Novedades, Ofertas, AdquiereTuLocal
├── components/     # Layout (Header, Footer, MobileBottomNav) + UI primitives + 3D
├── data/           # Todo el contenido estático (negociosData, postData, plazaInfo, spacesData)
├── routes/         # AppRoutes.tsx — definición de rutas y redirects
└── lib/            # Utilidades (formatDate)

public/
├── plaza/          # Fotos del plaza
├── feed/           # Media de publicaciones
├── negocios/       # Logos y galerías de tiendas
└── renders/        # Modelos 3D (.glb)
```

## Despliegue

El sitio se despliega automáticamente en **Netlify** desde la rama `main`. Configuración en `netlify.toml`.

Todo el contenido es estático — los datos de tiendas, publicaciones y espacios viven en archivos TypeScript bajo `src/data/`. No hay backend ni base de datos.
