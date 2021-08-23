import React from "react";
import { Animated } from "react-animated-css";
import information from "./../../images/information-picture.jpeg";
import LearnMore from "../Common/LearnMore";

const RightInformationCard = () => {
  return (
    <div className="block right-information-block">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="image-block">
          <div className="image-background">
            <img src={information} alt="Information idea" />
          </div>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="information-block">
          <h2>Skin Cancer Symptoms</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            libero labore odio esse? Aliquam veritatis dignissimos accusamus
            nobis voluptatem, architecto error optio sit hic? Dolor totam modi
            officia amet expedita.
          </p>
          <LearnMore />
        </div>
      </Animated>
    </div>
  );
};

export default RightInformationCard;
