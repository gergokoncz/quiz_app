import { Form } from "react-bootstrap";
import { useRef } from "react";

const MultipleChoiceForm: React.FC<{ saveQuestion: () => void }> = (props) => {
  const questionTextRef = useRef<HTMLInputElement>(null);
  const pointValueRef = useRef<HTMLInputElement>(null);
  const timeForQuestionRef = useRef<HTMLInputElement>(null);
  const optionOneTextRef = useRef<HTMLInputElement>(null);
  const optionTwoTextRef = useRef<HTMLInputElement>(null);
  const optionThreeTextRef = useRef<HTMLInputElement>(null);
  const optionFourTextRef = useRef<HTMLInputElement>(null);
  const correctOptionRef = useRef<HTMLSelectElement>(null);

  const saveQuestion = () => {
    console.log("saving multiple choice question");
    const questionData = {
      question_text: questionTextRef.current!.value,
      point: pointValueRef.current!.value,
      time_limit: timeForQuestionRef.current!.value,
      option_one: optionOneTextRef.current!.value,
    };
    const enteredQuestion = questionTextRef.current!.value;
    const enteredDatasetDescription = questionTypeRef.current!.value;
    const enteredDatasetType = datasetTypeRef.current!.value;

    console.log(enteredDatasetName);
    console.log(enteredDatasetDescription);
    console.log(enteredDatasetType);
  };

  return (
    <form>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md w-full">
        <label className="mx-4 mb-1 mt-2 text-sm">Question</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          ref={questionTextRef}
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
          defaultValue={1}
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
          defaultValue={30}
          ref={timeForQuestionRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 1</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          ref={optionOneTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 2</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          ref={optionTwoTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 3</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          ref={optionThreeTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Option 4</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          ref={optionFourTextRef}
        ></input>
      </div>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
        <label className="mx-4 mb-1 mt-2 text-sm">Correct Option</label>
        <select
          title="select correct option"
          id="correctOptionInput"
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 text-black max-w-xs text-sm"
          ref={correctOptionRef}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
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
