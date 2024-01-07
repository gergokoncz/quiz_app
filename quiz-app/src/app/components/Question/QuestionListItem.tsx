import { DBQuestion } from "@/app/lib/types/dbTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faQuestionCircle,
  faList,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import QuestionModal from "./QuestionModal";
import { useState } from "react";

const QuestionListItem: React.FC<{
  question: DBQuestion;
}> = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editQuestion = () => {
    handleShow();
  };
  const deleteQuestion = () => {
    console.log("delete question");
  };
  return (
    <>
      <QuestionModal
        edit={true}
        questionData={props.question}
        show={show}
        onHide={handleClose}
      />
      <div className="flex flex-row justify-between flex-grow">
        <div className="flex flex-row gap-5">
          {props.question.question_type === "multiple choice" && (
            <FontAwesomeIcon
              icon={faList}
              title="Multiple choice question"
              className="text-xl"
            />
          )}
          {props.question.question_type === "guess" && (
            <FontAwesomeIcon
              icon={faQuestionCircle}
              title="Guess question"
              className="text-xl"
            />
          )}
          <div>{props.question.question_text}</div>
        </div>
        <div className="flex flex-row gap-3">
          <button onClick={editQuestion}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              title="Edit question"
              className="hover:text-blue-800 text-xl"
            />
          </button>
          <button onClick={deleteQuestion}>
            <FontAwesomeIcon
              icon={faTrash}
              title="Delete question"
              className="hover:text-blue-800 text-xl"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionListItem;
