export type DBQuestion = {
  id: number;
  quiz_id: number;
  order_in_quiz: number;
  point: number;
  created_date: Date;
  updated_date: Date;
  question_type: string;
  question_text: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  correct_option?: number;
  guess?: number;
  guess_correct?: number;
};

export type DBQuiz = {
  id: number;
  creator: string;
  token: string;
  theme: string;
  description?: string | undefined;
  created_date?: Date | undefined;
  updated_date?: Date | undefined;
};
