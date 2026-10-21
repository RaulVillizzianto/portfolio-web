---
titulo: Cliente .NET para Kraken Futures
resumen: "Biblioteca propia para la API de Kraken Futures: autenticación firmada, consulta de cuenta y posiciones, envío de órdenes de mercado, take profit y stop loss, y suscripción a posiciones por WebSocket."
rol: Diseño y desarrollo
stack:
  - C# / .NET 6
  - REST
  - WebSockets
  - HMAC-SHA512
inicio: 2022-10
fin: 2022-10
tipo: personal
estado: archivado
orden: 33
links: {}
pendientes:
  - El código tiene credenciales de la cuenta demo embebidas; no publicar el repo sin limpiarlas.
---

## Qué es

Un cliente .NET para la **API de derivados de Kraken**, escrito porque las bibliotecas disponibles no cubrían lo que necesitaba el bot de trading.

## Qué resuelve

- **Firma de las peticiones** (nonce, hash del cuerpo y HMAC con la clave secreta) para los endpoints privados.
- **API de cuenta**: posiciones abiertas y estado de la cuenta.
- **API de órdenes**: órdenes de mercado, *take profit* y *stop loss*, y una operación de alto nivel que abre una posición con sus órdenes de protección.
- **WebSockets** para suscribirse a las posiciones abiertas y reaccionar en tiempo real.

Se usó contra el entorno demo de Kraken Futures desde la [API de trading automatizado](/proyectos/trading-api).
