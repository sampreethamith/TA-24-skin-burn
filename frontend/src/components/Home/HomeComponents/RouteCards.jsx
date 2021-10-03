import React from "react";
import { Container } from "react-bootstrap";
import CardWithBorderPrimary from "../../Common/CardWithBorderPrimary";
import quiz_icon from "../../../images/home/quiz_icon.svg";
import aus_icon from "../../../images/home/aus_icon.svg";
import checklist_icon from "../../../images/home/checklist_icon.svg";

const RouteCards = () => {
  const cardInformation = [
    {
      title: "Take a Quiz",
      information: "Find more about UV index, Sunscreen and Skin Cancer",
      image: quiz_icon,
      altName: "Buld with a idea representing quiz",
      route: "/information/quiz",
    },
    {
      title: "Find high UV areas",
      information: "Search for citties or states with current UV index",
      image: aus_icon,
      altName: "Australia Map",
      route: "/prevention/map",
    },
    {
      title: "Going Out Checklist",
      information: "Make sure you take enough precaution before going out",
      image: checklist_icon,
      altName: "Check list",
      route: "/prevention/goingOut",
    },
  ];

  return (
    <section className="block">
      <Container>
        <div data-aos="zoom-in-up" className="route-card">
          <CardWithBorderPrimary data={cardInformation[0]} />
          <CardWithBorderPrimary data={cardInformation[1]} />
          <CardWithBorderPrimary data={cardInformation[2]} />
        </div>
      </Container>
    </section>
  );
};

export default RouteCards;
