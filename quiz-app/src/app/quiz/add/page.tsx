"use client";

import React from "react";
import AddQuizForm from "@/app/components/Quiz/AddQuizForm";

const AddQuizPage: React.FC = () => {
  return (
    <div className="flex flex-col border-2">
      <h1 className="text-center">Add Quiz</h1>
      <AddQuizForm />
    </div>
  );
};

export default AddQuizPage;
