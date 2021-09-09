import React from "react";
import { Container } from "react-bootstrap";

const IframeWillyWeather = () => {
  return (
    <div className="block">
      <h1>UV Assist</h1>
      <iframe
        title="willyWeather"
        className="uv-assist-widget"
        src="https://cdnres.willyweather.com.au/widget/loadView.html?id=64147"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default IframeWillyWeather;
