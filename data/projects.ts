/* ---------- type ---------- */
export interface Project {
  slug: string
  title: string
  tagline: string
  year: string
  metrics: string
  tech: string[]
  hero: string
  images: string[]
  links: {
    github?: string
    demo?: string
    pdf?: string
  }
  categories: ('AI' | 'Cloud' | 'DevOps' | 'Security')[]
  featured?: boolean
}

/* ---------- data ---------- */
export const projects: Project[] = [
  /* ---- Honours / featured ---- */
  {
    slug: 'llm-personality-chatbot',
    title: 'LLM Personality Chatbot',
    tagline: 'Multi-personality AI assistant with context-aware responses',
    year: '2024',
    metrics: '94 % user-satisfaction in pilot study',
    tech: ['Python', 'LangChain', 'Mistral-7B', 'FastAPI', 'Streamlit'],
    hero: '/images/projects/Hon.png',
    images: [
      '/images/projects/Hon.png',
      'images/projects/Component.png'
    ],
    links: { pdf: '/projects/llm-chatbot-report.pdf' },
    categories: ['AI'],
    featured: true,
  },

  /* ---- Stroke prediction ---- */
  {
    slug: 'stroke-prediction',
    title: 'Stroke Prediction ML Model',
    tagline: 'Random-Forest for early stroke-risk assessment',
    year: '2024',
    metrics: 'AUC 0.83 on imbalanced test set',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
    hero: '/images/projects/stroke-prediction.jpg',
    images: ['/images/projects/stroke-prediction.jpg'],
    links: { pdf: '/projects/stroke-prediction-analysis.pdf' },
    categories: ['AI'],
  },

  /* ---- AWS face match ---- */
  {
    slug: 'aws-serverless-face-match',
    title: 'AWS Serverless Face Match',
    tagline: 'Event-driven facial comparison on fully serverless stack',
    year: '2023',
    metrics: 'p95 latency < 200 ms',
    tech: ['Lambda', 'Rekognition', 'S3', 'DynamoDB', 'SQS', 'Python'],
    hero: '/images/projects/aws-face-match.jpg',
    images: ['/images/projects/aws-face-match.jpg'],
    links: {},
    categories: ['Cloud', 'AI'],
  },

  /* ---- DevOps pipeline ---- */
  {
    slug: 'devops-cicd-pipeline',
    title: 'DevOps CI/CD Pipeline',
    tagline: 'Automated Docker → Kubernetes rollout with monitoring & rollback',
    year: '2023',
    metrics: '99.9 % uptime after blue-green deploys',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
    hero: '/images/projects/devops-cicd.jpg',
    images: ['/images/projects/devops-cicd.jpg'],
    links: {
      github: 'https://github.com/seanquigley/devops-pipeline',
      pdf: '/projects/devops-architecture.pdf',
    },
    categories: ['DevOps', 'Cloud'],
  },

  /* ---- Health-One DB ---- */
  {
    slug: 'health-one-database',
    title: 'Health-One Database System',
    tagline: 'Normalized patient-record schema with historical tracking',
    year: '2023',
    metrics: '10 k+ patient rows · zero update anomalies',
    tech: ['PostgreSQL', 'ER-modelling', 'Node.js', 'React'],
    hero: '/images/projects/health-one.png',
    images: [
      '/images/projects/health-one.png',
      '/images/projects/ERD.png'
    ],
    links: {
      github: 'https://github.com/seanquigley/health-one-db',
      pdf: '/projects/health-one-specification.pdf',
    },
    categories: ['Security'],
  },

  /* ---- Web-app security audit ---- */
  {
    slug: 'web-app-security-audit',
    title: 'Web Application Security Audit',
    tagline: 'Manual penetration test of PHP messaging app',
    year: '2024',
    metrics: '23 vulnerabilities documented',
    tech: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Python'],
    hero: '/images/projects/security-audit.jpg',
    images: ['/images/projects/security-audit.jpg'],
    links: { pdf: '/projects/security-audit-report.pdf' },
    categories: ['Security'],
  },

  /* ---- NEW: AADP coursework ---- */
  {
    slug: 'aadp-architecture-design',
    title: 'Application Architecture & Design Patterns',
    tagline: 'Layered + event-driven design for Salinte Whiskey IMS',
    year: '2024',
    metrics: '9 UML/C4 diagrams · 3 pattern variants',
    tech: ['C4 Model', 'UML', 'AWS', 'REST', 'JSON'],
    hero: '/images/projects/aadp-context.jpg',
    images: [
      '/images/projects/aadp-context.jpg',   // hero
      '/images/projects/aadp-event-flow.jpg' // hover / gallery
    ],
    links: { pdf: '/projects/aadp-full-report.pdf' },
    categories: ['Cloud', 'DevOps'],
  },
]
