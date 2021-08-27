import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Calculator = ({ skinType, onSkinTypeChange }) => {
  const location = useSelector((state) => state.location);

  // const skinType = skintype.map(type => type);

  return (
    <div className="uv-index-skin-type-container">
      <h1>Going Out?</h1>
      <div className="primary-card primary-card-large">
        <p>Current UV Index Level</p>
        <p>{location.uvi}</p>
        <p>Your area UV Light</p>
        <p>UVA</p>
        <p>{location.locationName}</p>
      </div>
      <select
        className="select-selected"
        onChange={onSkinTypeChange}
        value={skinType}
      >
        {skinType.map((type, id) => {
          <option key={id} value={id}>
            {type}
          </option>;
        })}
      </select>
      <Button variant="custom" className="primary-button sun-calculator-button">
        Show Result
      </Button>
    </div>
  );
};

export default Calculator;
