/**
 * Datos personales que se repiten en varias páginas y en el CV.
 * Lo marcado como TODO está listado en PENDIENTES.md.
 */
export const perfil = {
  nombre: 'Raúl Villizzianto',
  nombreCompleto: 'Raúl Andrés Villizzianto',
  // TODO: confirmar título profesional (ver PENDIENTES.md).
  titulo: 'Desarrollador de software · .NET y TypeScript',
  ubicacion: 'Buenos Aires, Argentina (GBA Sur)',
  email: 'raulvillizzianto@gmail.com',
  github: 'https://github.com/RaulVillizzianto',
  linkedin: 'https://www.linkedin.com/in/raul-andres-villizzianto-a754651ab/',
  /** Presentación corta para la portada y el CV. */
  presentacion:
    'Desarrollo software desde 2022, sobre todo backend en .NET y aplicaciones web con TypeScript. ' +
    'Trabajé en integraciones bancarias y de pagos, sistemas de salud y automatizaciones, y hoy ' +
    'diseño y construyo productos SaaS completos: API modular en ASP.NET Core, web en Next.js, ' +
    'app móvil con Expo y despliegue en la nube.',
  /** Qué busco (se muestra en la portada). TODO: ajustar a lo que Raúl quiera decir. */
  buscando:
    'Estoy abierto a propuestas como desarrollador backend o full stack, remoto o en Buenos Aires.',
  /** Habilidades agrupadas para el CV. */
  habilidades: [
    {
      grupo: 'Backend',
      items: ['C# / .NET 6–10', 'ASP.NET Core (Minimal APIs, MVC)', 'EF Core', 'Dapper', 'Hangfire', 'FluentValidation'],
    },
    {
      grupo: 'Frontend y móvil',
      items: ['TypeScript', 'Next.js / React', 'Tailwind CSS', 'Expo / React Native', 'Astro'],
    },
    {
      grupo: 'Datos y mensajería',
      items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'SQLite', 'RabbitMQ', 'Redis'],
    },
    {
      grupo: 'Integraciones',
      items: ['Mercado Pago', 'API BIND', 'Binance / Kraken', 'Webhooks idempotentes', 'OAuth / JWT', 'Claude API'],
    },
    {
      grupo: 'Infraestructura',
      items: ['Docker', 'GitHub Actions', 'Railway', 'Cloudflare R2 / S3', 'Playwright'],
    },
  ],
  idiomas: [
    { idioma: 'Español', nivel: 'nativo' },
    // TODO: confirmar nivel de inglés.
    { idioma: 'Inglés', nivel: 'TODO' },
  ],
} as const;
