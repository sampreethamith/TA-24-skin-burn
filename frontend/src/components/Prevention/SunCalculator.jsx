import React from "react";
import { Container } from "react-bootstrap";
import Calculator from "./Calculator";
import CalculatedInformation from "./CalculatedInformation";

const SunCalculator = () => {
  return (
    <div className="block">
      <Container>
        <div className="sun-calculator-container">
          <Calculator />
          <CalculatedInformation />
        </div>
      </Container>
    </div>
  );
};

export default SunCalculator;
