import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Animated } from "react-animated-css";
import LearnMore from "../Common/LearnMore";
import { useSelector } from "react-redux";
import DataInformatiom from "./DataInformatiom";

const Hero = ({
  locationName,
  uvi,
  deathCount,
  survivalRate,
  diagnosedCount,
}) => {
  const state = useSelector((state) => state.location);
  const [loader, setLoader] = useState(false);

  const loadTimer = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  return (
    <React.Fragment>
      <section className="block img-hero-background hero-relative">
        <div className="hero-current-uv-radiation-box">
          {!loader ? (
            <div>
              <p className="primary-text hero-current-uv-radiation-font">
                {state.isLocationEnabled ? "Current UV" : "Location"}
              </p>
              <p className="primary-text hero-inline hero-current-uv-radiation-number-font">
                {state.isLocationEnabled ? state.uvi : "Not Available"}
              </p>
              <p className="primary-text hero-current-uv-radiation-font">
                {state.isLocationEnabled ? state.locationName : ""}
              </p>
              <p
                className="primary-text text-center hero-current-uv-radiation-current-time"
                onClick={loadTimer}
              >
                {state.isLocationEnabled
                  ? `Last Updated: ${new Date().getHours()}:${new Date().getMinutes()}`
                  : ""}
              </p>
            </div>
          ) : (
            <Spinner
              animation="border"
              role="status"
              style={{
                width: "50px",
                height: "50px",
                display: "block",
              }}
              variant="warning"
            ></Spinner>
          )}
        </div>
        ;
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
                    "Australia has reported the highest number of skin cancers
                    from sunburn, but it could be avoided."
                  </h1>
                  {/* <LearnMore
                    position={"card-learn-more-end-position"}
                    path="/home/information"
                  /> */}
                </div>
              </Animated>
            </Col>
            <Col></Col>
          </Row>
          <Row></Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Hero;
