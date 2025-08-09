import type { CategorySlug } from './category-colors';

export type Author = {
  id: string;
  name: string;
  slug: string;
  image?: string;
  bioHtml?: string;
};
export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  author: Author;
  categories: CategorySlug[];
  contentHtml: string;
  featured?: boolean;
};
export type Recap = {
  id: string;
  slug: string;
  title: string;
  date: string;
  marketsHtml: string;
  nflHtml: string;
  ufcHtml: string;
  extrasHtml: string;
};
export type Settings = {
  siteTitle: string;
  description?: string;
  accent: string;
};

export const MOCK_AUTHORS: Author[] = [
  { id: 'a1', name: 'MenteVolátil', slug: 'mente-volatil' },
  { id: 'a2', name: 'Analista X', slug: 'analista-x' },
  { id: 'a3', name: 'Scout Y', slug: 'scout-y' },
];

export const MOCK_SETTINGS: Settings = {
  siteTitle: 'MenteVolátil',
  description: 'Artículos y resúmenes sobre inversión, NFL, UFC y más.',
  accent: '#10B981',
};

export const MOCK_POSTS: Post[] = [
  {
    id: 'p0',
    slug: 'destacado-macro-2025',
    title: 'El mapa macro de 2025: tasas, liquidez y valoraciones',
    excerpt:
      'Claves para navegar un entorno de tasas altas: dónde están las primas de riesgo y cómo posicionarse.',
    date: '2025-08-03',
    coverImage: '/placeholder.svg?height=720&width=1280',
    author: MOCK_AUTHORS[0],
    categories: ['inversion'],
    contentHtml: `
    <p><strong>Resumen:</strong> la economía global avanza entre la espada y la pared: política monetaria estricta y señales mixtas de crecimiento. Aquí, las primas de riesgo y la liquidez marcan el pulso del mercado.</p>

    <h2>¿Dónde estamos?</h2>
    <p>Los grandes bancos centrales mantienen tasas elevadas para controlar la inflación, pero el crecimiento se muestra gradual. El BCE ha señalado recientemente... [aquí iría un dato sobre política del BCE]. En EE.UU., la Fed se mantiene cautelosa tras los últimos datos de empleo y precios.</p>

    <h2>Liquidez en el sistema financiero</h2>
    <p>La liquidez sigue siendo escasa en los mercados emergentes, mientras que en economías desarrolladas se ha comenzado a revertir la expansión cuantitativa, lo que presiona los préstamos corporativos.</p>

    <h2>Primas de riesgo: dónde están los focos</h2>
    <p>España e Italia muestran spreads relativamente altos respecto al Bund —por ejemplo, España a circa 100 pb y Italia a 130 pb— lo que refleja incertidumbre política y fiscal. En cambio, los periféricos del euro empiezan a mostrar señales de estabilidad médica.</p>

    <h2>¿Qué posiciones tienen más sentido ahora?</h2>
    <ul>
      <li><strong>Bonos indexados a inflación:</strong> protegen frente a shocks de precios y ofrecen rendimiento real positivo.</li>
      <li><strong>Calidad crediticia:</strong> el crédito corporativo investment-grade europeo destaca por su resiliencia en este entorno.</li>
      <li><strong>Exposición regional:</strong> diversificar con Estados del norte de Europa y EE. UU. puede reducir volatilidad.</li>
    </ul>

    <h2>Lo último en mercados</h2>
    <p>Las acciones tecnológicas corrigen después de varios meses de avance, mientras el sector energético y financiero experimenta flujos positivos gracias al repunte de los tipos de interés reales.</p>

    <p><em>¿Te interesa profundizar en alguno de estos puntos? Déjamelo saber y lo desglosamos en la próxima entrega.</em></p>
  `,
    featured: true,
  },
  {
    id: 'p1',
    slug: 'diversificar-portafolio-2025',
    title: 'Cómo diversificar tu portafolio en 2025',
    excerpt:
      'Estrategias prácticas para balancear riesgo y retorno usando ETFs, bonos y posiciones en efectivo.',
    date: '2025-08-02',
    coverImage: '/placeholder.svg?height=360&width=640',
    author: MOCK_AUTHORS[0],
    categories: ['inversion'],
    contentHtml:
      '<p>La diversificación es clave para proteger el capital y capturar retornos consistentes a lo largo del tiempo.</p>',
  },
  {
    id: 'p2',
    slug: 'pretemporada-nfl-que-observar',
    title: 'Pretemporada NFL: ¿Qué observar en campamentos?',
    excerpt:
      'Batallas de QBs, esquemas defensivos y novatos clave que podrían cambiar la temporada.',
    date: '2025-08-02',
    coverImage: '/placeholder.svg?height=360&width=640',
    author: MOCK_AUTHORS[2],
    categories: ['nfl'],
    contentHtml:
      '<p>Pretemporada ofrece pistas sobre roles y tendencias. Observa OL, rotaciones defensivas y uso de novatos.</p>',
  },
  {
    id: 'p3',
    slug: 'claves-ufc-ppv',
    title: 'Previas UFC: claves tácticas para el próximo PPV',
    excerpt:
      'Analizamos estilos, cardio y grappling que podrían definir los matchups principales.',
    date: '2025-08-01',
    coverImage: '/placeholder.svg?height=360&width=640',
    author: MOCK_AUTHORS[1],
    categories: ['ufc'],
    contentHtml:
      '<p>El emparejamiento de estilos dicta el ritmo del combate. Cardio y control de distancia, claves.</p>',
  },
  {
    id: 'p4',
    slug: 'indice-miedoycodicia',
    title: '¿Qué nos dice el índice de miedo y codicia?',
    excerpt:
      'Cómo interpretar el sentimiento de mercado sin caer en señales falsas.',
    date: '2025-07-28',
    coverImage: '/placeholder.svg?height=360&width=640',
    author: MOCK_AUTHORS[0],
    categories: ['inversion'],
    contentHtml:
      '<p>El sentimiento es un factor, no el sistema. Úsalo como confirmación, no como disparador.</p>',
  },
  {
    id: 'p5',
    slug: 'defensa-nickel-nfl',
    title: 'La defensa Nickel y su evolución en la NFL moderna',
    excerpt:
      'Por qué los coordinadores defensivos priorizan paquetes con 5 DBs.',
    date: '2025-07-25',
    coverImage: '/placeholder.svg?height=360&width=640',
    author: MOCK_AUTHORS[2],
    categories: ['nfl'],
    contentHtml:
      '<p>La proliferación de sets 11 personnel obliga a defensas más ligeras y versátiles.</p>',
  },
];

export const MOCK_RECAPS: Recap[] = [
  {
    id: 'r1',
    slug: 'resumen-2025-08-03',
    title: 'Resumen Dominical — 3 Ago 2025',
    date: '2025-08-03',
    marketsHtml:
      '<p>Semana de baja volatilidad. T-bills al 4.9% siguen atractivos.</p>',
    nflHtml:
      '<p>QB1 definido en varios equipos; atención a OL con lesiones.</p>',
    ufcHtml:
      '<p>Cartelera con finalistas de TUF; co-main con estilos contrastantes.</p>',
    extrasHtml:
      '<p>Lectura: decisiones bajo incertidumbre y sesgos comunes.</p>',
  },
  {
    id: 'r2',
    slug: 'resumen-2025-07-27',
    title: 'Resumen Dominical — 27 Jul 2025',
    date: '2025-07-27',
    marketsHtml: '<p>Resultados mixtos; guía para Q3 será clave.</p>',
    nflHtml: '<p>Rookies WR con separación consistente en camp.</p>',
    ufcHtml: '<p>Cambios de última hora en el evento co-estelar.</p>',
    extrasHtml: '<p>Podcast: sesgos cognitivos en el deporte.</p>',
  },
];
