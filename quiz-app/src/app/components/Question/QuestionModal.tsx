import { useState } from "react";
import MultipleChoiceForm from "./MultipleChoiceForm";
import GuessForm from "./GuessForm";
import { API_QUESTION_ENDPOINT } from "@/app/lib/urls/api_urls";
import axios from "axios";

export type QuestionFormData = {
  id?: number;
  quiz_id: number;
  question_text?: string;
  question_type?: "multiple choice" | "guess";
  order_in_quiz: number;
  created_date?: string;
  updated_date?: string;
  point?: number;
  time_limit?: number;
  option_one?: string;
  option_two?: string;
  option_three?: string;
  option_four?: string;
  correct_option?: number;
  correct_guess?: number;
};

const QuestionModal: React.FC<{
  edit: boolean;
  questionData: QuestionFormData;
  show: boolean;
  onHide: () => void;
}> = (props) => {
  const [questionType, setQuestionType] = useState<"multiple choice" | "guess">(
    props.questionData.question_type
      ? props.questionData.question_type
      : "multiple choice"
  );

  const saveQuestion = async (questionData: QuestionFormData) => {
    console.log(questionData);
    if (!props.edit) {
      const response = await axios.post(API_QUESTION_ENDPOINT, {
        questionData,
      });
    } else {
      console.log("save edited question");
      const response = await axios.put(
        `${API_QUESTION_ENDPOINT}${props.questionData.id}`,
        {
          ...questionData,
          question_type: questionType,
        }
      );
    }
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
              edit={props.edit}
              questionData={props.questionData}
              saveQuestion={saveQuestion}
              onHide={props.onHide}
            />
          ) : (
            <GuessForm
              edit={props.edit}
              questionData={props.questionData}
              saveQuestion={saveQuestion}
              onHide={props.onHide}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
