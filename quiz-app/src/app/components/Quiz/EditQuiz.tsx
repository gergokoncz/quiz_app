import AddQuestionModal from "../Question/AddQuestionModal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EditQuiz: React.FC<{ quizData: any }> = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newQuestionModal = () => {
    handleShow();
  };
  return (
    <div>
      <AddQuestionModal quizId={Number(5)} show={show} onHide={handleClose} />
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
