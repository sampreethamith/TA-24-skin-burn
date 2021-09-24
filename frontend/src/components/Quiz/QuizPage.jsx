import React from "react";
import { Container } from "react-bootstrap";
import QuestionAndAnswer from "./QuestionAndAnswer";

const QuizPage = () => {
  return (
    <div className="block">
      <Container>
        <h1 className="py-3">About UV Index</h1>
        <QuestionAndAnswer />
      </Container>
    </div>
  );
};

export default QuizPage;
