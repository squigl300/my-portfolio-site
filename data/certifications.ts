export interface Certification {
  name: string;
  provider: string;
  progress: number;
}

export const certifications: Certification[] = [
  {
    name: 'Azure AI Fundamentals (AI-900)',
    provider: 'Microsoft',
    progress: 10,
  },
  {
    name: 'Azure AI Engineer Associate (AI-102)',
    provider: 'Microsoft',
    progress: 0,
  },
];