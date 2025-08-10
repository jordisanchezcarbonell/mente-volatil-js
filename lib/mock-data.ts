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
    id: 'p1',
    slug: 'madrid-bravos-vs-munich-ravens-2025-08-10',
    title:
      'Madrid Bravos cae 30-27 en Múnich: final apretado y cuentas para playoffs',
    excerpt:
      'Partidazo en Unterhaching decidido en los minutos finales: 30-27 para Munich Ravens. Los Bravos siguen vivos, pero necesitan combinación de resultados.',
    date: '2025-08-10',
    coverImage: '/imgPost/madrid-bravos-vs-munich-ravens.jpg',
    author: MOCK_AUTHORS[0],
    categories: ['elf'],
    contentHtml: `
    <p><strong>Marcador final:</strong> Munich Ravens 30 – 27 Madrid Bravos.</p>

    <h2>Resumen del partido</h2>
    <p>El arranque fue cuesta arriba para los Bravos con un primer cuarto 16–0. A partir del segundo, Madrid ajustó en ataque y defensa, recortó antes del descanso y llegó a ponerse a una sola anotación en el tramo final. El duelo se decidió en los últimos minutos con los Ravens aguantando la última serie madrileña.</p>

    <h2>Claves</h2>
    <ul>
      <li>Primer cuarto determinante a favor de Ravens.</li>
      <li>Reacción de los Bravos en la segunda mitad, con drives largos y mejor ejecución en red zone.</li>
      <li>Detalles en terceros downs y gestión del reloj inclinaron la balanza.</li>
    </ul>

    <h2>Situación de playoffs</h2>
    <p>Según comentan los aficionados:</p>
    <ul>
      <li>Si <strong>Rhein Fire</strong> pierde hoy, a los Bravos les bastaría con ganar el partido contra los <strong>Galaxy</strong> el día 17.</li>
      <li>Si los Fire ganan hoy, Madrid tendría que vencer a Galaxy y esperar que pierda <strong>Paris</strong> (vs Vikings) o <strong>Rhein</strong> (vs Nordic).</li>
      <li>El Frankfurt Galaxy también está en la pelea, por lo que el duelo será a vida o muerte.</li>
    </ul>

    <h2>Lo próximo</h2>
    <p>Última jornada de temporada regular: victoria obligada y a mirar el resto del cuadro para conocer el camino a playoffs.</p>
  `,
    featured: false,
  },
  {
    id: 'p2',
    slug: 'ufc-fight-night-dolidze-vs-hernandez-2025-08-09',
    title: 'UFC Fight Night: Dolidze vs. Hernandez – Análisis y momentos clave',
    excerpt:
      'Anthony “Fluffy” Hernandez arrasa con Roman Dolidze y se consolida como uno de los contendientes más peligrosos del peso medio.',
    date: '2025-08-09',
    coverImage: '/imgPost/ufc-dolidze-vs-hernandez.avif',
    author: MOCK_AUTHORS[0],
    categories: ['ufc'],
    contentHtml: `
    <h2>📌 Punto clave de la noche</h2>
    <p>Anthony “Fluffy” Hernandez firmó una actuación brutal y metódica. Desde el primer asalto presionó sin descanso a Roman Dolidze, lo agotó con ritmo alto, transiciones constantes y golpes de desgaste. Finalmente, en el cuarto asalto, lo finalizó por <em>rear-naked choke</em>. Esto lo deja con <strong>8 victorias consecutivas</strong> y lo pone como candidato serio al título en peso medio.</p>

    <h2>🔍 Claves tácticas del main event</h2>
    <ul>
      <li><strong>Presión constante</strong> → no dio espacio a Dolidze para golpear con potencia.</li>
      <li><strong>Lucha y grappling dominantes</strong> → control en el clinch y derribos efectivos.</li>
      <li><strong>Resistencia y cardio</strong> → mantuvo la intensidad hasta el cuarto asalto.</li>
      <li><strong>Cierre clínico</strong> → sumisión limpia cuando Dolidze ya estaba exhausto.</li>
    </ul>

    <h2>🌟 Otras actuaciones destacadas</h2>
    <ul>
      <li><strong>Christian Leroy Duncan</strong> sorprendió con un codazo giratorio para TKO sobre Eryk Anders, demostrando creatividad y timing.</li>
      <li><strong>Elijah Smith</strong> logró uno de los KO más espectaculares del año con un <em>slam</em> en el primer asalto.</li>
      <li><strong>Joselyne Edwards</strong> y <strong>Uroš Medić</strong> consiguieron finalizaciones rápidas que encendieron la cartelera preliminar.</li>
      <li><strong>Iasmin Lucindo</strong> y <strong>Steve Erceg</strong> mostraron consistencia y control para ganar por decisión unánime.</li>
    </ul>

    <h2>🏆 Premios de la noche</h2>
    <ul>
      <li><strong>Performance:</strong> Hernandez, Duncan, Smith y Edwards.</li>
      <li><strong>Pelea de la noche:</strong> No se otorgó.</li>
    </ul>

    <h2>📈 Lectura general del evento</h2>
    <p>Fue una velada con <strong>alto ritmo, muchas finalizaciones y actuaciones explosivas</strong>. El gran titular es el dominio de Hernandez, que combina presión implacable con resistencia de élite, y ahora se proyecta como uno de los peleadores más temidos en las 185 lbs. Las preliminares aportaron nocauts llamativos que mantuvieron la energía del público desde el inicio.</p>
  `,
    featured: false,
  },
];

export const MOCK_RECAPS: Recap[] = [
  // {
  //   id: 'r1',
  //   slug: 'resumen-2025-08-03',
  //   title: 'Resumen Dominical — 3 Ago 2025',
  //   date: '2025-08-03',
  //   marketsHtml:
  //     '<p>Semana de baja volatilidad. T-bills al 4.9% siguen atractivos.</p>',
  //   nflHtml:
  //     '<p>QB1 definido en varios equipos; atención a OL con lesiones.</p>',
  //   ufcHtml:
  //     '<p>Cartelera con finalistas de TUF; co-main con estilos contrastantes.</p>',
  //   extrasHtml:
  //     '<p>Lectura: decisiones bajo incertidumbre y sesgos comunes.</p>',
  // },
  // {
  //   id: 'r2',
  //   slug: 'resumen-2025-07-27',
  //   title: 'Resumen Dominical — 27 Jul 2025',
  //   date: '2025-07-27',
  //   marketsHtml: '<p>Resultados mixtos; guía para Q3 será clave.</p>',
  //   nflHtml: '<p>Rookies WR con separación consistente en camp.</p>',
  //   ufcHtml: '<p>Cambios de última hora en el evento co-estelar.</p>',
  //   extrasHtml: '<p>Podcast: sesgos cognitivos en el deporte.</p>',
  // },
];
