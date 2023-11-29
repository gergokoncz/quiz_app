import { Container } from "react-bootstrap";

const QuestionPage: React.FC = () => {
  const question = "question1";
  const answers = ["ans1", "ans2", "ans3", "ans4"];
  return (
    <Container className="flex flex-col text-center">
      <Container className="border text-lg m-12">{question}</Container>
      {answers.map((answer) => {
        return (
          <Container className="border text-base ml-6 mr-6 mb-3">
            answer1
          </Container>
        );
      })}
    </Container>
  );
};

export default QuestionPage;
