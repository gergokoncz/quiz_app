// react imports
import { Modal, Button, Container, Form, ButtonGroup } from "react-bootstrap";
import { useRef, useState } from "react";
import MultipleChoiceForm from "./MultipleChoiceForm";
import GuessForm from "./GuessForm";

const AddQuestionModal: React.FC<{
  quizId: number;
  show: boolean;
  onHide: () => void;
}> = (props) => {
  const [questionType, setQuestionType] = useState<"multiple choice" | "guess">(
    "multiple choice"
  );
  const questionTextRef = useRef<HTMLInputElement>(null);
  const questionTypeRef = useRef<HTMLTextAreaElement>(null);
  const datasetTypeRef = useRef<HTMLSelectElement>(null);
  const datasetFileRef = useRef<HTMLInputElement>(null);

  const saveQuestion = (questionData) => {
    console.log(questionData);
  };

  return (
    <Modal show={props.show} onHide={props.onHide} className="md">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
        <div className="d-flex w-100 -1">
          <button
            onClick={() => setQuestionType("multiple choice")}
            className={`flex-grow-1 border-2 ${
              questionType === "multiple choice"
                ? "bg-main text-white"
                : "bg-light"
            }`}
          >
            Multiple Choice
          </button>
          <button
            onClick={() => setQuestionType("guess")}
            className={`flex-grow-1 border-dfds-light border-2 ${
              questionType === "guess" ? "bg-main text-white" : "bg-light"
            }`}
          >
            Guess
          </button>
        </div>
        <Modal.Body>
          {questionType === "multiple choice" ? (
            <MultipleChoiceForm />
          ) : (
            <GuessForm />
          )}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
          <button onClick={saveQuestion}>Save Changes</button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default AddQuestionModal;
