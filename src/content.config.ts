import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Mes en formato YYYY-MM. */
const mes = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Usar formato YYYY-MM, por ejemplo 2026-10');

const enlace = z.object({
  etiqueta: z.string(),
  url: z.url(),
});

/**
 * Una ficha por proyecto: `src/content/proyectos/<slug>.md`.
 * El cuerpo del Markdown es la descripción larga.
 */
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string().min(2),
    /** Una o dos oraciones; se muestra en las tarjetas y en el CV. */
    resumen: z.string().min(20).max(260),
    rol: z.string(),
    stack: z.array(z.string()).min(1),
    inicio: mes,
    /** Si falta, el proyecto sigue activo. */
    fin: mes.optional(),
    tipo: z.enum(['freelance', 'laboral', 'personal']),
    destacado: z.boolean().default(false),
    estado: z.enum(['en-produccion', 'terminado', 'en-desarrollo', 'archivado']),
    links: z
      .object({
        repo: z.url().optional(),
        demo: z.url().optional(),
        otros: z.array(enlace).optional(),
      })
      .default({}),
    /** true cuando se describe el trabajo sin nombrar al cliente ni mostrar código. */
    confidencial: z.boolean().default(false),
    /** Orden dentro de la lista (menor = primero). Después se ordena por fecha. */
    orden: z.number().int().default(100),
    /** Datos que faltan confirmar. No se publican; se listan en PENDIENTES.md. */
    pendientes: z.array(z.string()).default([]),
  }),
});

/**
 * Una entrada por puesto o etapa laboral: `src/content/experiencia/<slug>.md`.
 * El cuerpo del Markdown es la descripción de lo hecho.
 */
const experiencia = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiencia' }),
  schema: z.object({
    empresa: z.string(),
    puesto: z.string(),
    inicio: mes,
    fin: mes.optional(),
    /** Una oración para el CV y la portada. */
    resumen: z.string().min(10).max(260),
    stack: z.array(z.string()).default([]),
    ubicacion: z.string().optional(),
    orden: z.number().int().default(100),
    pendientes: z.array(z.string()).default([]),
  }),
});

export const collections = { proyectos, experiencia };
