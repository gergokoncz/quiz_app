"use client";

import { useEffect, useState } from "react";
import { API_QUIZ_ENDPOINT } from "./lib/urls/api_urls";
import axios from "axios";
import QuizList from "./components/Quiz/QuizList";
import LoadingPage from "./components/UI/LoadingPage";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_QUIZ_ENDPOINT);
        setData(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      {isLoading && <LoadingPage />}
      {!isLoading && <QuizList quizzes={data.quizzes} />}
    </main>
  );
}
