---
titulo: Publicador programado de historias
resumen: Servicio de fondo que publica historias de Instagram según una programación definida en JSON, manteniendo la sesión y reintentando ante errores, pensado para automatizar la agenda de una cuenta.
rol: Diseño y desarrollo
stack:
  - C# / .NET 6
  - Instagram (API privada)
  - JSON
inicio: 2022-08
fin: 2022-08
tipo: personal
estado: archivado
orden: 40
links:
  repo: https://github.com/RaulVillizzianto/dotnet-PublicadorHistorias
pendientes:
  - Confirmar si fue para un cliente o para uso propio.
---

## Qué es

Una herramienta para **programar historias de Instagram**: se define en una plantilla JSON qué imagen va a qué hora y el servicio las publica solas.

## Cómo está armado

- Proceso de consola .NET 6 que se oculta de la barra de tareas, se sincroniza con el inicio del minuto y revisa la programación cada 60 segundos.
- Módulo de Instagram con manejo de **sesión**, publicación de historias y excepciones propias para distinguir errores recuperables de los que requieren volver a iniciar sesión.
- Lectura de la programación y de los archivos desde disco, con una versión previa en .NET Framework 4.7 conservada en la misma solución.
