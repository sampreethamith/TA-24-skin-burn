import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
// import Calculator from "./Calculator";
import CalculatedInformation from "./CalculatedInformation";
import { useSelector, useDispatch } from "react-redux";
import getSPFByUvi from "../../services/getSPFByUvi";
import getClothing from "../../services/getClothing";
import { getLocationUVName } from "../../services/getLocationUVName";
import { locationUVName } from "../../actions/locationAction";
import Iframe from "./IframeSunSmart";
import skinTypeInformation from "../../images/skinTypeInformation.jpg";
import { toast } from "react-toastify";

const SunCalculator = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const [spfLevel, setSpfLevel] = useState(0);
  const [clothing, setClothing] = useState([]);
  const [showInformation, setShowInformation] = useState(false);
  const [locationNotAvailable, setLocationNotAvailable] = useState(false);

  useEffect(() => {
    if (location.isLocationEnabled && !location.locationName) {
      const getLocationUVNameDetails = async (latitude, longitude) => {
        const { data } = await getLocationUVName(latitude, longitude);
        const { properties } = data[0];

        properties.uvi = Math.round(properties.uvi * 10) / 10;

        dispatch(locationUVName(properties.uvi, properties.name.toUpperCase()));
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
  const [skinTypeSelected, setSkinTypeSelected] = useState("Very Pale Skin");

  const SkinTypeMap = skinType.map((type) => type);

  const handleOnClick = () => {
    if (!location.isLocationEnabled) {
      if (!locationNotAvailable) {
        toast.error("Location Not Turned on");
        setTimeout(() => {
          setLocationNotAvailable(false);
        }, 10000);
      }
      setLocationNotAvailable(true);

      return;
    }

    setSpfLevel(getSPFByUvi(skinTypeSelected, location.uvi));
    setClothing(getClothing(3));
    if (location.isLocationEnabled) setShowInformation(true);
  };

  const handleSkinTypeChange = (e) => {
    setSkinTypeSelected(skinType[e.target.value]);
  };

  return (
    <div className="block">
      <Container>
        <h1 className="text-center">Going Out?</h1>
        <Row>
          <Col>
            <Iframe />
            <br />
            <p className="white-text">Select Skin Color</p>
            <select
              onChange={(e) => handleSkinTypeChange(e)}
              className="select-selected"
            >
              {SkinTypeMap.map((type, id) => {
                return (
                  <option key={id} value={id}>
                    {type}
                  </option>
                );
              })}
            </select>
            <div className="text-center sun-calculator-button">
              <Button variant="warning" onClick={handleOnClick}>
                Show Suggestions
              </Button>
            </div>
          </Col>
          <Col>
            {" "}
            {showInformation ? (
              <CalculatedInformation spfLevel={spfLevel} clothing={clothing} />
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          {showInformation && (
            <img src={skinTypeInformation} alt="skin type information" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SunCalculator;

{
  /* <div className="primary-card primary-card-large">
  <p>Current UV Index Level</p>
  <p>{location.isLocationEnabled ? location.uvi : "Location Not Available"}</p>
  <p>Your area UV Light</p>
  <p>UVA</p>
  <p>{location.locationName}</p>
</div>; */
}

// <div className="sun-calculator-container ">
//   <div className="uv-index-skin-type-container">
//     <Iframe />
//     <br />
//     <p className="white-text">Select Skin Color</p>
//     <select
//       onChange={(e) => handleSkinTypeChange(e)}
//       className="select-selected"
//     >
//       {SkinTypeMap.map((type, id) => {
//         return (
//           <option key={id} value={id}>
//             {type}
//           </option>
//         );
//       })}
//     </select>
//     <br />
//     <Button
//       variant="warning"
//       onClick={handleOnClick}
//       className="sun-calculator-button"
//     >
//       Show Suggestions
//     </Button>
//   </div>
// </div>;
