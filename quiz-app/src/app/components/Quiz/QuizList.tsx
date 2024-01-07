import type { DBQuiz } from "@/app/lib/types/dbTypes";
import QuizListItem from "./QuizListItem";

const QuizList: React.FC<{ quizzes: DBQuiz[] }> = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-width-screen-2xl min-w-full">
      {props.quizzes.map((quiz) => (
        <QuizListItem key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizList;
