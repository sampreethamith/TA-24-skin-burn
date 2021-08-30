import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// import Calculator from "./Calculator";
import CalculatedInformation from "./CalculatedInformation";
import { useSelector, useDispatch } from "react-redux";
import getSPFByUvi from "../../services/getSPFByUvi";
import getClothing from "../../services/getClothing";
import { getLocationUVName } from "../../services/getLocationUVName";
import { locationUVName } from "../../actions/locationAction";

const SunCalculator = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const [spfLevel, setSpfLevel] = useState(0);
  const [clothing, setClothing] = useState([]);
  const [showInformation, setShowInformation] = useState(false);

  useEffect(() => {
    if (location.isLocationEnabled && !location.locationName) {
      const getLocationUVNameDetails = async (latitude, longitude) => {
        const { data } = await getLocationUVName(latitude, longitude);
        data.uvi = Math.round(data.uvi * 10) / 10;
        dispatch(locationUVName(data.uvi, data.loc_name));
      };
      getLocationUVNameDetails(location.latitude, location.longitude);
    }

    // else if ()
  }, [dispatch, location]);

  const [skinType] = useState([
    "Very Pale Skin",
    "Fair Skin",
    "Medium Skin",
    "Light Brown skin",
    "Dark Brown Skin",
    "Black Skin",
  ]);
  const SkinTypeMap = skinType.map((type) => type);

  let valueOfSkinTypeSelected = "";

  const skinTypeMap = skinType.map((type) => type);

  const handleSkinTypeChange = (e) => {
    valueOfSkinTypeSelected = skinType[e.target.value];
    setSpfLevel(getSPFByUvi(valueOfSkinTypeSelected, location.uvi));
    setClothing(getClothing(3));
    if (location.isLocationEnabled) setShowInformation(true);
  };

  return (
    <div className="block">
      <Container>
        <div className="sun-calculator-container">
          <div className="uv-index-skin-type-container">
            <h1>Going Out?</h1>
            <div className="primary-card primary-card-large">
              <p>Current UV Index Level</p>
              <p>
                {location.isLocationEnabled
                  ? location.uvi
                  : "Location Not Available"}
              </p>
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
