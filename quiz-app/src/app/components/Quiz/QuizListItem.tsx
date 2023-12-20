import { Container } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPenToSquare,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

export type Question = {
  id: number;
  quiz_id: string;
  order_in_quiz: number;
  points: number;
  created_date?: Date | undefined;
  updated_date?: Date | undefined;
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
  id: number;
  creator: string;
  token: string;
  theme: string;
  description?: string | undefined;
  created_date?: Date | undefined;
  updated_date?: Date | undefined;
  questions?: Question[];
};

const QuizListItem: React.FC<{ quiz: Quiz }> = (props) => {
  const playQuiz = () => {
    console.log("play quiz");
  };
  const editQuiz = () => {
    console.log("edit quiz");
  };

  const seeResults = () => {
    console.log("see results");
  };

  return (
    <div className="flex flex-col justify-center items-center text-black border-2 border-dfds-dark rounded-xl max-width m-2">
      <div className="my-2">
        <strong className="text-sm">owner: </strong>
        {props.quiz.creator}
      </div>
      <div className="mb-2">
        <strong className="text-sm">theme: </strong>
        {props.quiz.theme}
      </div>
      <div className="mb-2">
        <strong className="text-sm">created at: </strong>
        {moment(props.quiz.created_date).format("YYYY-MM-DD")}
      </div>
      <div className="flex mb-2">
        <button onClick={playQuiz} className="mx-2">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={editQuiz} className="mx-2">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={seeResults} className="mx-2">
          <FontAwesomeIcon icon={faChartSimple} />
        </button>
      </div>
    </div>
  );
};

export default QuizListItem;
