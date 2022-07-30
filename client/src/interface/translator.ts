export type Question = {
  id: number;
  question: string;
  description: string;
  level: string;
  genre: string;
};

export type Answers = {
  ja_answer: string;
  en_answer: string;
};

export type TranslateResponse = {
  translated_text: string;
};
