"use client";

import React from "react";
import { useEffect, useState } from "react";
import { API_QUIZ_ENDPOINT } from "@/app/lib/urls/api_urls";
import axios from "axios";
import LoadingPage from "@/app/components/UI/LoadingPage";
import EditQuiz from "@/app/components/Quiz/EditQuiz";
import { QuizResponse } from "@/app/api/quiz/[id]/route";

export default function EditQuizPage({ params }: { params: { id: string } }) {
  const [quizData, setQuizData] = useState<QuizResponse>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        console.log(params.id);
        const res = await axios.get(`${API_QUIZ_ENDPOINT}${params.id}`);
        setQuizData(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchQuizData();
  }, [params.id]);
  console.log(quizData);
  return (
    <div>
      {isLoading && <LoadingPage />}
      {!isLoading && <EditQuiz quizData={quizData} />}
    </div>
  );
}
