import React from "react";
import { Container } from "react-bootstrap";
import LeftInformationCard from "../Common/LeftInformationCard";
import RightInformationCard from "../Common/RightInformationCard";
import sunscreen_level from "./../../images/sunscreen_level.png";
import uvAssist from "./../../images/uvAssistImage.jpg";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";

const Prevention = () => {
  const left_cardData = {
    header: `Sunscreen level to apply`,
    description: `During sun protection times when the UV is 3 and above, correctly apply SPF30 (or higher) broad-spectrum, water-resistant sunscreen to any skin not covered by clothing.
    Sun protection is more than just sunscreen. For the best protection when the UV is 3 and above, use all five forms of protection – clothing, sunscreen, a broad-brim hat, shade and sunglasses.`,
    imgP: sunscreen_level,
  };
  const right_cardData = {
    header: `Use Assistance Tool`,
    description: `Get hourly information on UV index to pre-plan your trip.
This tool provides you with the UV levels and sun protection times for your location.To avoid maximum UV radiation on any day.It also gives information about sun laps.`,
    imgP: uvAssist,
  };

  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/prevention",
      title: "Prevention",
      active: "active",
    },
  ];
  // const sunCalcData = {
  //   header: `Going out?`,
  //   QueOne: `Which Sunscreen you should apply?`,
  //   QueTwo: `What clothing are better to wear?`,
  // };
  return (
    <Container>
      <div className="block">
        <BreadCrumbComponent navigation={navigation} />
        <LeftInformationCard
          data={left_cardData}
          learnmoreroute="/prevention/skin-burn-calculator"
        />
      </div>
      <div className="block">
        <RightInformationCard
          data={right_cardData}
          learnmoreroute="/uv-assist"
        />
      </div>
    </Container>
  );
};

export default Prevention;
