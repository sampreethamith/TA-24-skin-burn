import React from "react";
import "../Css/LeftRightInformationStep.css";
import { Container } from "react-bootstrap";
import walkingDude from "../Images/walkingDude.svg";

const LeftInformationStep = () => {
  return (
    <>
      <section className="content-contianer">
        <h3>3rd Step: Play in the Shade</h3>
        <div className="content-text-left">
          <div>
            <h4 className="primary-text">
              Seek Shade between, <strong>10 AM and 4 PM</strong>
            </h4>
            <p className="white-text">
              Walk on the shady side of the street, sit under an awning or
              sun-protective umbrella, duck onto the covered porch at a pool
              party or even under a tree.
            </p>
            <h6 className="primary-text">
              <strong>The pitfall:</strong>
            </h6>
            <p className="white-text">
              Shade isn’t a perfect shield. Some UV rays can still reach your
              skin. They can pass through leaves and branches, hit your skin
              from the side and reflect off water, sand, glass and concrete.
            </p>
          </div>
          <div className="vertical-line"></div>
          <div className="content-image">
            <img
              src={walkingDude}
              alt="3 sunscreen lotions"
              className="image-custom"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftInformationStep;
