export type Culture = 'india' | 'japan';

export interface EtiquetteQuestion {
  id: string;
  question: string;
  answer: string;
  culture: Culture;
  category: 'greetings' | 'dining' | 'social';
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  culture: Culture;
  content: string;
  image: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  culture: Culture;
}

export interface AIResponse {
  translation: string;
  culturalContext: string;
  confidence: number;
}