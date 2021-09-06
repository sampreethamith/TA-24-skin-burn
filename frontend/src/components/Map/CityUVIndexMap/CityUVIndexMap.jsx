import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CityName from "./CityName";

const CityUVIndexMap = () => {
  return (
    <section className="block">
      <Container>
        <h2>Enter Multiple City Locations</h2>
        <CityName />
      </Container>
    </section>
  );
};

export default CityUVIndexMap;

//   const [numberOfCity, setNumberOfCity] = useState([
//     { cityValue: 1, cityName: "" },
//   ]);

// {
//   numberOfCity.map((cityObject, index) => {
//     const { cityValue, cityName } = cityObject;
//     return <CityName value={cityValue} name={cityName} />;
//   });
// }
