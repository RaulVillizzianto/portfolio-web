---
titulo: Bot de scalping para futuros
resumen: Bot de consola que opera futuros de Binance con una estrategia de scalping basada en velas, indicadores y patrones, con streams de usuario para seguir las posiciones en tiempo real.
rol: Diseño y desarrollo
stack:
  - C# / .NET 6
  - Binance.Net
  - WebSockets
inicio: 2022-08
fin: 2022-10
tipo: personal
estado: archivado
orden: 32
links: {}
pendientes:
  - El código tiene credenciales embebidas; no publicar el repo sin limpiarlas.
---

## Qué es

Un bot de **scalping** para futuros de Binance. Se conecta a los streams del exchange, arma velas, calcula indicadores, detecta patrones y abre y cierra posiciones de corta duración según la configuración.

## Cómo está armado

- Proyecto de consola .NET 6 organizado en configuración, constantes, conexión, operaciones y modelos (exchange, velas, indicadores y patrones).
- Uso de **Binance.Net** y **CryptoExchange.Net** para la API REST y los WebSockets de futuros (stream de usuario y de mercado), probado primero contra la testnet.
- Persistencia de operaciones en archivos para analizar los resultados.

Fue el primer proyecto de la línea de trading que terminó en la [API de trading automatizado](/proyectos/trading-api).
