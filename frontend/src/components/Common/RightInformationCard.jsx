import React from "react";
import { Animated } from "react-animated-css";
import LearnMore from "../Common/LearnMore";

const RightInformationCard = ({ data, learnmoreroute }) => {
  return (
    <div className="right-information-block">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="image-block">
          <div className="image-background">
            <img src={data.imgP} alt="Information" />
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
          <p>{data.description}</p>
          {learnmoreroute && <LearnMore path={learnmoreroute} />}
        </div>
      </Animated>
    </div>
  );
};

export default RightInformationCard;
