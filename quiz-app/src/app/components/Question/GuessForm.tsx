import { Form } from "react-bootstrap";
import { useRef } from "react";

const GuessForm: React.FC<{}> = () => {
  const questionTextRef = useRef<HTMLInputElement>(null);
  const pointValueRef = useRef<HTMLInputElement>(null);
  const timeForQuestionRef = useRef<HTMLInputElement>(null);
  const correctGuessRef = useRef<HTMLInputElement>(null);

  // const saveDataset = () => {
  //   console.log("new dataset saved");
  //   const enteredDatasetName = questionTextRef.current!.value;
  //   const enteredDatasetDescription = questionTypeRef.current!.value;
  //   const enteredDatasetType = datasetTypeRef.current!.value;

  //   console.log(enteredDatasetName);
  //   console.log(enteredDatasetDescription);
  //   console.log(enteredDatasetType);
  // };

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
