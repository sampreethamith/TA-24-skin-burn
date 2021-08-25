import React from "react";
// import construction from "./../../images/underconstruction.png";
import { Container } from "react-bootstrap";
import LeftInformationCard from "../Common/LeftInformationCard";
import RightInformationCard from "../Common/RightInformationCard";
import SunCalculator from "../SunCalculator/SunCalculator";
import sunscreen_level from "./../../images/sunscreen_level.png";
import cloths_to_Wear from "./../../images/cloths_to_wear.png";

const Prevention = () => {
  const left_cardData = {
    header: `Sunscreen level to apply`,
    description: `During sun protection times when the UV is 3 and above, correctly apply SPF30 (or higher) broad-spectrum, water-resistant sunscreen to any skin not covered by clothing.
    Sun protection is more than just sunscreen. For the best protection when the UV is 3 and above, use all five forms of protection – clothing, sunscreen, a broad-brim hat, shade and sunglasses.`,
    imgP: sunscreen_level
  };
  const right_cardData = {
    header: `Types of cloths to wear`,
    description: `Clothing absorbs or blocks harmful UV radiation and is one of the simplest ways to protect your skin. However, choosing the right clothing for maximum protection is important.`,
    imgP: cloths_to_Wear
  };
  const sunCalcData = {
    header: `Going out?`,
    QueOne: `Which Sunscreen you should apply?`,
    QueTwo: `What clothing are better to wear?`
  }
  return (
    <Container>
      {/* <LeftInformationCard data={left_cardData} />
      <RightInformationCard data={right_cardData}/> */}
      <SunCalculator data={sunCalcData}/>
    </Container>
  );
};

export default Prevention;
