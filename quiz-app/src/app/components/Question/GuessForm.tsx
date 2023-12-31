import { useRef } from "react";
import { QuestionCreationData } from "./AddQuestionModal";

const GuessForm: React.FC<{
  saveQuestion: (questionData: QuestionCreationData) => void;
  onHide: () => void;
}> = (props) => {
  const questionTextRef = useRef<HTMLInputElement>(null);
  const pointValueRef = useRef<HTMLInputElement>(null);
  const timeForQuestionRef = useRef<HTMLInputElement>(null);
  const correctGuessRef = useRef<HTMLInputElement>(null);

  const saveGuessQuestion = () => {
    console.log("saving guess question");
    const questionData = {
      question_text: questionTextRef.current!.value,
      point: Number(pointValueRef.current!.value),
      time_limit: Number(timeForQuestionRef.current!.value),
      correct_guess: Number(correctGuessRef.current!.value),
    };

    props.saveQuestion(questionData);
  };

  return (
    <form>
      <div className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md max-w-sl">
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
        <label className="mx-4 mb-1 mt-2 text-sm">Time To Answer (s)</label>
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
        <label className="mx-4 mb-1 mt-2 text-sm">Correct Guess</label>
        <input
          className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 max-w-xs text-sm"
          type="number"
          defaultValue={0}
          ref={correctGuessRef}
        ></input>
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
          onClick={saveGuessQuestion}
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

export default GuessForm;
