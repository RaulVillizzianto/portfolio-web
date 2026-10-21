/**
 * Plugin hast para Sätteri (el procesador de Markdown de Astro 7) que antepone
 * la `base` del sitio a los enlaces internos escritos como `/proyectos/slug`.
 * Así las fichas pueden enlazarse entre sí sin conocer el prefijo de GitHub Pages.
 */
export function enlacesConBase(base = '/') {
  const prefijo = base.replace(/\/$/, '');
  return {
    name: 'enlaces-con-base',
    element: {
      filter: ['a'],
      visit(nodo, ctx) {
        if (!prefijo) return;
        const href = nodo.properties?.href;
        if (
          typeof href === 'string' &&
          href.startsWith('/') &&
          !href.startsWith('//') &&
          href !== prefijo &&
          !href.startsWith(`${prefijo}/`)
        ) {
          ctx.setProperty(nodo, 'href', `${prefijo}${href}`);
        }
      },
    },
  };
}
