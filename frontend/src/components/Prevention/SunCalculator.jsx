import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
// import Calculator from "./Calculator";
import CalculatedInformation from "./CalculatedInformation";
import { useSelector } from "react-redux";
import getSPFByUvi from "../../services/getSPFByUvi";
import getClothing from "../../services/getClothing";

const SunCalculator = () => {
  const location = useSelector((state) => state.location);
  const [spfLevel, setSpfLevel] = useState(0);
  const [clothing, setClothing] = useState([]);
  const [showInformation, setShowInformation] = useState(false);

  const [skinType] = useState([
    "Very Pale Skin",
    "Fair Skin",
    "Medium Skin",
    "Light Brown skin",
    "Dark Brown Skin",
    "Black Skin",
  ]);

  let valueOfSkinTypeSelected = "";

  const skinTypeMap = skinType.map((type) => type);

  const handleSkinTypeChange = (e) => {
    valueOfSkinTypeSelected = skinType[e.target.value];
    setSpfLevel(getSPFByUvi(valueOfSkinTypeSelected, location.uvi));
    setClothing(getClothing(3));
    setShowInformation(true);
  };

  return (
    <div className="block">
      <Container>
        <div className="sun-calculator-container">
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
              onChange={(e) => handleSkinTypeChange(e)}
              className="select-selected"
            >
              {skinTypeMap.map((type, id) => {
                return (
                  <option key={id} value={id}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          {showInformation ? (
            <CalculatedInformation spfLevel={spfLevel} clothing={clothing} />
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
};

export default SunCalculator;
