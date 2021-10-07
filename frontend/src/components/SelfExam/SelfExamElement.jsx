import React from "react";
import "./SelfExam.css";

const SelfExamElement = ({ image, title, body }) => {
  return (
    <div className="self-element">
      <img
        src={image}
        alt="face Icon"
        className="self-element-image-size"
      ></img>
      <h5 className="self-element-margin primary-text">{title}</h5>
      <p className="white-text">{body}</p>
    </div>
  );
};

export default SelfExamElement;
