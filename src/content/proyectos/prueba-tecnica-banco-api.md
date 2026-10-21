---
titulo: Banco API · prueba técnica .NET 8
resumen: API REST por capas sobre SQLite con Dapper que expone clientes, cuentas y movimientos, consulta la Central de Deudores del BCRA con caché de dos niveles y resiliencia con Polly; 140 tests y 90 % de cobertura.
rol: Desarrollo completo
stack:
  - C# / .NET 8
  - ASP.NET Core
  - Dapper
  - SQLite
  - Polly
  - xUnit
  - GitHub Actions
inicio: 2026-08
fin: 2026-08
tipo: personal
estado: terminado
orden: 10
links:
  repo: https://github.com/RaulVillizzianto/prueba-tecnica-banco-api
pendientes:
  - Confirmar si se puede decir para qué empresa fue la prueba (hoy no se nombra).
---

## Qué es

Resolución de una prueba técnica backend: una API que expone clientes, cuentas y movimientos y consulta la situación crediticia de un CUIT en la **Central de Deudores del BCRA**, cacheando la respuesta y aguantando que el organismo falle.

Se levanta con dos comandos (`--init-db` aplica el esquema y los datos de demostración) y tiene Swagger en la raíz.

## Decisiones de diseño

Las decisiones y sus alternativas están documentadas en el repositorio (`docs/DECISIONES.md`). Las principales:

- **Capas con la regla de dependencias sostenida por el compilador**: el proyecto de dominio no referencia ningún paquete ni proyecto, así que no puede usar Dapper, HTTP ni logging; sus tests corren en milisegundos sin base ni red.
- **Dapper en lugar de EF Core** porque el enunciado trata el esquema como un artefacto SQL versionado por DBAs y exige loguear las consultas; el SQL está escrito y se loguea tal cual. Se incluye la traducción del script maestro a SQL Server como referencia para producción.
- **DTOs explícitos** mapeados a mano, sin AutoMapper: un renombre falla en tiempo de compilación.
- **Caché en memoria de dos niveles** para la consulta al BCRA y **Polly** con reintentos, circuit breaker y timeout; la respuesta indica si salió del caché o del organismo.
- CI en GitHub Actions con 140 tests y cobertura del 90 % de líneas.
