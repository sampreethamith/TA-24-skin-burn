import React from "react";
import { Animated } from "react-animated-css";
import LearnMore from "./LearnMore";
// import sunscreen_level from "./../../images/sunscreen_level.png";

const LeftInformationCard = ({ data, learnmoreroute }) => {
  return (
    <div className="left-information-block">
      <div className="information-block" data-aos="fade-right">
        {data.header && <h2>{data.header}</h2>}
        <p>{data.description}</p>
        {learnmoreroute && <LearnMore path={learnmoreroute} />}
      </div>

      <div className="image-block" data-aos="fade-left">
        <div className="image-background">
          <img src={data.imgP} alt="Information" />
        </div>
      </div>
    </div>
  );
};

export default LeftInformationCard;
