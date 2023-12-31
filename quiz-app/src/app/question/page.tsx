const QuestionPage: React.FC = () => {
  const question = "question1";
  const answers = ["ans1", "ans2", "ans3", "ans4"];
  return (
    <div className="flex flex-col text-center">
      <div className="border text-lg m-12">{question}</div>
      {answers.map((answer) => {
        return <div className="border text-base ml-6 mr-6 mb-3">answer1</div>;
      })}
    </div>
  );
};

export default QuestionPage;
