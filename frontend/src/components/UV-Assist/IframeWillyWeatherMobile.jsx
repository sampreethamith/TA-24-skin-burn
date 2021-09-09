import React from "react";
import { Container } from "react-bootstrap";

const IframeWillyWeatherMobile = ({currentWidth}) => {
//   if (currentWidth <= 320) currentWidth = 280;
//   else  currentWidth -= 60;
  return (
    <div className="block">
      <iframe
        title="Mobile"
        src="https://cdnres.willyweather.com.au/widget/loadView.html?id=64164"
        width={currentWidth - 60}
        height="228"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default IframeWillyWeatherMobile;
