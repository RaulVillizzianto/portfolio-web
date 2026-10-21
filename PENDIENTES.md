# Pendientes para Raúl

Lo que no se pudo deducir de los repos y hay que completar o confirmar antes de mandar el CV a alguien. Cada punto dice dónde se cambia. Cuando algo se resuelve, borrar también la entrada del array `pendientes` de la ficha correspondiente.

## Datos personales (`src/data/perfil.ts`)

- [ ] **Foto**: no hay. Si se quiere, poner `public/foto.jpg` y agregarla en `src/pages/index.astro` y `src/pages/cv.astro`.
- [ ] **Imagen de Open Graph**: el layout referencia `public/og.png`, que no existe. Crear una imagen de 1200×630 o quitar las etiquetas `og:image` de `src/layouts/Base.astro`.
- [ ] LinkedIn: se tomó del perfil de GitHub (`linkedin.com/in/raul-andres-villizzianto-a754651ab`). Confirmar.
- [ ] Email de contacto: se usa `raulvillizzianto@gmail.com`. Confirmar que quiera publicarlo (está visible en la web y el CV).

## Experiencia laboral (`src/content/experiencia/`)

- [x] Experiencia laboral cargada desde el CV de Raúl (Accenture, Andreani, Banco de Valores, Novatium), con título, presentación, formación e inglés en `src/data/perfil.ts`. Falta revisar que la redacción le guste.
- [ ] **independiente.md**: la etapa 2026 (Varsel y Materia OS) quedó como "Proyectos propios, en paralelo al trabajo". Confirmar cómo contarla y desde cuándo.
- [ ] **novatium.md**: el CV dice "Actualidad"; confirmar que sigue vigente y, si no, poner `fin`.

## Fichas de proyectos (`src/content/proyectos/`)

### Confidencialidad y enlaces

- [ ] **materia-os.md**: ¿se puede nombrar al cliente? ¿Se puede enlazar el repo (privado) o el entorno de prueba en Railway? ¿Fecha de inicio real?
- [ ] **varsel.md**: ¿es emprendimiento propio o para un cliente? Hoy está como `personal`. ¿Se puede nombrar, enlazar repos o demo? ¿Estado actual?
- [ ] **prueba-tecnica-banco-api.md**: ¿se puede decir para qué empresa fue la prueba?
- [ ] **publicador-historias.md**, **exchange-api.md**: ¿fueron para un cliente o propios?

### Fichas dudosas (decidir si se publican)

- [ ] **reconocimiento-facial.md**: experimento de un formulario con EmguCV. ¿Vale la pena mostrarlo?
- [ ] **scalper-bot.md** y **kraken-futures-api.md**: no tienen repo público y el código local tiene credenciales embebidas. Si se quieren publicar los repos, limpiarlas primero (y rotarlas).

### Otros

- [ ] **alarma-iot.md**: ¿qué significa la sigla TH de los repos? ¿Quedó instalado?
- [ ] Revisar los textos de todas las fichas: están escritos a partir del código y los README, no de la experiencia real de Raúl.

## Repos revisados y descartados (no tienen ficha)

| Repo | Motivo |
|---|---|
| FixCSGO, FullyExternalCS2, Nueva carpeta | Cheats de juego: restan ante un reclutador |
| ConsoleApp1, WebApplication1, NewRepo, backup, casaApp | Vacíos o plantillas |
| ConciliacionesBatch, logger | Un archivo de prueba (hello world / FizzBuzz) |
| Prometheus | Clon del repo de rabbitmq-server |
| Fachadas_Nuevo | Carpeta vacía |
| dilame-ig-private-api, instagrapi-rest | Librerías de terceros usadas como dependencia |
| dotnet-AfipScraper | Un archivo incompleto (login a AFIP sin terminar) |
| EVWEB, EVWEB.VALIDADOR, dotnet-TarjetasPrecargables, dotnet-PSP, BIND, Stark-GCBA, stark-JWT | Proyectos privados de Stark Solution: fuera del portfolio por pedido de Raúl |
| lectorArduino | Antecedente absorbido en la ficha `alarma-iot` |
| ChatApp (carpeta Portfolio vieja) | Prototipo absorbido en la ficha `messaging-app` |

## Repo y deploy

- [ ] Verificar en GitHub que **Settings → Pages → Source** esté en "GitHub Actions" y que el primer deploy haya pasado (pestaña Actions).
- [ ] Si se prefiere un dominio propio o Cloudflare Pages, seguir el README.
