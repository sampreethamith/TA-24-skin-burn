import React, { useState, useEffect, useRef } from "react";
import AnswerOptions from "./AnswerOptions";
import uvImage from "../../images/UVSunImage.svg";
import Pagination from "../Common/Pagination";
import { paginate } from "../../utils/pagination";
import { UVQuizData } from "../../services/getUVQuizData";
import { skinCancerQuizData } from "../../services/getSkinCancerQuizData";
import { sunScreenQuizData } from "../../services/getSunScreenQuizData";
import FinishedPage from "./FinishedPage";

const QuestionAndAnswer = ({ quizType }) => {
  let constantQuizJson = [];
  if (quizType === "UV Index") constantQuizJson = [...UVQuizData()];
  if (quizType === "Sun Screen") constantQuizJson = [...sunScreenQuizData()];
  if (quizType === "Skin Cancer") constantQuizJson = [...skinCancerQuizData()];
  const [pageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [quizTypeQuestions, setQuizTypeQuestions] = useState([
    ...constantQuizJson,
  ]);
  const [finishedClicked, setFinishedClicked] = useState(false);

  const getPageDataByQuestions = (quizQuestions) => {
    const question = paginate(quizQuestions, pageSize, currentPage);
    return question;
  };

  useEffect(() => {
    const question = getPageDataByQuestions([...quizTypeQuestions]);
    setCurrentQuestion([...question]);
    setTotalCount(quizTypeQuestions.length);
  }, []);

  useEffect(() => {
    const question = getPageDataByQuestions(quizTypeQuestions);
    setCurrentQuestion([...question]);
  }, [currentPage]);

  const answerSelected = (optionIndex) => {
    let newQuizJson = [];
    newQuizJson = JSON.parse(JSON.stringify(constantQuizJson));

    newQuizJson[currentPage - 1]["options"][optionIndex].selected = true;

    let myArray = [];
    for (let index = 0; index < newQuizJson.length; index++) {
      if (index === currentPage - 1) {
        myArray.push(JSON.parse(JSON.stringify(newQuizJson[index])));
      } else {
        myArray.push(quizTypeQuestions[index]);
      }
    }

    const newCurrentQuestion = getPageDataByQuestions([...newQuizJson]);

    setCurrentQuestion([...newCurrentQuestion]);

    setQuizTypeQuestions([...myArray]);
  };

  const handlePageClick = (page) => {
    if (currentPage === quizTypeQuestions.length && page !== currentPage - 1) {
      setFinishedClicked(true);
    }
    setCurrentPage(page);
  };

  return (
    <div data-aos="flip-left">
      {!finishedClicked &&
        currentQuestion.map((question, questionIndex) => {
          return (
            <div className="question-and-answer">
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
                        handleOnClick={() => answerSelected(optionIndex)}
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

      {!finishedClicked && (
        <Pagination
          itemCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />
      )}
      {finishedClicked && <FinishedPage quizType={quizType} />}
    </div>
  );
};
export default QuestionAndAnswer;

// const getPageData = () => {
//   const question = paginate(constantQuizJson, pageSize, currentPage);
//   return question;
// };

// useEffect(() => {
//   console.log(quizTypeQuestions);
// }, [quizTypeQuestions]);

// const newQuizTypeQuestions = [...constantQuizJson];
// newQuizTypeQuestions[questionIndex]["options"][optionIndex].selected = true;
