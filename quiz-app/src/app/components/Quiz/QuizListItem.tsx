import { Container } from "react-bootstrap";

export type Question = {
  id: string;
  quiz_id: string;
  order_in_quiz: number;
  points: number;
  created_date?: string | undefined;
  updated_date?: string | undefined;
  question_type: string;
  question_text: string;
  option1?: string | undefined;
  option2?: string | undefined;
  option3?: string | undefined;
  option4?: string | undefined;
  correct_option?: number | undefined;
  guess?: number | undefined;
  guess_correct?: number | undefined;
};

export type Quiz = {
  id: string;
  creator: string;
  token: string;
  theme: string;
  description: string;
  created_date?: string | undefined;
  updated_date?: string | undefined;
  questions?: Question[];
};

const QuizListItem: React.FC<{ quiz: Quiz }> = (props) => {
  console.log(props.quiz);
  return <Container>This is a quiz</Container>;
};

export default QuizListItem;