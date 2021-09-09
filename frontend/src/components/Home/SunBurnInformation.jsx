import React from "react";
import { Container, Row } from "react-bootstrap";

const SunBurnInformation = () => {
  return (
    <section className="block">
      <Container>
        <Row>
          <h2>What is sunscreen?</h2>
          <p className="white-text home-information-font">
            Sunscreen is the product which applied to the to prevent some of the
            suns ultraviolet to help users against sunburn and skin cancer.
          </p>
        </Row>
        <Row>
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
        </Row>
      </Container>
    </section>
  );
};

export default SunBurnInformation;
