import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Calculator = () => {
  const location = useSelector((state) => state.location);
  // const skinType = skintype.map(type => type);
  const [skinType, setSkinType] = useState([
    "Very Pale Skin",
    "Fair Skin",
    "Medium Skin",
    "Light Brown skin",
    "Dark Brown Skin",
    "Black Skin",
  ]);
  const SkinType = skinType.map(type => type);

  const handleSkinType = (e) => {
    console.log(skinType[e.target.value]);
  }

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
        onChange={e => handleSkinType(e)} 
  //  onChange={e => console.log(e.target.value)}
    
      >
        {/* <option value="df" disabled hidden>Select Skin Color</option>
        <option value="Very Pale Skin">Very Pale Skin</option>
        <option value="Fair Skin">Fair Skin</option>
        <option value="Medium Skin">Medium Skin</option>
        <option value="Light Brown Skin">Light Brown Skin</option>
        <option value="Black Skin">Black Skin</option> */}
        {SkinType.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>);
        })}
      </select>
      <Button variant="custom" className="primary-button sun-calculator-button">
        Show Result
      </Button>
    </div>
  );
};

export default Calculator;
