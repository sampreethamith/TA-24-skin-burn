import React from "react";
import { Container } from "react-bootstrap";
import CardWithCounter from "../Common/CardWithCounter";
import { Animated } from "react-animated-css";

const DataInformatiom = ({ deathCount, survivalRate, diagnosedCount }) => {
  return (
    <section className="block">
      <Container>
        <Animated
          animationIn="bounceIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="data-information">
            <CardWithCounter
              data={diagnosedCount}
              body="Diagnosed with skin cancer"
            />
            <CardWithCounter
              data={survivalRate}
              body="Melanoma survival rate"
            />
            <CardWithCounter data={deathCount} body="Deaths due to sunburn" />
          </div>
        </Animated>
      </Container>
    </section>
  );
};

export default DataInformatiom;
