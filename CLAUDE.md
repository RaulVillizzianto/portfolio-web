# portfolio-web · guía para Claude Code

Web personal de Raúl Villizzianto (Astro 7, contenido en Markdown). Idioma del sitio, del código y de los commits: español. Commits en Conventional Commits en español (`feat(proyectos): ...`).

## Sumar o actualizar un proyecto

1. Crear o editar `src/content/proyectos/<slug>.md`. El slug es la URL (`/proyectos/<slug>`): minúsculas y guiones.
2. Frontmatter según el esquema de [src/content.config.ts](src/content.config.ts):

```yaml
---
titulo: Nombre del proyecto
resumen: Una o dos oraciones (20 a 260 caracteres). Se ve en las tarjetas y en el CV.
rol: Qué hizo Raúl (por ejemplo "Diseño y desarrollo backend")
stack: [C# / .NET 10, PostgreSQL, Next.js 16]   # reusar nombres ya existentes en otras fichas
inicio: 2026-10          # YYYY-MM
fin: 2026-12             # opcional; sin `fin` = sigue activo
tipo: freelance          # freelance | laboral | personal
destacado: false         # true solo para los 3 o 4 mejores (van en la portada)
estado: en-desarrollo    # en-produccion | terminado | en-desarrollo | archivado
links:                   # todos opcionales
  repo: https://github.com/...
  demo: https://...
  otros:
    - etiqueta: App Android
      url: https://...
confidencial: false      # true si se describe sin nombrar al cliente ni enlazar código
orden: 100               # desempate dentro de la lista; menor = antes
pendientes: []           # dudas para Raúl; no se publican, se listan en PENDIENTES.md
---
```

3. El cuerpo del Markdown es la descripción larga. Estructura sugerida: **Qué es**, **Mi rol** o **Lo que hice**, **Cómo está armado** / **Decisiones técnicas**, **Estado**. Enlaces internos a otras fichas: `/proyectos/<slug>` (el prefijo de GitHub Pages se agrega solo).
4. Para la experiencia laboral, lo mismo en `src/content/experiencia/<slug>.md` (campos: `empresa`, `puesto`, `inicio`, `fin`, `resumen`, `stack`, `ubicacion`, `orden`, `pendientes`).
5. Probar: `pnpm build` (falla si el frontmatter no cumple el esquema) y `pnpm check`. Para verlo: `pnpm dev` y abrir http://localhost:4321/portfolio-web/.
6. Si quedó algo sin confirmar, agregarlo al array `pendientes` de la ficha **y** a [PENDIENTES.md](PENDIENTES.md).

## Reglas

- **No inventar** clientes, empresas, fechas ni resultados. Lo que no se sabe va como pendiente.
- **No publicar** nada confidencial sin confirmación de Raúl: nombres de clientes, repos privados, credenciales, URLs internas. Ante la duda, `confidencial: true` y sin enlaces.
- Los datos personales (título, contacto, habilidades, idiomas) están en `src/data/perfil.ts`.
- Sin dependencias nuevas de UI, sin analytics de terceros. El CSS está en `src/styles/global.css` con variables; respetar el modo oscuro.
- Las rutas internas en `.astro` se arman con `url('/ruta')` de `src/lib/utils.ts` para respetar la `base`.

## Entorno

- pnpm 10 (`corepack enable`), Node 22.22+. En la máquina de Raúl pnpm está en `%APPDATA%\npm` y `pnpm dlx` falla: usar `npx`.
- Deploy automático a GitHub Pages desde `main` con `.github/workflows/deploy.yml`; el PDF del CV lo genera el workflow (`pnpm cv`, requiere Playwright).
