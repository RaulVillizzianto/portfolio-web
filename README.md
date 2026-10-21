# portfolio-web

Web personal de [Raúl Villizzianto](https://github.com/RaulVillizzianto): experiencia laboral, proyectos freelance y personales, y CV descargable. Hecha con [Astro](https://astro.build) y contenido en Markdown.

Publicada en **https://raulvillizzianto.github.io/portfolio-web/**

## Cómo está armada

- **Astro 7 + TypeScript**, sitio estático, sin frameworks de UI ni analytics.
- El contenido vive en **content collections** con esquema validado por zod ([src/content.config.ts](src/content.config.ts)):
  - `src/content/proyectos/<slug>.md`: una ficha por proyecto.
  - `src/content/experiencia/<slug>.md`: una entrada por etapa laboral.
- Datos personales (nombre, título, contacto, habilidades): [src/data/perfil.ts](src/data/perfil.ts).
- Páginas: inicio, `/proyectos` (con filtro por tipo y tecnología), `/proyectos/<slug>`, `/experiencia` y `/cv` (imprimible, con estilos `@media print`).
- SEO básico: títulos, descripción, Open Graph, `sitemap-index.xml` y `robots.txt`. Tema claro con modo oscuro por `prefers-color-scheme`.

Cómo agregar o editar una ficha está en [CLAUDE.md](CLAUDE.md). Lo que falta completar está en [PENDIENTES.md](PENDIENTES.md).

## Correr en local

Requiere Node 22.22 o superior y pnpm 10 (`corepack enable` lo instala solo).

```bash
pnpm install
```

```bash
pnpm dev
```

Abre http://localhost:4321/portfolio-web/ (el sitio se sirve bajo `/portfolio-web` porque así queda en GitHub Pages).

Otros comandos:

| Comando | Qué hace |
|---|---|
| `pnpm build` | Compila a `dist/`. Falla si una ficha no cumple el esquema. |
| `pnpm check` | Chequeo de tipos de Astro y TypeScript. |
| `pnpm preview` | Sirve `dist/` para probar el build. |
| `pnpm cv` | Renderiza `/cv` a `public/cv.pdf` con Playwright (ver abajo). |

### CV en PDF

La página `/cv` ya es imprimible desde el navegador (Imprimir → Guardar como PDF, A4). Además, `pnpm cv` genera `public/cv.pdf` con Playwright **solo si Playwright está instalado**; si no, avisa y termina sin error. Para generarlo en local:

```bash
pnpm add -D playwright && pnpm exec playwright install chromium && pnpm build && pnpm cv && pnpm build
```

El segundo `pnpm build` es para que la página `/cv` muestre el botón "Descargar PDF" (solo aparece si `public/cv.pdf` existe al compilar). `public/cv.pdf` está en `.gitignore`: lo genera el workflow en cada deploy.

## Deploy

### GitHub Pages (configurado)

El workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) corre en cada push a `main`: instala, chequea, compila, genera el PDF del CV y publica `dist/` en GitHub Pages. En el repo, **Settings → Pages → Source** tiene que estar en **GitHub Actions**.

La URL base está fija en [astro.config.mjs](astro.config.mjs) (`site` y `base`). Si el sitio pasa a un dominio propio, cambiar `site` y poner `base: '/'`; también actualizar la URL del sitemap en `public/robots.txt`.

### Cloudflare Pages (alternativa)

1. En Cloudflare Pages, crear un proyecto conectado a este repo.
2. Build command: `pnpm build`. Output directory: `dist`. Variable de entorno `NODE_VERSION=24`.
3. En `astro.config.mjs`, poner `site: 'https://<tu-dominio>'` y `base: '/'`, y actualizar `public/robots.txt`.
4. Opcional: borrar o desactivar el workflow de GitHub Pages para no publicar dos veces.

Vercel (plan Hobby, válido para un sitio personal) funciona igual: detecta Astro solo; solo hay que ajustar `site` y `base`.

## Licencia

El código del sitio es de uso libre. Los textos y datos personales son de Raúl Villizzianto.
