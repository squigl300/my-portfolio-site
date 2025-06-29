export interface Book {
  title: string;
  author: string;
  cover: string;   // image in /public/images/books/
  link: string;
  note: string;    // one-line why it matters for Storm
}

export const books: Book[] = [
  {
    title: "AI Engineering",
    author: "Chip Huyen",
    cover: "/images/books/ai-engineering.jpeg",
    link: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/",
    note: "2025 playbook for turning research models into reliable production systems."
  },
  {
    title: "Agentic Artificial Intelligence: Harnessing AI Agents to Reinvent Business, Work, and Life",
    author: "Jochen Wirtz",
    cover: "/images/books/ai-needs-you.jpg",
    link: "https://www.academia.edu/128196295/Agentic_Artificial_Intelligence_Harnessing_AI_Agents_to_Reinvent_Business_Work_and_Life",
    note: "Focuses on how agentic systems can be applied in modern workflows, with practical use cases exploring enterprise deployment."
  },
  {
    title: "Azure AI Fundamentals (AI-900) Certification Guide",
    author: "Julian Sharp",
    cover: "/images/books/AI-exam.jpg",
    link: "https://www.amazon.co.uk/Exam-AI-900-Microsoft-Azure-Fundamentals/dp/0137358032/ref=asc_df_0137358032?mcid=01abddde1f2e353890f864b8b768ef25&hvocijid=16767743476516154204-0137358032-&hvexpln=74&tag=googshopuk-21&linkCode=df0&hvadid=696285193871&hvpos=&hvnetw=g&hvrand=16767743476516154204&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9046948&hvtargid=pla-2281435177138&psc=1&gad_source=1",
    note: "Weekly study"
  },
  {
    title: "LLM Design Patterns",
    author: "Ken Huang",
    cover: "/images/books/LLM-Design.jpeg",
    link: "https://www.oreilly.com/library/view/llm-design-patterns/9781836207030/",
    note: "Explore reusable design patterns, including data-centric approaches, model development, model fine-tuning, and RAG for LLM application development and advanced prompting techniques"
  }
];
