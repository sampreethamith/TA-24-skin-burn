import React from "react";

const AnswerOptions = ({
  optionValue,
  optionTitle,
  handleOnClick,
  selected,
  validAnswer,
}) => {
  const optionClassName = selected
    ? validAnswer
      ? "option-selected-valid-answer"
      : "option-selected-invalid-answer"
    : "options";

  return (
    <div className={optionClassName} onClick={handleOnClick}>
      <div className="options-answer">
        <div className="option-number">
          <p className="white-text">{optionValue}</p>
        </div>
        <div className="option-value">
          <p className="white-text">{optionTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AnswerOptions;
