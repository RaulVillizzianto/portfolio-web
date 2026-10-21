---
titulo: API de pagos con integración bancaria BIND
resumen: Servicio para disparar transferencias bancarias desde un sistema de premios a través de la API del banco BIND, con trazabilidad de cada solicitud en MongoDB y empaquetado en Docker.
rol: Desarrollo backend
stack:
  - C# / .NET 8
  - ASP.NET Core
  - API BIND
  - MongoDB
  - RestSharp
  - Docker
  - Swagger
inicio: 2024-11
fin: 2024-11
tipo: laboral
estado: terminado
confidencial: true
orden: 22
links: {}
pendientes:
  - Confirmar la empresa (repo en la organización StarkSolutionSRL) y si se puede nombrar al cliente.
  - Confirmar si llegó a producción o quedó en homologación.
---

## Qué es

Un **proveedor de servicios de pago** interno: recibe una solicitud de transferencia (alias de destino, importe e identificador del premio), la valida, se autentica contra la **API del banco BIND** y ejecuta la transferencia, dejando traza de cada paso.

## Cómo está armado

- **Biblioteca de comunicación con BIND** con los métodos de login, consulta de alias, consulta de CBU/CVU, consulta de cuentas y transferencia, detrás de una interfaz para poder cambiar de proveedor.
- **API ASP.NET Core 8** con un endpoint de transferencia que valida el modelo, registra la traza de entrada y de cada respuesta del banco en **MongoDB** con un identificador de correlación, y devuelve errores claros cuando falla la comunicación con el proveedor.
- Certificados de homologación y colección de Postman del banco versionados junto al código; **Dockerfile** para desplegar como contenedor.
