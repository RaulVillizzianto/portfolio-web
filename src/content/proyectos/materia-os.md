---
titulo: Materia OS
resumen: SaaS para profesionales independientes que unifica CRM, presupuestos interactivos, aprobación de entregables y cobranza condicionada; los archivos finales se liberan solo cuando el hito de pago está saldado.
rol: Arquitectura y desarrollo full stack (único desarrollador)
stack:
  - C# / .NET 10
  - ASP.NET Core
  - EF Core
  - PostgreSQL
  - Hangfire
  - Next.js 16
  - TypeScript
  - Tailwind CSS
  - Expo / React Native
  - Mercado Pago
  - USDT (TRC20)
  - Claude API
  - Docker
  - Railway
  - GitHub Actions
inicio: 2026-10
tipo: freelance
destacado: true
estado: en-desarrollo
confidencial: true
orden: 1
links: {}
pendientes:
  - Confirmar si se puede nombrar al cliente (dueño del producto) y enlazar el repo (hoy es privado).
  - Confirmar si se puede publicar la URL del entorno de prueba en Railway como demo.
  - Confirmar la fecha de inicio real del proyecto (el repo arranca el 2026-10-05; el diseño en Figma es anterior).
---

## Qué es

Materia OS es un SaaS para profesionales independientes y estudios chicos (arquitectura, diseño, 3D, community management). Reúne en un solo lugar lo que hoy se reparte entre planillas, WhatsApp y transferencias:

- **CRM y proyectos**: clientes, proyectos con etapas, tareas internas con responsable y horas, calendario y feed de actividad.
- **Presupuestos interactivos**: un constructor por secciones tipadas (portada, textos, honorarios, opciones, plazos, esquema de pagos y términos) con versiones inmutables, vista previa A4 y PDF.
- **Portal del cliente** sin registro, por enlace de invitación: ve la propuesta, la aprueba con evidencia, revisa entregables con anotaciones sobre la imagen y conversa.
- **Cobranza condicionada**: cada hito de pago genera una solicitud de cobro por Mercado Pago o USDT; **los archivos finales se liberan solo cuando el hito está pagado**. Materia nunca custodia el dinero: el pago llega directo a la cuenta o la wallet del profesional.
- **Finanzas**: documentos de cobro numerados, vencimientos, recordatorios y agregados mensuales.
- **IA con aprobación humana**: redacción asistida de los textos del presupuesto; nada generado llega al cliente sin que el profesional lo apruebe.
- **App móvil** para profesionales con paridad completa del backoffice.

## Mi rol

Diseñé la arquitectura a partir de un prototipo de alta fidelidad en Figma y de un dossier de producto, la documenté en un documento técnico y 23 ADR, y la implementé de punta a punta: API, worker, web, app móvil, infraestructura y CI. El código está acompañado de tests unitarios, de integración (incluido un test de "cuenta vecina" por módulo para el aislamiento multi-tenant) y una suite E2E móvil con Maestro.

## Arquitectura

Tres procesos (web, API y worker) sobre dos almacenes (PostgreSQL y un bucket S3), desplegados en Railway para el entorno de prueba.

- **Backend**: ASP.NET Core 10 como **monolito modular**: ocho módulos (`Identity`, `Crm`, `Quotes`, `Portal`, `Deliverables`, `Payments`, `Finance`, `Ai`), cada uno con su `DbContext`, su esquema y sus Minimal APIs organizadas como vertical slices. El worker es el mismo código desplegado como segundo proceso que corre Hangfire.
- **Frontend**: Next.js 16 (App Router) con tres grupos de rutas (landing, backoffice y portal del cliente) servidos por hostname desde un único origen público; la API no se expone directamente.
- **Móvil**: app Expo (Expo Router, TypeScript estricto) que comparte con la web el cliente generado desde OpenAPI y dos paquetes propios del monorepo.
- **PDF**: la propuesta se renderiza con Playwright desde la misma plantilla de impresión de Next.js que ve el profesional, así no hay deriva entre vista previa y PDF.

## Decisiones técnicas que vale la pena contar

- **Módulos con contratos y eventos por outbox.** Ningún módulo lee tablas de otro. Los comandos sincrónicos pasan por interfaces publicadas en un proyecto `.Contracts` por módulo (lo que evita ciclos de referencia y vuelve estructural la propiedad de cada tabla; un test de arquitectura lo verifica). Los efectos secundarios viajan como eventos de dominio escritos en un **outbox transaccional** en PostgreSQL, en la misma transacción que el cambio de estado, y un relay con `FOR UPDATE SKIP LOCKED` los entrega vía Hangfire con reintentos; los handlers son idempotentes. Ejemplo: `Payments` confirma un cobro y publica `PaymentConfirmed`; `Quotes` marca el hito como pagado y publica `MilestonePaid`; `Deliverables` libera el paquete, `Finance` cierra el documento y `Portal` avisa al cliente.
- **Multi-tenant por filtro de cuenta.** Una sola base; toda tabla de negocio lleva `account_id`, EF Core aplica un filtro global por cuenta en cada `DbContext` y `SaveChanges` sella la cuenta en los inserts. Cualquier consulta que necesite saltar el filtro (webhooks, jobs) lo declara en el nombre y lo justifica.
- **Webhooks que no se creen el payload.** Toda notificación de pago entra a un inbox con `external_event_id` único, se responde 200 en menos de un segundo y el worker **reconsulta al proveedor** antes de confirmar. La solicitud de pago es una máquina de estados explícita y solo `confirmed` dispara la liberación.
- **Agregados entre módulos por proyección local.** Los saldos que el CRM necesita para ordenar y filtrar se alimentan de los eventos de `Quotes` en una tabla propia con clave de idempotencia, en vez de consultar al otro módulo en cada pedido.
- **Paquetes compartidos entre web y móvil.** El vocabulario, el formato, las reglas puras y los tokens de diseño viven en `@materia/core` (sin DOM) y el cliente HTTP con hooks de TanStack Query en `@materia/api`, con un almacén de token inyectable (cookies en la web, SecureStore y Bearer en la app). La web pasó a consumirlos por fachadas, así la app nativa reutiliza la lógica sin envolver la web en un WebView.
- **Seguridad por defecto**: JWT en cookie httpOnly, CSP con nonce por pedido, tokens del portal guardados como hash, secretos cifrados con Data Protection y nada sensible en logs.

## Estado

La fase 1 (el núcleo cobrable) está completa en código y corre en un entorno de prueba en Railway para los primeros usuarios. La app móvil tiene las fases M1 a M5 hechas y verificadas con tests; la publicación en las tiendas espera las cuentas de Apple y Google.
