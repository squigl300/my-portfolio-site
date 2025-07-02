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
  categories: string[]
  featured?: boolean
}

/* ---------- data ---------- */
export const projects: Project[] = [
  /* ---- Honours / featured ---- */
  {
    slug: 'llm-personality-chatbot',
    title: 'Cognitive Personality Analysis Chatbot',
    tagline: 'Conversational MBTI assessment powered by a locally-served, fine-tuned 7-B LLM',
    year: '2024',
    metrics: 'Grounded answers via RAG vector search',
    tech: ['Python', 'LangChain', 'RAG', 'FAISS', 'Sentence-Transformers', 'Mistral-7B', 'FastAPI', 'Streamlit'],
    hero: '/images/projects/Hon.png',
    images: [
      '/images/projects/Hon.png',
      'images/projects/Component.png'
    ],
    links: { pdf: '/projects/state.png' },
    categories: ['AI/ML'],
    featured: true,
  },

  /* ---- Stroke prediction ---- */
  {
    slug: 'stroke-prediction',
    title: 'Stroke Prediction ML Model',
    tagline: 'Machine learning model for clinical stroke-risk classification',
    year: '2024',
    metrics: '91% accuracy, AUC 0.83. F1-macro 0.554',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
    hero: '/images/projects/ml-roc-curve.png',
    images: [
      '/images/projects/ml-roc-curve.png',
      'images/projects/ml-correlation-matrix.png'
    ],
    links: { pdf: '/projects/stroke-prediction-analysis.pdf' },
    categories: ['AI/ML'],
  },

  /* ---- AWS face match ---- */
  {
    slug: 'aws-serverless-face-match',
    title: 'AWS Serverless Face Match Analysis',
    tagline: 'Event-driven facial comparison on fully serverless stack',
    year: '2023',
    metrics: 'Real-time alerts | Fully automated pipeline',
    tech: ['Lambda', 'Rekognition', 'S3', 'DynamoDB', 'SQS', 'SNS', 'CloudFormation', 'Python (Boto3)'],
    hero: '/images/projects/CPD1.png',
    images: [
      '/images/projects/CPD1.png',
      'images/projects/CPD2.png'
    ],
    links: {},
    categories: ['Cloud'],
  },

  /* ---- DevOps pipeline ---- */
{
  slug: 'devops-cicd-pipeline',
  title: 'DevOps CI/CD Pipeline',
  tagline: 'End-to-end CI/CD pipeline: Docker to Kubernetes via Jenkins & Ansible on AWS',
  year: '2023',
  metrics: 'Deployed Node.js app using Jenkins pipeline. Automated EC2 provisioning, Docker build, and Kubernetes rollout',
  tech: ['Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'AWS EC2'],
  hero: '/images/projects/jenkins.png',
  images: [
    '/images/projects/jenkins.png',
    '/images/projects/minikube.png',
  ],
  links: {
    github: '',
    pdf: '',
  },
  categories: ['DevOps'],
},

  /* ---- Health-One DB ---- */
  {
    slug: 'health-one-database',
    title: 'Health-One Database Presentation',
    tagline: 'End-to-end relational data model for medical claims & analytics',
    year: '2023',
    metrics: '12 entities • 3NF • historical doctor–patient tracking',
    tech: ['SQL', 'Oracle', 'Entity-Relationship Modelling', 'Draw.io'],
    hero: '/images/projects/ERD.png',
    images: [
      '/images/projects/ERD.png',
      '/images/projects/health-one.png'
    ],
    links: {
      pdf: '/projects/health-one-specification.pdf',
    },
    categories: ['Database'],
  },

  /* ---- PT Connect ---- */
{
  slug: 'pt-connect',
  title: 'Personal Trainer App',
  tagline: 'Fitness-focused mobile and web app for personal trainer-client interaction',
  year: '2024',
  metrics: 'Full-stack app with features for workout planning, nutrition tracking, and progress analytics',
  tech: ['Java', 'Android Studio', 'React.js', 'Firebase', 'SQLite', 'AnyChart', 'Picasso'],
  hero: '/images/projects/IP3.png',
  images: [
    '/images/projects/IP3.png',
    '/images/projects/ip3-dashboard.png'
  ],
  links: {
    pdf: '/projects/IP3.pdf'
  },
  categories: ['Mobile'],
},


  /* ---- NEW: Script Manager & Portfolio Website ---- */
  {
    slug: 'ahk-script-manager',
    title: 'AutoHotKey Script Manager',
    tagline: 'C# desktop app for script sharing with WordPress integration',
    year: '2023',
    metrics: '',
    tech: ['C#', 'MySQL', 'AutoHotKey', 'WordPress', 'PHP', 'BCrypt'],
    hero: '/images/projects/AHK2.png',
    images: [
    '/images/projects/AHK2.png',              // hero
    '/images/projects/AHK1.png',         // hover/gallery
          ],
    links: {
    pdf: '',
    github: ''
    },
    categories: ['Desktop'],
  },

  /* ---- Web-app security audit ---- */
  {
    slug: 'web-app-security-audit',
    title: 'Web Application Security Audit',
    tagline: 'Manual penetration test of PHP messaging app',
    year: '2024',
    metrics: 'Identified 3 vulnerabilities: SQL Injection, HTML Injection, Authorization Bypass',
    tech: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'PHP', 'MySQL', 'Browser DevTools'],
    hero: '/images/projects/SSD1.png',
    images: [
      '/images/projects/SSD1.png',
      'images/projects/SSD2.png'
    ],
    links: { pdf: '' },
    categories: ['Security'],
  },

  /* ---- UPDATED: AADP Coursework Project Card ---- */
{
  slug: 'salinte-whiskey-ims',
  title: 'Salinte Whiskey Information Management',
  tagline: 'Event-driven architecture & layered design for scalable e-commerce',
  year: '2024',
  metrics: '3-tier deployment, MVC & EDA proposed',
  tech: [
    'Layered Architecture',
    'Event-Driven Architecture',
    'Model-View-Controller (MVC)',   
    'C4 Model', 
    'UML',
    'Figma'
  ],
  hero: '/images/projects/aadp-deployment-view.png',
  images: [
    '/images/projects/aadp-deployment-view.png',   // Hero image: Deployment View
    '/images/projects/aadp-context-diagram.png',   // Gallery image: Context Diagram
    
  ],
  links: {
    pdf: '/projects/deployment.png',
  },
  categories: ['Architecture'],
},


  {
  slug: 'scala-f1-analysis',
  title: 'Scala Formula 1 Season Analysis',
  tagline: 'Functional programming meets sports data analytics',
  year: '2024',
  metrics: '6 analysis modules | 100% test coverage | Pure functional core',
  tech: ['Scala', 'Functional Programming', 'Immutable Data', 'Higher-Order Functions', 'Try/Option', 'REPL', 'Text-based UI'],
  hero: '/images/projects/PP2.jpeg',
  images: [
    '/images/projects/PP2.jpeg',
    '/images/projects/PP1.png',
  ],
  links: {},
  categories: ['Data'],
},

]
