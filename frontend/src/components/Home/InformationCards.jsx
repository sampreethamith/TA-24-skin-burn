import React from "react";
import { Container } from "react-bootstrap";
import RightInformationCard from "../Common/RightInformationCard";
import LeftInformationCard from "../Common/LeftInformationCard";
import sunScreenCap from "../../images/sunscreenCap.jpg";

const InformationCards = () => {
  const rightCardData = {
    header: "",
    description:
      "Skin cancer and ultraviolet radiation are inextricably linked. Do you know the specific correlation between these? ",
    imgP: sunScreenCap,
  };
  const leftCardData = {
    header: "",
    description:
      "Skin cancer and ultraviolet radiation are inextricably linked. Do you know the specific correlation between these? ",
    imgP: sunScreenCap,
  };

  return (
    <Container>
      <div className="block">
        <RightInformationCard
          data={rightCardData}
          learnmoreroute="/skincancer/skincancer-information"
        />
      </div>
      <div className="block">
        <LeftInformationCard
          data={leftCardData}
          learnmoreroute="/skincancer/skincancer-information"
        />
      </div>
    </Container>
  );
};

export default InformationCards;
