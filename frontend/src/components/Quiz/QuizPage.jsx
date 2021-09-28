import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import QuestionAndAnswer from "./QuestionAndAnswer";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";

const QuizPage = () => {
  const [quizType] = useState(["UV Index", "Sun Screen", "Skin Cancer"]);
  const [quizTypeSelected, setQuizTypeSelected] = useState("UV Index");
  const [loading, setLoading] = useState(false);

  const quizTypeMap = quizType.map((type) => type);

  const handleQuizTypeChange = (e) => {
    setQuizTypeSelected(quizType[e.target.value]);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/quiz",
      title: "Quiz",
      active: "active",
    },
  ];

  return (
    <div className="block">
      <Container>
        <BreadCrumbComponent navigation={navigation} />
        <h1 className="py-3">{`${quizTypeSelected} Quiz`}</h1>
        <Row>
          <Col sm={2}>
            <select
              onChange={(e) => handleQuizTypeChange(e)}
              className="select-selected"
            >
              {quizTypeMap.map((type, id) => {
                return (
                  <option key={id} value={id}>
                    {type}
                  </option>
                );
              })}
            </select>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <br />
        {loading ? (
          <Spinner
            animation="border"
            role="status"
            style={{
              width: "100px",
              height: "100px",
              display: "block",

              position: "absolute",
              top: "50%",
              left: "50%",
            }}
            variant="warning"
          ></Spinner>
        ) : (
          <QuestionAndAnswer quizType={quizTypeSelected} />
        )}
      </Container>
    </div>
  );
};

export default QuizPage;
