---
titulo: API de trading automatizado
resumen: API que recibe alertas de estrategias de TradingView y ejecuta órdenes en futuros de Binance, Kraken y OKX, con monitoreo de posiciones abiertas, ganadas y perdidas, logging y avisos por email.
rol: Diseño y desarrollo
stack:
  - C# / .NET 6
  - ASP.NET Core
  - Binance.Net
  - Kraken
  - OKX
  - TradingView (webhooks)
  - NUnit / Moq
  - MailKit
  - Docker
inicio: 2022-11
fin: 2023-01
tipo: personal
estado: archivado
orden: 31
links:
  repo: https://github.com/RaulVillizzianto/dotnet-TradingApi
---

## Qué es

Un puente entre **estrategias de TradingView** y los exchanges: cada alerta de una estrategia llega como webhook a la API, que abre, modifica o cierra la posición correspondiente en el exchange configurado y la sigue hasta que se cierra.

## Cómo está armado

- API ASP.NET Core 6 con endpoints para órdenes abiertas y órdenes disparadas (*trigger orders*), y un modelo de posición que sabe por sí mismo si es *long* o *short*.
- Conectores para **Binance**, **Kraken** y **OKX** a través de las bibliotecas de CryptoExchange.Net, con los símbolos y las estrategias configurables en archivos.
- Un **monitor** de consola que muestra las posiciones abiertas, ganadas y perdidas, y un proyecto aparte para visualizar datos de mercado.
- Logging con log4net, avisos por email con MailKit, tests con NUnit y Moq, y Dockerfile con notas de despliegue.

## Proyectos relacionados

- **Scalper bot**: bot de scalping en futuros de Binance (2022) con modelos de velas, indicadores y patrones; fue el antecedente de esta API.
- **Cliente de Kraken Futures**: biblioteca propia para la API REST y los WebSockets de Kraken Futures (cuenta, órdenes y posiciones), escrita porque no había un cliente .NET que cubriera la cuenta demo.
