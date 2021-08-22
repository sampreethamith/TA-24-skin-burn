import React from "react";
import { Container } from "react-bootstrap";
import CardWithCounter from "../Common/CardWithCounter";
import { Animated } from "react-animated-css";

const DataInformatiom = () => {
  return (
    <section className="block block--light">
      <Container>
        <Animated
          animationIn="bounceIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="data-information">
            <CardWithCounter data="66.67%" body="Diagnosed with skin cancer" />
            <CardWithCounter data="2072" body="Deaths due to sunburn" />
            <CardWithCounter data="92%" body="Melanoma survial rate" />
          </div>
        </Animated>
      </Container>
    </section>
  );
};

export default DataInformatiom;
