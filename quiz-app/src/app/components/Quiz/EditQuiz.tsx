import AddQuestionModal from "../Question/AddQuestionModal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { QuizResponse } from "@/app/api/quiz/[id]/route";

const EditQuiz: React.FC<{ quizData: QuizResponse }> = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newQuestionModal = () => {
    handleShow();
  };

  let questionNumber = 0;
  if (props.quizData.questions) {
    questionNumber = props.quizData.questions.length;
  }
  return (
    <div className="text-black">
      <AddQuestionModal
        quizId={props.quizData.quiz!.id}
        orderInQuiz={questionNumber} // new question will be added to the end of the quiz
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
    </div>
  );
};

export default EditQuiz;
