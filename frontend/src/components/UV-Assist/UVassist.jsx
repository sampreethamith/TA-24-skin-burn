import React, { Component, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import IframeWillyWeatherLaptop from "./IframeWillyWeatherLaptop";
import IframeWillyWeatherMobile from "./IframeWillyWeatherMobile";

const UVassist = () => {
  const [currentWidth, setCurrentWidth] = useState(
    document.documentElement.clientWidth
  );
  // const currentWidth = document.documentElement.clientWidth;
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  const onResize = () => {
    // console.log(window.innerWidth);
    // console.log(document.documentElement.clientWidth)
    setCurrentWidth(document.documentElement.clientWidth);
    console.log(currentWidth);
  };
  return (
    <div className="text-center">
      <h1>UV Assist</h1>
      {currentWidth <= 450 && (
        <IframeWillyWeatherMobile currentWidth={currentWidth} />
      )}
      {currentWidth > 450 && (
        <IframeWillyWeatherLaptop currentWidth={currentWidth} />
      )}
    </div>
  );
};

export default UVassist;
