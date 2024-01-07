import QuestionModal from "../Question/QuestionModal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { QuizResponse } from "@/app/api/quiz/[id]/route";
import QuestionList from "../Question/QuestionList";
import { QuestionFormData } from "../Question/QuestionModal";

const EditQuiz: React.FC<{ quizData: QuizResponse }> = (props) => {
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState(props.quizData.questions);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newQuestionModal = () => {
    handleShow();
  };

  let questionNumber = 0;
  if (props.quizData.questions) {
    questionNumber = props.quizData.questions.length;
  }

  const newQuestionData: QuestionFormData = {
    quiz_id: props.quizData.quiz!.id,
    order_in_quiz: questionNumber,
  };

  return (
    <div className="text-black">
      <QuestionModal
        edit={false}
        questionData={newQuestionData}
        show={show}
        onHide={handleClose}
      />
      <div className="flex justify-center hover:bg-white">
        <button
          onClick={newQuestionModal}
          className="mt-2 border-black hover:bg-white text-white text-sm bg-black border-1 hover:bg-slate-500 max-w-xs w-80 h-10 rounded-md"
        >
          <FontAwesomeIcon icon={faPlus} /> add new question
        </button>
      </div>
      {questions && (
        <QuestionList questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
};

export default EditQuiz;
