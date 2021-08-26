import React from "react";
import { Container } from "react-bootstrap";
import LeftInformationCard from "../Common/LeftInformationCard";
import RightInformationCard from "../Common/RightInformationCard";
import skin from "./../../images/skin-cancer-symptoms.jpeg";
import information from "./../../images/information-picture.jpeg";

const SkinCancer = () => {
  const left_cardData = {
    header: `Skin Cancer Symptoms`,
    description: `During sun protection times when the UV is 3 and above, correctly apply SPF30 (or higher) broad-spectrum, water-resistant sunscreen to any skin not covered by clothing.
    Sun protection is more than just sunscreen. For the best protection when the UV is 3 and above, use all five forms of protection – clothing, sunscreen, a broad-brim hat, shade and sunglasses.`,
    imgP: skin,
  };
  const right_cardData = {
    header: `Skin Cancer Information`,
    description: `Clothing absorbs or blocks harmful UV radiation and is one of the simplest ways to protect your skin. However, choosing the right clothing for maximum protection is important.`,
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
