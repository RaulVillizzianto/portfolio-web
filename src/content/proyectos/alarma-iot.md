---
titulo: Sistema de alarma domiciliaria IoT
resumen: Sistema completo de alarma con sensores Arduino comunicados por radio, un servidor central en .NET que los supervisa por puerto serie y una app Android que recibe notificaciones push y controla los dispositivos.
rol: Diseño y desarrollo (hardware, backend y app)
stack:
  - C# / .NET 6
  - ASP.NET Core
  - Arduino (C++)
  - nRF24L01
  - Puerto serie
  - Dapper
  - SQL Server
  - MongoDB
  - Android (Java)
inicio: 2023-09
fin: 2024-03
tipo: personal
estado: terminado
orden: 34
links:
  repo: https://github.com/RaulVillizzianto/TH-ServidorCentral
  otros:
    - etiqueta: Firmware de los dispositivos
      url: https://github.com/RaulVillizzianto/TH-Dispositivos
    - etiqueta: App Android
      url: https://github.com/RaulVillizzianto/TH-MobileApp
pendientes:
  - Confirmar si el sistema quedó instalado y en uso, y qué significa la sigla TH.
---

## Qué es

Un sistema de alarma para el hogar hecho de punta a punta, desde el sensor hasta la notificación en el celular:

- **Dispositivos**: sensores de movimiento y módulos de relé sobre Arduino que se comunican por radio (nRF24L01) con un transceptor conectado al servidor. Los diagramas de conexión están en el repositorio.
- **Servidor central** en ASP.NET Core 6: lee el puerto serie del transceptor, interpreta los mensajes de cada dispositivo con un protocolo propio, mantiene un **heartbeat** que marca como caído a un dispositivo que deja de responder, y expone una API para la app (login, dispositivos, comandos y notificaciones).
- **App Android** (Java) para ver el estado de los dispositivos, enviarles comandos y recibir las notificaciones.

## Decisiones técnicas

- SQL Server (con Dapper) para clientes y dispositivos y **MongoDB** para la cola de notificaciones push, con endpoints para marcarlas como entregadas y vistas.
- Comunicación con el hardware encapsulada en un singleton con hilo de lectura propio, expresiones regulares para validar las tramas y timeouts por dispositivo.
- El lector de Arduino arrancó como un proyecto aparte (2023) y después se integró en el servidor central.
