---
titulo: Validador de prestaciones médicas (EVWEB)
resumen: Mantenimiento y evolución de un sistema de validación de recetas y prestaciones de obras sociales con años de historia; integré una nueva obra social, agregué trazabilidad en MongoDB y un servicio de autenticación JWT.
rol: Desarrollo backend en equipo
stack:
  - C# / .NET Framework 4.x
  - ASP.NET MVC
  - C# / .NET 8
  - ASP.NET Core
  - SQL Server
  - MongoDB
  - JWT
  - Servicios Windows
inicio: 2024-08
fin: 2025-04
tipo: laboral
estado: en-produccion
confidencial: true
orden: 21
links: {}
pendientes:
  - Confirmar la empresa (repos en la organización StarkSolutionSRL) y si se puede nombrar al producto EVWEB o a las obras sociales integradas.
  - Confirmar el puesto y la modalidad (relación de dependencia o freelance).
---

## Contexto

EVWEB es un sistema de **validación en línea de recetas y prestaciones médicas** para obras sociales y círculos de farmacias, con más de diez años de desarrollo, decenas de proyectos en la solución y un equipo de varios desarrolladores. Mi trabajo fue sumarme a ese equipo y evolucionarlo sin romper lo existente.

## Lo que hice

- **Integración de una nueva obra social** en el circuito de validación: alta del conector, mapeo de los datos de elegibilidad y efector, y correcciones surgidas en revisión de código.
- **Trazabilidad en MongoDB** del servicio de validación: registro de cada transacción con su identificador, URL completa y fecha de proceso, para poder auditar homologaciones y anulaciones.
- **Homologación y anulación** de prestaciones corregidas y verificadas contra el validador externo.
- **Servicio de autenticación con JWT** en ASP.NET Core 8 (emisión y verificación de tokens, alta de usuarios, persistencia en SQL Server y MongoDB) como pieza nueva al costado del sistema legacy.
- Trabajo con pull requests, ramas por funcionalidad y merges contra `main` en repos compartidos.
