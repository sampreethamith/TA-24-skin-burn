import React from "react";
import { Container } from "react-bootstrap";
import CardWithBorderPrimary from "../Common/CardWithBorderPrimary";
import australiaMap from "../../images/australiamap.svg";
import sunScreen from "../../images/sunScreenLotion.svg";
import { Animated } from "react-animated-css";

const RouteCards = () => {
  const cardInformation = [
    {
      title: "Planning a trip?",
      information: "Find high UV areas and plan your trip",
      imageUrl: australiaMap,
      altName: "Australia Map",
      route: "/map",
    },
    {
      title: "Going Out?",
      information: "Find right level of sunscreen and clothings to wear",
      imageUrl: sunScreen,
      route: "/prevention/skin-burn-calculator",
    },
  ];

  return (
    <section className="block">
      <Container>
        <div className="route-card">
          <Animated
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            isVisible={true}
          >
            <CardWithBorderPrimary data={cardInformation[0]} />
          </Animated>
          <Animated
            animationIn="slideInRight"
            animationOut="slideOutRight"
            isVisible={true}
          >
            <CardWithBorderPrimary data={cardInformation[1]} />
          </Animated>
        </div>
      </Container>
    </section>
  );
};

export default RouteCards;
