export type DoneQuestion = {
  id: number;
  user_id: number;
  question_id: number;
  jap_answer: string;
  eng_answer: string;
  ai_answer: string;
  memo?: string;
  favorite: boolean;
  genre: string;
  level: string;
  question: string;
  description?: string;
};
