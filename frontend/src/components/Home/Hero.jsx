import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Animated } from "react-animated-css";
import LearnMore from "../Common/LearnMore";

const Hero = () => {
  return (
    <section className="block img-hero-background">
      <Container>
        <Row>
          <Col>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className="hero-card">
                <h1 className="primary-text text-opacity">
                  One in ten adults aged 20-35 report sunburnt in the Summer.
                </h1>
                <LearnMore position={"learn-more-hero-position"} />
              </div>
            </Animated>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
