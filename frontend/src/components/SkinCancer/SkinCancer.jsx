import React from "react";
import { Container } from "react-bootstrap";
import LeftInformationCard from "../Common/LeftInformationCard";
import RightInformationCard from "../Common/RightInformationCard";
import skin from "./../../images/skin-cancer-symptoms.jpeg";
import information from "./../../images/skincancer_info.jpeg";

const SkinCancer = () => {
  const left_cardData = {
    header: `Skin Cancer Symptoms`,
    description: `Know the symptoms of skin cancer, have a check on yourself. Avoid early cancer to protect yourself. Remind your friends and your family.`,
    imgP: skin,
  };
  const right_cardData = {
    header: `Skin Cancer Information`,
    description: `Get some basic theory of skin cancer. Know what will be caused by skin cancer and how people deal with skin cancer. Also, take action if you get skin cancer.`,
    imgP: information,
  };
  return (
    <Container>
      <div className="block">
        <LeftInformationCard
          data={left_cardData}
          learnmoreroute="/skincancer/skincancer-symptom"
        />
      </div>
      <div className="block">
        <RightInformationCard
          data={right_cardData}
          learnmoreroute="/skincancer/skincancer-information"
        />
      </div>
    </Container>
  );
};

export default SkinCancer;
