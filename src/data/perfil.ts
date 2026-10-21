/**
 * Datos personales que se repiten en varias páginas y en el CV.
 * Fuente: el CV de Raúl (octubre de 2026). Lo marcado como TODO está listado en PENDIENTES.md.
 */
export const perfil = {
  nombre: 'Raúl Villizzianto',
  nombreCompleto: 'Raúl Andrés Villizzianto',
  titulo: 'Software Engineer · .NET, Azure y data governance',
  ubicacion: 'Buenos Aires, Argentina (zona sur)',
  email: 'raulvillizzianto@gmail.com',
  github: 'https://github.com/RaulVillizzianto',
  linkedin: 'https://www.linkedin.com/in/raul-andres-villizzianto-a754651ab/',
  /** Presentación corta para la portada y el CV. */
  presentacion:
    'Desarrollo software desde 2019. Hoy soy Software Engineer en Chevron, en el equipo de Data ' +
    'Governance Tools: APIs y soluciones de gobierno de datos de punta a punta sobre Azure, con ' +
    'Collibra, Microsoft Purview, Synapse y Power BI. Antes, backend en .NET y Java para bancos y ' +
    'logística (Accenture para Banco Galicia, Andreani, Banco de Valores y Novatium para el Banco ' +
    'Nación). En paralelo diseño y construyo productos SaaS completos: API modular en ASP.NET Core, ' +
    'web en Next.js, app móvil con Expo y despliegue en la nube.',
  /** Qué busco (se muestra en la portada). */
  buscando:
    'Busco seguir creciendo dentro del ecosistema .NET, en equipos con buenas prácticas y problemas ' +
    'que valgan la pena. Disponibilidad full time, remoto o mixto en CABA.',
  /** Habilidades agrupadas para el CV. */
  habilidades: [
    {
      grupo: 'Backend',
      items: ['C# / .NET 6–10', 'ASP.NET Core (Minimal APIs, MVC)', 'Java', 'EF Core', 'Dapper', 'Hangfire', 'VB.NET', 'COBOL / JCL'],
    },
    {
      grupo: 'Frontend y móvil',
      items: ['TypeScript', 'React / Next.js', 'Angular', 'Tailwind CSS', 'Expo / React Native', 'Astro'],
    },
    {
      grupo: 'Datos y mensajería',
      items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'DB2', 'SQLite', 'RabbitMQ', 'Redis', 'Azure Synapse', 'Power BI'],
    },
    {
      grupo: 'Integraciones',
      items: ['Collibra', 'Microsoft Purview', 'Mercado Pago', 'Binance / Kraken', 'Webhooks idempotentes', 'OAuth / JWT', 'Claude API'],
    },
    {
      grupo: 'Infraestructura y gestión',
      items: ['Azure', 'Docker', 'Red Hat OpenShift', 'GitHub Actions', 'Railway', 'Cloudflare R2 / S3', 'Git', 'TFS', 'Jira', 'metodologías ágiles'],
    },
  ],
  /** Formación académica y complementaria, para el CV. */
  formacion: {
    academica: [
      {
        titulo: 'Licenciatura en Sistemas (en curso)',
        institucion: 'Universidad Abierta Interamericana (UAI), Lomas de Zamora',
        periodo: '2020 – actualidad',
      },
      {
        titulo: 'Bachiller en Economía y Administración',
        institucion: 'Instituto Nuestra Señora del Huerto, Temperley',
        periodo: '2012 – 2017',
      },
    ],
    complementaria: [
      { titulo: 'First Certificate in English (B2)', institucion: 'Cambridge' },
      { titulo: 'Certificación en React', institucion: 'Educación IT', periodo: '2024' },
      { titulo: 'Certificación en Angular', institucion: 'Educación IT', periodo: '2024' },
      { titulo: 'Programación en Android', institucion: 'Udemy', periodo: '2021' },
      { titulo: 'Programación en C#', institucion: 'Udemy', periodo: '2020' },
      { titulo: 'Máster en SQL Server', institucion: 'Udemy' },
    ],
  },
  idiomas: [
    { idioma: 'Español', nivel: 'nativo' },
    { idioma: 'Inglés', nivel: 'bilingüe (First Certificate B2, Cambridge)' },
  ],
} as const;
