import type { CollectionEntry } from 'astro:content';

const MESES = [
  'ene', 'feb', 'mar', 'abr', 'may', 'jun',
  'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
];

/** Prefija una ruta interna con la `base` configurada en astro.config.mjs. */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const limpio = path.startsWith('/') ? path : `/${path}`;
  return `${base}${limpio}`;
}

/** "2026-10" → "oct 2026". */
export function formatearMes(ym: string): string {
  const [anio, mes] = ym.split('-').map(Number);
  return `${MESES[(mes ?? 1) - 1]} ${anio}`;
}

/** "2026-10" → "2026". */
export function anio(ym: string): string {
  return ym.slice(0, 4);
}

/** Rango legible: "oct 2026 – actualidad" o "abr 2024 – jun 2024". */
export function rango(inicio: string, fin?: string): string {
  return `${formatearMes(inicio)} – ${fin ? formatearMes(fin) : 'actualidad'}`;
}

export const ETIQUETA_TIPO: Record<string, string> = {
  freelance: 'Freelance',
  laboral: 'Laboral',
  personal: 'Personal',
};

export const ETIQUETA_ESTADO: Record<string, string> = {
  'en-produccion': 'En producción',
  terminado: 'Terminado',
  'en-desarrollo': 'En desarrollo',
  archivado: 'Archivado',
};

type Proyecto = CollectionEntry<'proyectos'>;

/** Destacados primero, después por `orden` y por fecha de inicio descendente. */
export function ordenarProyectos(lista: Proyecto[]): Proyecto[] {
  return [...lista].sort((a, b) => {
    if (a.data.destacado !== b.data.destacado) return a.data.destacado ? -1 : 1;
    if (a.data.orden !== b.data.orden) return a.data.orden - b.data.orden;
    return b.data.inicio.localeCompare(a.data.inicio);
  });
}

/** Stacks únicos, ordenados por frecuencia y después alfabéticamente. */
export function stacksUnicos(lista: Proyecto[]): string[] {
  const conteo = new Map<string, number>();
  for (const p of lista) for (const s of p.data.stack) conteo.set(s, (conteo.get(s) ?? 0) + 1);
  return [...conteo.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([s]) => s);
}

/** Identificador estable para usar en atributos HTML. */
export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
