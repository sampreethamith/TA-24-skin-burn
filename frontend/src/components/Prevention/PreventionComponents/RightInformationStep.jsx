import React from "react";
import "../Css/LeftRightInformationStep.css";
import { Container } from "react-bootstrap";
import sunscreen from "../Images/sunscreen.svg";

const RightInformationStep = ({ spf }) => {
  return (
    <>
      <section className="content-contianer">
        <h3>2nd Step: Choose right SunScreen</h3>
        <div className="content-text">
          <div className="content-image">
            <img
              src={sunscreen}
              alt="3 sunscreen lotions"
              className="image-custom"
            />
          </div>
          <div className="vertical-line"></div>
          <div>
            <h4 className="primary-text">
              Look for, <strong>SPF Level {spf}</strong>
            </h4>
            <p className="white-text">
              SPF stands for sun protection factor, The number tells you how
              long the sun’s UVB rays would take to redden your skin when using
              a particular sunscreen compared with the amount of time without
              sunscreen.
            </p>
            <h5 className="primary-text">Also look for labels,</h5>
            <h6>
              <strong>Broad spectrum</strong>
            </h6>
            <p className="white-text">
              The words “broad spectrum” on a label indicate that the sunscreen
              contains ingredients that effectively protect against UVA rays as
              well as UVB.
            </p>
            <h6>
              <strong>Water resistance</strong>
            </h6>
            <p className="white-text">
              Sun screen are not waterproof! but can be water resistance. you
              can burn even when you’re in the water, so reapplying is key!
            </p>
            <h6 className="primary-text">
              <strong>The pitfall:</strong>
            </h6>
            <p className="white-text">
              Most people don’t apply sunscreen exactly as directed. They may
              not apply it liberally enough, might miss spots and may forget to
              reapply regularly. Slather it on!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightInformationStep;
