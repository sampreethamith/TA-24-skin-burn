import React, { Component, useEffect, useState } from "react";
import IframeWillyWeatherLaptop from "./IframeWillyWeatherLaptop";
import IframeWillyWeatherMobile from "./IframeWillyWeatherMobile";

const UVassist = () => {
  const [currentWidth, setCurrentWidth] = useState(
    document.documentElement.clientWidth
  );
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  const onResize = () => {
    setCurrentWidth(document.documentElement.clientWidth);
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
