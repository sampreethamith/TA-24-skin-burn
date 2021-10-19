import React from "react";
import { getSunScreenInfo } from "../../services/getSunScreenQuizData";
import { getUVInfo } from "../../services/getUVQuizData";
import { getSkinCancerInfo } from "../../services/getSkinCancerQuizData";
import LearnMore from "../Common/LearnMore";

const FinishedPage = ({ quizType }) => {
  let data = {};
  if (quizType === "UV Index") data = getUVInfo();
  if (quizType === "Sun Screen") data = getSunScreenInfo();
  if (quizType === "Skin Cancer") data = getSkinCancerInfo();
  return (
    <div>
      <h2>{data.title}</h2>
      {data.descriptionText.map((description, index) => {
        return (
          <p key={index} className="white-text">
            {description}{" "}
          </p>
        );
      })}
      <LearnMore path={data.link} />
    </div>
  );
};

export default FinishedPage;
