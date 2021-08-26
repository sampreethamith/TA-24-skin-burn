import React from "react";
import { Button } from "react-bootstrap";

const Calculator = () => {
  return (
    <div className="uv-index-skin-type-container">
      <h1>Going Out?</h1>
      <div className="primary-card primary-card-large">
        <p>Current UV Index Level</p>
        <p>4.5</p>
        <p>Your area UV Light</p>
        <p>UVA</p>
        <p>St. Kilda</p>
      </div>
      <select className="select-selected">
        <option value="0">Select Skin Color</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </select>
      <Button variant="custom" className="primary-button sun-calculator-button">
        Show Result
      </Button>
    </div>
  );
};

export default Calculator;
