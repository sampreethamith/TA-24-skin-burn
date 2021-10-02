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
  const [quizTypeQuestions, setQuizTypeQuestions] = useState([
    ...constantQuizJson,
  ]);

  const getConstantQuizJson = () => {
    return constantQuizJson.map((a) => {
      return { ...a };
    });
  };

  const getPageDataByQuestions = (quizQuestions) => {
    const question = paginate(quizQuestions, pageSize, currentPage);
    return question;
  };

  useEffect(() => {
    // console.log("printing inside initial useEffect hook");
    // console.log(quizTypeQuestions);
    const question = getPageDataByQuestions([...quizTypeQuestions]);
    setCurrentQuestion([...question]);
    setTotalCount(constantQuizJson.length);
  }, []);

  const answerSelected = (optionIndex) => {
    let newQuizJson = [];
    newQuizJson = JSON.parse(JSON.stringify(constantQuizJson));
    newQuizJson[currentPage - 1]["options"][optionIndex].selected = true;

    console.log(newQuizJson);

    // const cloneQuizType = [...quizTypeQuestions];

    // console.log(cloneQuizType);

    // const removed = cloneQuizType.splice(currentPage - 1, 1, {
    //   ...newQuizJson[currentPage - 1],
    // });

    // console.log(cloneQuizType);
    // setQuizTypeQuestions([...newQuizJson]);
    // const currentQuizQuestion = getPageDataByQuestions([...newQuizJson]);

    // setCurrentQuestion([newQuizJson[currentPage - 1]]);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    const question = getPageDataByQuestions([...quizTypeQuestions]);
    setCurrentQuestion([...question]);
  };

  return (
    <div data-aos="flip-left">
      {currentQuestion.map((question, questionIndex) => {
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

// const getPageData = () => {
//   const question = paginate(constantQuizJson, pageSize, currentPage);
//   return question;
// };

// useEffect(() => {
//   console.log(quizTypeQuestions);
// }, [quizTypeQuestions]);

// const newQuizTypeQuestions = [...constantQuizJson];
// newQuizTypeQuestions[questionIndex]["options"][optionIndex].selected = true;
