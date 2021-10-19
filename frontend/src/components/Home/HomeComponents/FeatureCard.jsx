import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/FeatureCard.css";

function FeatureCard({
  mainImage,
  hoverImage,
  hoverText,
  mainImageHeight,
  hoverImageHeight,
  path
}) {
  mainImageHeight =
    mainImageHeight == null || mainImageHeight == ""
      ? "250px"
      : mainImageHeight;
  hoverImageHeight =
    hoverImageHeight == null || hoverImageHeight == ""
      ? "40px"
      : hoverImageHeight;

  const [changeClass, setChangeClass] = useState("");
  const history = useHistory()

  function handleMouseEnter() {
    setChangeClass("slide-up");
  }

  function handleMouseExit() {
    setChangeClass("slide-down");
  }

  function handleClick() {
    history.push(path)
  }
  return (
    <div
      data-aos="flip-up"
      className="feature-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      onClick={handleClick}
    >
      <div className="box">
        <img height={mainImageHeight} src={mainImage} />
      </div>
      <div className={"box hover-div " + changeClass}>
        <img height={hoverImageHeight} src={hoverImage} />
        <h3 className="main-text">{hoverText}</h3>
      </div>
    </div>
  );
}

export default FeatureCard;
