import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import LearnMore from "../Common/LearnMore";
import { useSelector } from "react-redux";

const Hero = () => {
  const state = useSelector((state) => state.location);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <React.Fragment>
      <section className="block img-hero-background hero-relative">
        <div className="hero-current-uv-radiation-box">
          <div className="text-center">
            <p className="primary-text hero-inline hero-current-uv-radiation-font">
              UV
            </p>
            <p className="primary-text hero-inline hero-current-uv-radiation-number-font">
              10
            </p>
          </div>
          <p className="primary-text text-center">Melbourne</p>
        </div>
        <Container>
          <Row>
            <Col>
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="card-title-body-learn-more hero-card">
                  <h1 className="primary-text">
                    One in ten adults aged 20-35 report sunburnt in the Summer.
                  </h1>
                  <LearnMore
                    position={"card-learn-more-end-position"}
                    path="/home/information"
                  />
                </div>
              </Animated>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Hero;
