---
titulo: Exchange por transferencia bancaria
resumen: "Prototipo de servicio de cambio de moneda por transferencias: el usuario pide una orden, recibe un CBU y una referencia, y un monitor detecta la transferencia entrante y ejecuta la contra-transferencia en la otra moneda."
rol: Diseño y desarrollo
stack:
  - C# / .NET 6
  - ASP.NET Core
  - Dapper
  - SQL Server
  - API BIND
  - Criptoya
  - HTML / JavaScript
inicio: 2023-02
fin: 2023-05
tipo: personal
estado: archivado
orden: 30
links: {}
pendientes:
  - Confirmar si fue un proyecto propio o un encargo, y si llegó a usarse.
---

## Qué es

Un servicio de **exchange por transferencia bancaria**. El flujo es simple para el usuario:

1. Indica el CBU donde quiere recibir la moneda de destino, el importe, la moneda y el CUIT desde el que va a enviar.
2. El sistema le devuelve un **número de referencia** y un **CBU** al que transferir la moneda de origen.
3. Un **monitor de transferencias** detecta el ingreso, verifica que exista una orden con ese importe y esa referencia, y ejecuta la contra-transferencia.

## Cómo está armado

- API ASP.NET Core 6 con un controlador de órdenes y un proceso de fondo que monitorea las transferencias entrantes.
- Integraciones con la **API del banco BIND** (cuentas y transferencias), **BANVAL** y **Criptoya** (cotizaciones), con plantillas para los mensajes.
- Persistencia en SQL Server con Dapper y una página web mínima en HTML y JavaScript para crear la orden.
