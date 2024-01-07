import { useRef } from "react";
import { QuestionFormData } from "./QuestionModal";

const MultipleChoiceForm: React.FC<{
  edit: boolean;
  questionData: QuestionFormData;
  saveQuestion: (questionData: QuestionFormData) => void;
  onHide: () => void;
}> = (props) => {
  const questionTextRef = useRef<HTMLInputElement>(null);
  const pointValueRef = useRef<HTMLInputElement>(null);
  const timeForQuestionRef = useRef<HTMLInputElement>(null);
  const optionOneTextRef = useRef<HTMLInputElement>(null);
  const optionTwoTextRef = useRef<HTMLInputElement>(null);
  const optionThreeTextRef = useRef<HTMLInputElement>(null);
  const optionFourTextRef = useRef<HTMLInputElement>(null);
  const correctOptionRef = useRef<HTMLSelectElement>(null);

  const saveMultipleChoiceQuestion = () => {
    const questionData = {
      id: props.questionData.id,
      quiz_id: props.questionData.quiz_id,
      order_in_quiz: props.questionData.order_in_quiz,
      //
      question_text: questionTextRef.current!.value,
      point: Number(pointValueRef.current!.value),
      time_limit: Number(timeForQuestionRef.current!.value),
      option_one: optionOneTextRef.current!.value,
      option_two: optionTwoTextRef.current!.value,
      option_three: optionThreeTextRef.current!.value,
      option_four: optionFourTextRef.current!.value,
      correct_option: Number(correctOptionRef.current!.value),
    };

    props.saveQuestion(questionData);
    props.onHide();
  };

  return (
    <form>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md w-full">
        <label className="mx-4 mb-1 mt-2 text-sm">Question</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          ref={questionTextRef}
          defaultValue={props.edit ? props.questionData.question_text : ""}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Point Value</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          type="number"
          min={1}
          max={100}
          step={1}
          defaultValue={props.edit ? props.questionData.point : 1}
          ref={pointValueRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Time Limit (s)</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          type="number"
          min={5}
          max={100}
          step={1}
          defaultValue={props.edit ? props.questionData.time_limit : 30}
          ref={timeForQuestionRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 1</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          defaultValue={props.edit ? props.questionData.option_one : ""}
          ref={optionOneTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 2</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          defaultValue={props.edit ? props.questionData.option_two : ""}
          ref={optionTwoTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 3</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          defaultValue={props.edit ? props.questionData.option_three : ""}
          ref={optionThreeTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 4</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          defaultValue={props.edit ? props.questionData.option_four : ""}
          ref={optionFourTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Correct Option</label>
        <select
          title="select correct option"
          id="correctOptionInput"
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 text-black max-w-xs text-sm"
          defaultValue={props.edit ? props.questionData.correct_option : ""}
          ref={correctOptionRef}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="flex justify-end items-center pt-3 border-t">
        <button
          onClick={props.onHide}
          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Close
        </button>
        <button
          onClick={saveMultipleChoiceQuestion}
          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Save Question
        </button>
      </div>
      {/* <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">
          upload initial version here
        </label>
        <input
          type="file"
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 text-black max-w-xs text-sm"
          ref={datasetFileRef}
          size="sm"
        ></input>
      </div> */}
    </form>
  );
};

export default MultipleChoiceForm;
