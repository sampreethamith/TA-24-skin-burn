import React, { useState, useEffect } from "react";
import sample_icon from "../Data/uvindex_icon.svg";
import sample_hover_icon from "../Data/search_black_icon.svg";
import "../Data/FeatureCard.css";

function FeatureCard({
  mainImage,
  hoverImage,
  hoverTextOne,
  mainImageHeight,
  hoverImageHeight,
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

  function handleMouseEnter() {
    setChangeClass("slide-up");
  }

  function handleMouseExit() {
    setChangeClass("slide-down");
  }

  function handleClick() {}
  return (
    <div
      data-aos="flip-up"
      className="feature-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      onClick={handleClick}
    >
      <div className="box">
        <img height={mainImageHeight} src={sample_icon} />
      </div>
      <div className={"box hover-div " + changeClass}>
        <img height={hoverImageHeight} src={sample_hover_icon} />
        <h3 className="main-text">Hello</h3>
      </div>
    </div>
  );
}

export default FeatureCard;
