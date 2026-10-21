---
titulo: Aplicación del tiempo
resumen: Web que muestra el pronóstico de cualquier ciudad con buscador y cambio entre sistema métrico e imperial, respaldada por una API propia en .NET que consulta OpenWeather.
rol: Desarrollo completo
stack:
  - C# / .NET 6
  - ASP.NET Core
  - HTML / CSS
  - JavaScript
  - OpenWeather API
inicio: 2022-07
fin: 2022-07
tipo: personal
estado: archivado
orden: 60
links:
  repo: https://github.com/RaulVillizzianto/portfolio-weatherApp
---

## Qué es

Uno de los primeros proyectos del portfolio: una página que muestra el clima actual de una ciudad, con un buscador sobre el listado de ciudades de OpenWeather y un selector de unidades.

## Cómo está armado

- **Frontend** en HTML, CSS y JavaScript sin frameworks, con `fetch` asíncrono hacia la API propia.
- **API** en ASP.NET Core 6 que recibe el identificador de ciudad y el sistema de unidades, consulta OpenWeather y devuelve un modelo simplificado, de modo que la clave de la API externa nunca llega al navegador.
