import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import sunScreenInformation from "../../images/sunscreenIcon.svg";
import spfSunscreenIcon from "../../images/spfSunscreenIcon.svg";
import uvRayInformation from "../../images/uvRaysInformation.jpg";

const SunBurnInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="block">
      <Container>
        <Row>
          <Col>
            <h2>What is sunscreen?</h2>
            <p className="white-text home-information-font">
              Sunscreen is a product that is applied to the skin to prevent the
              sun’s ultraviolet rays from interacting for long hours with a body
              that causes skin cancer. It is very important to choose the right
              screen lotion based on various factors like your skin type, UV
              radiation of the area, UV type.
            </p>
            <br />
            <h3>About UV Rays</h3>
            <p className="white-text home-information-font">
              There are two kinds of UV rays that can harm the skin:
              <ul>
                <li>
                  <p>UVA plays an important role in premature skin aging.</p>
                </li>
                <li>
                  <p>UVB rays are responsible for the cause of sunburn.</p>
                </li>
              </ul>
            </p>
            <p className="white-text home-information-font">
              When buying sunscreen, choose broad-spectrum sunscreen which could
              prevent UVA and UVB rays. Also, the sun protection factor (SPF)
              should not be less than 15.
            </p>
          </Col>
          <Col>
            <img
              src={sunScreenInformation}
              alt="Sun screen"
              className="home-information-icon-right"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <img
              src={spfSunscreenIcon}
              alt="SPF sunscreen location Icon"
              className="home-information-icon-left"
            />
          </Col>
          <Col>
            <div className="text-align-right">
              <h2>Sunscreen Level</h2>
              <p className="white-text home-information-font">SPF level</p>
              <p className="white-text home-information-font">
                SPF = sunburn radiation dose with sunscreen / sunburn radiation
                dose without sunscreen
              </p>
              <p className="white-text home-information-font">
                SPF is the level of how well the sunscreen could prevent the
                sun. The SPF number could tell you how long the sun’s UV
                radiation will take to redden your skin
              </p>
              <p className="white-text home-information-font">
                SPF 15 prevents around 93% of all UVB rays. SPF 30 prevents
                around 97%. SPF 50 is an almost complete UVB block at 98%
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <h2>What to look for when buying sunscreen?</h2>
          <br />
          <p className="white-text home-information-font">
            Read clearly about the product labels. Look for a waterproof product
            if you are going to swim or sweat. A non-stinging product for your
            face is important. Try another sunscreen if your skin has a bad
            reflection of the one that you currently have. Try water-based
            sunscreen if you have oily skin or are prone to acne.
          </p>
        </Row>
        <Row>
          <Col sm={6}>
            <img src={uvRayInformation} alt="UV rays Information Card" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SunBurnInformation;
