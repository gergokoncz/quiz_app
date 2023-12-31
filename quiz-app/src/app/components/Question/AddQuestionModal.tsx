import { useState } from "react";
import MultipleChoiceForm from "./MultipleChoiceForm";
import GuessForm from "./GuessForm";
import { API_QUESTION_ENDPOINT } from "@/app/lib/urls/api_urls";
import axios from "axios";

export type QuestionCreationData = {
  question_text: string;
  point: number;
  time_limit: number;
  option_one?: string;
  option_two?: string;
  option_three?: string;
  option_four?: string;
  correct_option?: number;
  correct_guess?: number;
};

const AddQuestionModal: React.FC<{
  quizId: number;
  show: boolean;
  orderInQuiz: number;
  onHide: () => void;
}> = (props) => {
  const [questionType, setQuestionType] = useState<"multiple choice" | "guess">(
    "multiple choice"
  );

  const saveQuestion = async (questionData: QuestionCreationData) => {
    console.log("save question");
    console.log(questionData);
    const response = await axios.post(API_QUESTION_ENDPOINT, {
      ...questionData,
      quiz_id: props.quizId,
      order_in_quiz: props.orderInQuiz,
      question_type: questionType,
    });
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${
        props.show ? "" : "hidden"
      }`}
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center border-b pb-3">
          <h5 className="text-lg font-bold">Add Question</h5>
          <button onClick={props.onHide} className="text-black">
            ✖
          </button>
        </div>

        <div className="flex w-full my-2">
          <button
            onClick={() => setQuestionType("multiple choice")}
            className={`flex-grow border-2 ${
              questionType === "multiple choice"
                ? "bg-blue-800 text-white"
                : "bg-gray-200"
            }`}
          >
            Multiple Choice
          </button>
          <button
            onClick={() => setQuestionType("guess")}
            className={`flex-grow border-2 ${
              questionType === "guess"
                ? "bg-blue-800 text-white"
                : "bg-gray-200"
            }`}
          >
            Guess
          </button>
        </div>

        <div className="py-3">
          {questionType === "multiple choice" ? (
            <MultipleChoiceForm
              saveQuestion={saveQuestion}
              onHide={props.onHide}
            />
          ) : (
            <GuessForm saveQuestion={saveQuestion} onHide={props.onHide} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
