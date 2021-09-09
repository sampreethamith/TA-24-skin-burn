import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import LeftInformationCard from "../Common/LeftInformationCard";
import RightInformationCard from "../Common/RightInformationCard";
import malenoma from "./../../images/melonoma.jpg";
import uvcancer from "./../../images/skin_cancer_help.png";

const SkinCancerInformation = () => {
  const left_cardData = {
    header: `UV and Skin cancer`,
    description: `Ultraviolet radiation is part of the natural energy produced by the sun. Your eyes cannot see ultraviolet light, but your skin can feel it. Most skin cancers are the result of prolonged exposure to ultraviolet light.`,
    imgP: uvcancer,
  };
  const right_cardData = {
    header: `Biggest type of Skin cancer`,
    description: `Whether and how skin cancers spread depends on the type of skin cancer. 
    Melanomas are the most likely type of skin cancer to spread and metastasise. It can spread to any part of the body, commonly spreads to are the lungs, liver, bones, brain, abdomen and lymph nodes.
    Melanomas are darkly pigmented, discolored areas or bumps with an asymmetrical shape, irregular borders, or dark black or multicolored surface. While the majority of melanomas do not arise from moles, new or changing moles in adulthood should be examined.`,
    imgP: malenoma,
  };
  return (
    <Container>
      <div className="block">
        <RightInformationCard
          data={right_cardData}
        />
      </div>
      <div className="block">
        <LeftInformationCard
          data={left_cardData}
        />
      </div>
    </Container>
  );
};

export default SkinCancerInformation;
