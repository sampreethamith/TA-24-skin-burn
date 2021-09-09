import React from "react";
import { Container } from "react-bootstrap";

const IframeWillyWeatherLaptop = ({ currentWidth }) => {
  if (currentWidth < 1024) currentWidth = 700;
  else if (currentWidth >= 1024) currentWidth = 950;
  else if (currentWidth >= 1440) currentWidth = 1200;

  return (
    <div className="block">
      <iframe
        title="Laptop"
        src="https://cdnres.willyweather.com.au/widget/loadView.html?id=64166"
        width={currentWidth}
        height="600"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default IframeWillyWeatherLaptop;
