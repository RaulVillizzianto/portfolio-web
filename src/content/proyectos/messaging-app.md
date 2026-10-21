---
titulo: Mensajería en tiempo real
resumen: Servidor de mensajería punto a punto con WebSockets en ASP.NET Core, cola de mensajes pendientes para usuarios desconectados y un cliente de consola; con un prototipo previo en Python y Flask.
rol: Desarrollo completo
stack:
  - C# / .NET 6
  - ASP.NET Core
  - WebSockets
  - Python
  - Flask
inicio: 2022-07
fin: 2022-07
tipo: personal
estado: archivado
orden: 61
links:
  repo: https://github.com/RaulVillizzianto/portfolio-MessagingApp
---

## Qué es

Un sistema de **mensajería entre usuarios** en tiempo real, hecho para practicar WebSockets y el manejo de conexiones del lado del servidor.

## Cómo está armado

- **Servidor** en ASP.NET Core 6 con controladores para clientes, conexiones y mensajes, *handlers* para el estado de cada cliente y un proceso de **mensajes pendientes** que entrega lo acumulado cuando el destinatario vuelve a conectarse.
- **Cliente de consola** que mantiene la conexión WebSocket en un hilo propio, envía y recibe mensajes y se reconecta ante caídas.
- **Prototipo previo en Python** con Flask: una API REST mínima que encola mensajes por destinatario y los entrega al consultar.
