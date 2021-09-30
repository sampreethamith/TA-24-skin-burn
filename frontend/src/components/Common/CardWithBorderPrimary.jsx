import React from "react";
import { useHistory } from "react-router-dom";
import quiz_icon from "../../images/home/quiz_icon.svg";

const CardWithBorderPrimary = ({ data }) => {
  const history = useHistory();

  return (
    <div
      className="card-with-border-primary"
      onClick={() => history.push(data.route)}
    >
      <img className="card-with-border-primary-img" src={quiz_icon} />
      <p className="card-with-border-primary-title">Take a Quiz</p>
      <p className="text-center">
        Find more about UV index, Sun screen, and Skin cancer
      </p>
    </div>
  );
};

export default CardWithBorderPrimary;
