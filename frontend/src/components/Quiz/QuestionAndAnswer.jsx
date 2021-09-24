import React, { useState, useEffect } from "react";
import AnswerOptions from "./AnswerOptions";
import uvImage from "../../images/UVSunImage.svg";
import Pagination from "../Common/Pagination";
import { paginate } from "../../utils/pagination";
import AOS from "aos";

const QuestionAndAnswer = () => {
  const constantQuizJson = [
    {
      questionTitle: "Question 1",
      questionSubtitle: "What is UV stand for?",
      imagePath: "../../images/UVSunImage.svg",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "Answer",
          correctAnswer: true,
        },
        {
          optionNumber: "B",
          optionAnswer: "Answer",
        },
        {
          optionNumber: "C",
          optionAnswer: "Answer",
        },
        {
          optionNumber: "D",
          optionAnswer: "Answer",
        },
      ],
    },
    {
      questionTitle: "Question 2?",
      questionSubtitle: "What is UV stand for?",
      imagePath: "../../images/UVSunImage.svg",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "Answer",
        },
        {
          optionNumber: "B",
          optionAnswer: "Answer",
        },
        {
          optionNumber: "C",
          optionAnswer: "Answer",
          correctAnswer: true,
        },
        {
          optionNumber: "D",
          optionAnswer: "Answer",
        },
      ],
    },
  ];
  const [pageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState([]);

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
    console.log("Clicked....");

    // let mainDiv = document.getElementById('quizMainDiv')
    // let mainDivChild = mainDiv.getChildrens()[0]
    // mainDiv.removeChild()
    // mainDiv.appendChildren(mainDivChild)
    setCurrentPage(page);
  };

  return (
    <div>
      {currentQuestion.map((question, questionIndex) => {
        return (
          <div className="question-and-answer" data-aos="flip-left">
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
