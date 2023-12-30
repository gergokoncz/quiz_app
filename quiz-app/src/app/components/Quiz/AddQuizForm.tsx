"use client";

import { useState, useRef, FormEvent } from "react";
import axios from "axios";
import { API_QUIZ_ENDPOINT } from "@/app/lib/urls/api_urls";

const AddQuizForm: React.FC = () => {
  const [requestSent, setRequestSent] = useState(false);

  const quizCreatorRef = useRef<HTMLInputElement>(null);
  const tokenRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredQuizCreator = quizCreatorRef.current!.value;
    const enteredToken = tokenRef.current!.value;
    const enteredTheme = themeRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;

    const quizData = {
      creator: enteredQuizCreator,
      token: enteredToken,
      theme: enteredTheme,
      description: enteredDescription,
    };

    console.log(quizData);
    const response = await axios.post(API_QUIZ_ENDPOINT, quizData);
    console.log(response);
  };

  return (
    <div className="flex flex-col">
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <div className="flex flex-col mx-auto my-2 rounded-lg">
          <label className="mx-4 mb-1 mt-2 text-sm">quiz creator</label>
          <input
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={quizCreatorRef}
          ></input>
        </div>
        <div className="flex flex-col mx-auto my-2 rounded-lg max-w-md">
          <label className="mx-4 mb-1 mt-2 text-sm">token</label>
          <input
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={tokenRef}
          ></input>
        </div>
        <div className="flex flex-col mx-auto my-2 rounded-lg max-w-md">
          <label className="mx-4 mb-1 mt-2 text-sm">quiz theme</label>
          <input
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={themeRef}
          ></input>
        </div>
        <div className="flex flex-col mx-auto my-2 rounded-lg max-w-md">
          <label className="mx-4 mb-1 mt-2 text-sm">description</label>
          <input
            className="mx-auto mt-0 mb-2 border-1 bg-white rounded-lg p-1 text-sm max-w-xl"
            ref={descriptionRef}
          ></input>
        </div>
        <button
          className="mx-auto my-2 border-1 bg-theme-main rounded-lg p-1 text-sm max-w-xl"
          type="submit"
        >
          Create quiz
        </button>
      </form>
    </div>
  );
};

export default AddQuizForm;
