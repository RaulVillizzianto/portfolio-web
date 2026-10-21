---
titulo: Plataforma de tarjetas prepagas
resumen: Backend y backoffice para la emisión y gestión de tarjetas prepagas de una fintech, integrado con el procesador de tarjetas Pomelo; APIs por rol, colas de trabajo, caché, notificaciones y estadísticas.
rol: Desarrollo backend
stack:
  - C# / .NET 6
  - ASP.NET Core
  - Dapper
  - SQL Server
  - MongoDB
  - RabbitMQ
  - Redis
  - Pomelo (webhooks)
  - Swagger
inicio: 2024-04
fin: 2024-06
tipo: laboral
estado: terminado
confidencial: true
orden: 20
links: {}
pendientes:
  - Confirmar la empresa (el repo está en la organización StarkSolutionSRL) y si se puede nombrar al cliente final.
  - Confirmar si el sistema llegó a producción.
  - Confirmar qué parte hizo Raúl y qué parte el resto del equipo.
---

## Qué es

Sistema para que una entidad emita y administre **tarjetas prepagas** para sus clientes: alta de clientes y usuarios, activación de tarjetas, cuentas corrientes, solicitudes, pagos y estadísticas de uso, con un backoffice para administradores.

## Cómo está armado

- **API principal** en ASP.NET Core 6 con controladores por recurso (administradores, clientes, usuarios, tarjetas, solicitudes y pagos), acceso por token y búsqueda con filtros para el backoffice.
- **Servicio de transacciones** que recibe los **webhooks del procesador de tarjetas (Pomelo)** y los procesa de forma asíncrona.
- **Proyectos de soporte** como procesos independientes: gestor de tarjetas, notificaciones, batch de estadísticas y una biblioteca de comunicación externa compartida.
- **Datos**: SQL Server para el modelo transaccional (con Dapper), MongoDB para trazas y documentos, **RabbitMQ** como cola entre procesos y **Redis** como caché. Se dejó documentado cómo monitorear las colas con Prometheus y Grafana.
- Colección de Postman y script SQL versionados junto al código.
