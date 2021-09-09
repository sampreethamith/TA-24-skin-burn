import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sunScreenInformation from "../../images/sunscreenIcon.svg";
import spfSunscreenIcon from "../../images/spfSunscreenIcon.svg";
import uvRayInformation from "../../images/uvRaysInformation.jpg";

const SunBurnInformation = () => {
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

{
  /* <Row>
          <h2>Sunscreen Level</h2>
          <h3>UV rays</h3>
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
            When buying sunscreen, choose broad-spectrum sunscreen which could
            prevent UVA and UVB rays. Also, the sun protection factor (SPF)
            should not be less than 15.
          </p>
        </Row>
        <Row>
          <h3>SPF Level</h3>
          <p className="white-text home-information-font">
            {" "}
            SPF is the level of how well the sunscreen could prevent the sun.
            The SPF number could tell you how long the sun’s UV radiation will
            take to redden your skin. In the ideal circumstance, a person with
            SPF 30 sunscreen will need 30 times longer to burn than without
            using any sunscreen. The calculation of it is:
          </p>
          <p className="white-text home-information-font">
            {" "}
            SPF = sunburn radiation dose with sunscreen / sunburn radiation dose
            without sunscreen
          </p>
          <p className="white-text home-information-font">
            {" "}
            Here is the description of each SPF level:
            <ul>
              <li>
                <p>SPF 15 prevents around 93% of all UVB rays.</p>
              </li>
              <li>
                <p>SPF 30 prevents around 97%.</p>
              </li>
              <li>
                <p>SPF 50 is an almost complete UVB block at 98%.</p>
              </li>
            </ul>
            People who have a history or high potential risk of skin cancer,
            genetic diseases like albinism or xeroderma pigmentosum should apply
            higher SPF products. SPF 50 still could not meet their requirement.
          </p>
        </Row>
        <Row>
          <h2>What to look for when buying sunscreen?</h2>
          <p className="white-text home-information-font">
            {" "}
            Read clearly about the product labels. Look for a waterproof product
            if you are going to swim or sweat. A non-stinging product for your
            face is important. Try another sunscreen if your skin has a bad
            reflection of the one that you currently have. For example, buy a
            product that does not include para-aminobenzoic acid (PABA) if you
            are sensitive to this ingredient. Try water-based sunscreen if you
            have oily skin or are prone to acne.
          </p>
        </Row>
        <Row>
          <h2>Tips for using sunscreen</h2>
          <h3>Time/When</h3>
          <p className="white-text home-information-font">
            <ul>
              <li>
                <p>
                  Apply sunscreen 15-30 mintues before going outside. It will
                  let sunscreen better protect yourself.
                </p>
              </li>
              <li>
                <p>
                  Reapply sunscreen every 2 hours or immediately after you
                  finish swimming or sweating (strenuous exercise). There has no
                  evidence to show that any sunscreen could offer entire day
                  protection or be completely waterproof.{" "}
                </p>
              </li>
            </ul>
          </p>
          <h3>How?</h3>
          <p className="white-text home-information-font">
            <ul>
              <li>
                <p>
                  For traditional sunscreen, shake well before using the
                  sunscreen to ensure the particles which clumped up within the
                  container could be mixed up. Spray-on sunscreen would be a
                  good choice as a new type of sunscreen.
                </p>
              </li>
              <li>
                <p>
                  Apply enough sunscreen. Make sure the sunscreen is applied
                  thickly. Traditionally, for adult needs an ounce to fully
                  cover the body.
                </p>
              </li>
              <li>
                <p>
                  Apply sunscreen to all skin which is exposed to the sunshine.
                  Not only face and hands, but also neck, ears, feet and legs.
                </p>
              </li>
              <li>
                <p>Watch out when applying sunscreen around the eyes.</p>
              </li>
              <li>
                <p>
                  Pay attention to the expiration date of the product. The
                  ingredients of the sunscreen might deteriorate over time.
                </p>
              </li>
            </ul>
          </p>
        </Row> */
}
