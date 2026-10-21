---
titulo: Varsel · alertas de licitaciones públicas
resumen: Plataforma para proveedores del Estado argentino que scrapea compr.ar, arma una base analítica de licitaciones y cruza cada proceso con el catálogo, los rubros y las zonas de cada cliente para avisarle por email y en un dashboard.
rol: Diseño y desarrollo full stack
stack:
  - C# / .NET 8
  - ASP.NET Core
  - EF Core
  - PostgreSQL
  - MongoDB
  - Next.js 16
  - TypeScript
  - Tailwind CSS
  - Claude API
  - Docker
  - Railway
  - GitHub Actions
inicio: 2026-05
fin: 2026-08
tipo: personal
destacado: true
estado: en-desarrollo
confidencial: true
orden: 2
links: {}
pendientes:
  - Confirmar si Varsel es un emprendimiento propio o un desarrollo para un cliente (hoy figura como personal).
  - Confirmar si se puede nombrar públicamente, enlazar los repos (privados) o una demo.
  - Confirmar el estado actual (último commit visto en agosto de 2026).
---

## Qué es

Varsel es un SaaS para empresas que venden al Estado argentino. En lugar de revisar a mano el portal de compras públicas, el proveedor carga su catálogo y Varsel le avisa cuando aparece una licitación en la que podría cotizar.

El sistema está repartido en tres servicios que comparten datos:

- **Pipeline de ingesta (LicitaInsight)**: workers .NET que descargan los reportes de compr.ar, encolan los procesos en MongoDB, bajan los HTML de detalle, dictamen y cuadro comparativo a un bucket S3 y los parsean a una capa analítica en PostgreSQL, con vistas materializadas para BI y segmentación comercial. Procesa por capas según la antigüedad del proceso (histórico frío, detalle completo, procesamiento total).
- **Motor de alertas (LicitaBot)**: un batch diario, agendado por cron en Railway, que descubre los procesos con apertura en el próximo mes, normaliza la ubicación con ayuda de un modelo de lenguaje (con caché por organismo), cruza rubro, zona y catálogo de cada cliente, estima el valor económico de los renglones que vende y notifica por dos canales independientes: la fila del dashboard y un email HTML. Incluye deduplicación en Mongo, una guarda anti-WAF que pausa el scraping ante bloqueos y seguimiento del costo de IA por llamada.
- **Producto (API + web)**: API ASP.NET Core 8 con Identity y JWT, importador de catálogos desde Excel, y frontend Next.js 16 con onboarding, catálogo, feed de oportunidades y panel de salud del sistema. El motor de matching se absorbió luego dentro de la API detrás de un feature flag, con un plan de cutover documentado.

## Decisiones técnicas

- Separar ingesta, matching y producto en servicios con bases propias (Postgres analítico, Postgres de clientes, Mongo como cola y caché) para que el scraping no comprometa la experiencia del usuario.
- Errores de los jobs reportados a una tabla del producto, con deduplicación por ventana, para tener un panel de salud sin agregar observabilidad externa.
- Notificaciones que respetan la frecuencia elegida por el cliente (inmediata, diaria o semanal) y la diferencia entre "avisar" y "registrar en el dashboard".
