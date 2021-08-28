import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import LearnMore from "../Common/LearnMore";
import { useSelector } from "react-redux";

const Hero = ({ locationName, uvi }) => {
  const state = useSelector((state) => state.location);

  return (
    <React.Fragment>
      <section className="block img-hero-background hero-relative">
        <div className="hero-current-uv-radiation-box">
          <div className="text-center">
            <p className="primary-text hero-inline hero-current-uv-radiation-font">
              {state.isLocationEnabled ? "UV" : ""}
            </p>
            <p className="primary-text hero-inline hero-current-uv-radiation-number-font">
              {state.isLocationEnabled ? uvi : ""}
            </p>
          </div>
          <p className="primary-text text-center">
            {state.isLocationEnabled ? locationName : "Location Not Available"}
          </p>
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
                    Australia has reported the highest number of skin cancers
                    from sunburn, but it could be avoided.
                  </h1>
                  <LearnMore
                    position={"card-learn-more-end-position"}
                    path=""
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
