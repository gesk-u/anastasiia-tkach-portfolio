export type Filter = 'ALL' | 'CORE' | 'LANGUAGES' | 'FRONTEND' | 'BACKEND' | 'DATABASES' | 'TOOLS' | 'AI'

export type Skill = {
  index: string
  symbol: string
  name: string
  level: string
  group: 'LANG' | 'UI' | 'SYS' | 'DATA' | 'DES'| 'AI'
  note: string
  cat: Exclude<Filter, 'ALL' | 'CORE'>
  core?: boolean
}

export type Project = {
  id: string
  title: string
  type: string
  year: string
  summary: string
  stack: string[]
  status: 'IN DEVELOPMENT' | 'DEPLOYED' | 'ARCHIVED'
}


export const filters: Filter[] = ['ALL', 'CORE', 'LANGUAGES', 'FRONTEND', 'BACKEND', 'DATABASES', 'AI', 'TOOLS']

export const skills: Skill[] = [
  { index: '01', symbol: 'Js', name: 'JavaScript', level: 'ADV', group: 'LANG', note: 'Interfaces, creative coding, and browser systems.', cat: 'LANGUAGES', core: true },
  { index: '02', symbol: 'Ts', name: 'TypeScript', level: 'ADV', group: 'LANG', note: 'Typed applications and maintainable design systems.', cat: 'LANGUAGES', core: true },
  { index: '03', symbol: 'Py', name: 'Python', level: 'ADV', group: 'LANG', note: 'Automation, data tooling, and rapid prototypes.', cat: 'LANGUAGES' },
  { index: '04', symbol: 'Rc', name: 'React', level: 'ADV', group: 'UI', note: 'Component architecture and interactive experiences.', cat: 'FRONTEND', core: true },
  { index: '05', symbol: 'Nx', name: 'Next.js', level: 'ADV', group: 'UI', note: 'Full-stack products, routing, and performance.', cat: 'FRONTEND', core: true },
  { index: '06', symbol: 'Tw', name: 'Tailwind', level: 'INT', group: 'UI', note: 'Fast, coherent, responsive interface systems.', cat: 'FRONTEND' },
  { index: '07', symbol: 'Nd', name: 'Node.js', level: 'INT', group: 'SYS', note: 'APIs, tooling, scripts, and backend services.', cat: 'BACKEND', core: true },
  { index: '08', symbol: 'Gt', name: 'Git', level: 'ADV', group: 'SYS', note: 'Version control and collaborative workflows.', cat: 'TOOLS', core: true },
  { index: '09', symbol: 'Dk', name: 'Docker', level: 'INT', group: 'SYS', note: 'Portable environments and predictable delivery.', cat: 'TOOLS' },
  { index: '10', symbol: 'Ex', name: 'Express', level: 'INT', group: 'SYS', cat: 'BACKEND', note: 'Lightweight HTTP services and middleware.' },
  { index: '11', symbol: 'Mo', name: 'MongoDB', level: 'INT', group: 'DATA', note: 'Flexible document data and prototypes.', cat: 'DATABASES' },
  { index: '12', symbol: 'Sq', name: 'SQL', level: 'INT', group: 'DATA', note: 'Queries, schemas, and data investigation.', cat: 'LANGUAGES' },
  { index: '13', symbol: 'Fg', name: 'Figma', level: 'INT', group: 'DES', note: 'Product design, prototypes, and visual systems.', cat: 'TOOLS', core: true },
  { index: '14', symbol: 'Ht', name: 'HTML & CSS', level: 'ADV', group: 'UI', note: 'Semantic markup, flexbox, grid and responsive layouts.', cat: 'FRONTEND', core: true },
  { index: '15', symbol: 'D3', name: 'D3.js', level: 'INT', group: 'UI', note: 'Data-driven visuals in TeamGuesser.', cat: 'FRONTEND' },
  { index: '16', symbol: 'Vt', name: 'Vite', level: 'INT', group: 'SYS', note: 'Dev setup for Sanahaku and this site.', cat: 'TOOLS' },
  { index: '17', symbol: 'Vi', name: 'Vitest', level: 'INT', group: 'SYS', note: 'Unit and API tests with Vitest and Supertest.', cat: 'TOOLS' },
  { index: '18', symbol: 'Fl', name: 'Flask', level: 'INT', group: 'SYS', note: 'Backends for MetroCollab and TeamGuesser.', cat: 'BACKEND' },
  { index: '19', symbol: 'Si', name: 'Socket.IO', level: 'INT', group: 'SYS', note: 'Real-time multiplayer in TeamGuesser.', cat: 'BACKEND' },
  { index: '20', symbol: 'My', name: 'MySQL / MariaDB', level: 'INT', group: 'DATA', note: 'Relational schemas for MetroCollab and TeamGuesser.', cat: 'DATABASES' },
  { index: '21', symbol: 'Ol', name: 'Ollama', level: 'INT', group: 'AI', note: 'Local LLM integration in MetroCollab.', cat: 'AI' },
  { index: '22', symbol: 'Km', name: 'K-Means & embeddings', level: 'INT', group: 'AI', note: 'Clustering with GloVe embeddings for team matching in MetroCollab.', cat: 'AI' },
  { index: '23', symbol: 'Rg', name: 'RAG & vector search', level: 'INT', group: 'AI', note: 'Embeddings, pgvector and retrieval pipelines from LLM Zoomcamp.', cat: 'AI' },
]

export const projects: Project[] = [
  {
    id: 'CASE_001',
    title: 'LILAC UI',
    type: 'Accessible component library',
    year: '2026',
    summary: 'React components such as combobox, dialog, tabs and date picker, built to the WAI-ARIA patterns and documented in Storybook.',
    stack: ['React', 'TypeScript', 'Storybook', 'Vitest', 'Playwright', 'axe-core', 'npm', 'GitHub Actions'],
    status: 'IN DEVELOPMENT',
  },
  {
    id: 'CASE_002',
    title: 'CHORUS',
    type: 'Live tech news dashboard',
    year: '2026',
    summary: 'Tech news from many outlets in one live feed, with duplicate stories grouped by embeddings and a recommender that learns your interests from how you read.',
    stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'scikit-learn', 'AWS'],
    status: 'IN DEVELOPMENT',
  },
  {
    id: 'CASE_003',
    title: 'ONE BIT STUDIO',
    type: 'Photo-to-pixel-art tool',
    year: '2026',
    summary: 'Turns a photo into one-colour pixel art through cut-out, smoothing, tone mapping and line extraction, finished in a built-in pixel editor.',
    stack: ['Java', 'Spring Boot', 'React', 'Canvas API', 'PostgreSQL', 'ONNX Runtime', 'Docker', 'Azure'],
    status: 'IN DEVELOPMENT',
  },
]
