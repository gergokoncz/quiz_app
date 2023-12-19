import { Quiz } from "./QuizListItem";
import QuizListItem from "./QuizListItem";

const QuizList: React.FC<{ quizzes: Quiz[] }> = (props) => {
  console.log(props.quizzes);
  return (
    <div className="flex flex-col">
      {props.quizzes.map((quiz) => (
        <QuizListItem key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizList;
