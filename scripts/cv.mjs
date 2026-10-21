#!/usr/bin/env node
/**
 * Renderiza la página /cv del sitio ya compilado (dist/) a public/cv.pdf con Playwright.
 *
 * - Requiere haber corrido `pnpm build` antes.
 * - Playwright NO es dependencia del proyecto: si no está instalado, el script
 *   avisa y termina con código 0 para no romper el build ni el deploy.
 *   Para instalarlo: `pnpm add -D playwright && pnpm exec playwright install chromium`.
 * - Copia el PDF también a dist/cv.pdf para que el deploy lo incluya sin recompilar,
 *   aunque el enlace "Descargar PDF" de la página solo aparece si public/cv.pdf
 *   existía al compilar (por eso el workflow compila, genera el PDF y vuelve a compilar).
 */
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync, mkdirSync, copyFileSync } from 'node:fs';
import { createReadStream } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(raiz, 'dist');
const salida = join(raiz, 'public', 'cv.pdf');

// La base del sitio se lee del config para no duplicarla.
const config = readFileSync(join(raiz, 'astro.config.mjs'), 'utf8');
const base = (config.match(/const base = '([^']*)'/)?.[1] ?? '/').replace(/\/$/, '');

if (!existsSync(join(dist, 'index.html'))) {
  console.error('No existe dist/. Corré `pnpm build` antes de `pnpm cv`.');
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.log(
    'Playwright no está instalado; se omite la generación de public/cv.pdf.\n' +
      'Para generarlo: pnpm add -D playwright && pnpm exec playwright install chromium && pnpm cv',
  );
  process.exit(0);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
};

/** Servidor estático mínimo que sirve dist/ bajo la misma `base` que producción. */
const servidor = createServer((req, res) => {
  let ruta = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname);
  if (base && ruta.startsWith(base)) ruta = ruta.slice(base.length) || '/';
  let archivo = normalize(join(dist, ruta));
  if (!archivo.startsWith(dist)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(archivo) && statSync(archivo).isDirectory()) archivo = join(archivo, 'index.html');
  if (!existsSync(archivo)) {
    res.writeHead(404).end('no encontrado');
    return;
  }
  res.writeHead(200, { 'content-type': MIME[extname(archivo)] ?? 'application/octet-stream' });
  createReadStream(archivo).pipe(res);
});

await new Promise((listo) => servidor.listen(0, '127.0.0.1', listo));
const { port } = servidor.address();
const urlCv = `http://127.0.0.1:${port}${base}/cv/`;

try {
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage();
  await pagina.goto(urlCv, { waitUntil: 'networkidle' });
  await pagina.emulateMedia({ media: 'print', colorScheme: 'light' });
  mkdirSync(join(raiz, 'public'), { recursive: true });
  await pagina.pdf({
    path: salida,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  await navegador.close();
  copyFileSync(salida, join(dist, 'cv.pdf'));
  console.log(`CV generado en ${salida} (y copiado a dist/cv.pdf).`);
} finally {
  servidor.close();
}
