import React from "react";
import { Animated } from "react-animated-css";
import information from "./../../images/information-picture.jpeg";
import LearnMore from "../Common/LearnMore";

const RightInformationCard = ({data}) => {
  return (
    <div className="block right-information-block">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="image-block">
          <div className="image-background">
            <img src={data.imgP} alt="Information idea" />
          </div>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="information-block">
          <h2>{data.header}</h2>
          <p>
            {data.description}
          </p>
          <LearnMore />
        </div>
      </Animated>
    </div>
  );
};

export default RightInformationCard;
