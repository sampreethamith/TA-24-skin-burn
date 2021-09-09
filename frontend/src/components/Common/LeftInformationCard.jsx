import React from "react";
import { Animated } from "react-animated-css";
import LearnMore from "./LearnMore";
// import sunscreen_level from "./../../images/sunscreen_level.png";

const LeftInformationCard = ({ data, learnmoreroute }) => {
  return (
    <div className="left-information-block">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="information-block">
          {data.header && <h2>{data.header}</h2>}
          <p>{data.description}</p>
          {learnmoreroute && <LearnMore path={learnmoreroute} />}
        </div>
      </Animated>
      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="image-block">
          <div className="image-background">
            <img src={data.imgP} alt="Information" />
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default LeftInformationCard;
