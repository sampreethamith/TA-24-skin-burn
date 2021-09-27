import React from "react";
import { Animated } from "react-animated-css";
import LearnMore from "../Common/LearnMore";

const RightInformationCard = ({ data, learnmoreroute }) => {
  return (
    <div className="right-information-block">
      <div className="image-block" data-aos="fade-right">
        <div className="image-background">
          <img src={data.imgP} alt="Information" />
        </div>
      </div>

      <div className="information-block" data-aos="fade-left">
        {data.header && <h2>{data.header}</h2>}
        <p>{data.description}</p>
        {learnmoreroute && <LearnMore path={learnmoreroute} />}
      </div>
    </div>
  );
};

export default RightInformationCard;
