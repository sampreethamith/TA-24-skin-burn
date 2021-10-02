import React from "react";
import AnswerOptions from "../AnswerOptions";
import "../Css/QueAnsTemplate.css";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";

const QueAnsTemplate = ({ question, questionSubPart, answerOptions }) => {
  question = "Question?";
  questionSubPart = "blahblah";
  answerOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const [view, setView] = React.useState("Option 1");

  const handleOptionOnClick = (event) => {
    console.log(event.target);
  };
  return (
    <div className="que-ans-template">
      <h5>Question?</h5>
      <h6>sub part question</h6>
      <div>
        <ListGroup className="que-ans-template-list-group">
          {answerOptions.map((optionItem, optionItemIndex) => {
            return (
              <ListGroup.Item action id={optionItem}>
                <div
                  className="que-ans-template-option-content"
                  onClick={handleOptionOnClick}
                >
                  <div>{optionItemIndex + 1}</div>
                  <div>{optionItem}</div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default QueAnsTemplate;
