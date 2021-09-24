import React, { useState, useEffect, useRef } from "react";
import AnswerOptions from "./AnswerOptions";
import uvImage from "../../images/UVSunImage.svg";
import Pagination from "../Common/Pagination";
import { paginate } from "../../utils/pagination";
import { UVQuizData } from "../../services/getUVQuizData";
import { skinCancerQuizData } from "../../services/getSkinCancerQuizData";
import { sunScreenQuizData } from "../../services/getSunScreenQuizData";

const QuestionAndAnswer = ({ quizType }) => {
  let constantQuizJson = [];
  if (quizType === "UV Index") constantQuizJson = [...UVQuizData()];
  if (quizType === "Sun Screen") constantQuizJson = [...sunScreenQuizData()];
  if (quizType === "Skin Cancer") constantQuizJson = [...skinCancerQuizData()];
  const [pageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const documentReference = useRef(null);

  useEffect(() => {
    const question = getPageData();
    setCurrentQuestion([...question]);
    setTotalCount(constantQuizJson.length);
  }, []);

  const getPageData = () => {
    const question = paginate(constantQuizJson, pageSize, currentPage);
    return question;
  };

  useEffect(() => {
    const question = getPageData();
    setCurrentQuestion([...question]);
  }, [currentPage]);

  const answerSelected = (questionIndex, optionIndex) => {
    const question = getPageData();
    const newQuizJson = [...question];
    newQuizJson[questionIndex]["options"][optionIndex].selected = true;

    setCurrentQuestion([...newQuizJson]);
  };

  const handlePageClick = (page) => {
    console.log(documentReference.current);
    document
      .getElementsByClassName("question-and-answer")[0]
      .classList.remove("aos-animate");

    setCurrentPage(page);
  };

  return (
    <div data-aos="flip-left">
      {currentQuestion.map((question, questionIndex) => {
        return (
          <div className="question-and-answer" ref={documentReference}>
            <h5>{question.questionTitle}</h5>
            <h6>{question.questionSubtitle}</h6>
            <div className="py-3 question-image">
              <img src={uvImage} alt="UV" />
            </div>
            <div>
              {question.options.map((option, optionIndex) => {
                return (
                  <div className="py-1">
                    <AnswerOptions
                      optionValue={option.optionNumber}
                      optionTitle={option.optionAnswer}
                      handleOnClick={() =>
                        answerSelected(questionIndex, optionIndex)
                      }
                      selected={
                        currentQuestion[questionIndex]["options"][optionIndex]
                          .selected
                      }
                      validAnswer={
                        currentQuestion[questionIndex]["options"][optionIndex]
                          .selected &&
                        currentQuestion[questionIndex]["options"][optionIndex]
                          .correctAnswer
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <Pagination
        itemCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageClick={handlePageClick}
      />
    </div>
  );
};
export default QuestionAndAnswer;
