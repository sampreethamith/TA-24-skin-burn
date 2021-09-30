import React from "react";
import { Container } from "react-bootstrap";
import CardWithBorderPrimary from "../../Common/CardWithBorderPrimary";

const RouteCards = () => {
  const cardInformation = [
    {
      title: "Planning a trip?",
      information: "Find high UV areas and plan your trip",
      altName: "Australia Map",
      route: "/map",
    },
    {
      title: "Going Out?",
      information: "Find right level of sunscreen and clothings to wear",
      route: "/prevention/skin-burn-calculator",
    },
  ];

  return (
    <section className="block">
      <Container>
        <div data-aos="zoom-in-up" className="route-card">
          <CardWithBorderPrimary data={cardInformation[0]} />
          <CardWithBorderPrimary data={cardInformation[1]} />
        </div>
      </Container>
    </section>
  );
};

export default RouteCards;
