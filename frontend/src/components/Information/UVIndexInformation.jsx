import React, { useState } from "react";
import "./css/SunScreenInformation.css";
import { Container } from "react-bootstrap";
import { getUVInfo } from "../../services/InformationPages/getUVinfo.js";

const UVIndexInformation = () => {
  const [uvInfoType, setuvInfoType] = useState("");

  const SunScreenData = getUVInfo();
  return (
    <>
      <Container className="information-page white-text">
        <p className="information-page-title">{SunScreenData.pageTitle}</p>
        <p className="information-page-quote">{SunScreenData.pageQuote}</p>
        <p className="information-page-introduction">
          {SunScreenData.introductionText}
        </p>
        <div className="information-introduction-content">
          <div>
            {SunScreenData.paraTexts.map((paraText, paraIndex) => (
              <p>{paraText}</p>
            ))}
          </div>
        </div>
        <div className="uv-information-card"></div>
      </Container>
    </>
  );
};

export default UVIndexInformation;
