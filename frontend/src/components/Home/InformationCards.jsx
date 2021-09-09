import React from "react";
import { Container } from "react-bootstrap";
import RightInformationCard from "../Common/RightInformationCard";
import LeftInformationCard from "../Common/LeftInformationCard";
import sunScreenCap from "../../images/sunscreenCap.jpg";
import skincancerinfo from "../../images/skincancerinfo.png";

const InformationCards = () => {
  const rightCardData = {
    header: "",
    description:
      "Are you aware that sunscreen is crucial to your skincare routine? In the absence of sunscreen, you are exposing your face to unnecessary sun damage.",
    imgP: sunScreenCap,
  };
  const leftCardData = {
    header: "",
    description:
      "Skin cancer and ultraviolet radiation are inextricably linked. Do you know the specific correlation between these?",
    imgP: skincancerinfo,
  };

  return (
    <Container>
      <div className="block">
        <RightInformationCard
          data={rightCardData}
          learnmoreroute="/home/information"
        />
      </div>
      <div className="block">
        <LeftInformationCard
          data={leftCardData}
          learnmoreroute="/skincancer"
        />
      </div>
    </Container>
  );
};

export default InformationCards;
