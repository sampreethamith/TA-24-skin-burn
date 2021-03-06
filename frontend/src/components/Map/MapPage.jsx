import React, { useState, useEffect } from "react";
import UVIndexMap from "./StateUVIndexMap/UVIndexMap";
import { Container } from "react-bootstrap";
import Toggle from "react-toggle";
import "./Toggle.css";
import MapScroll from "./MapScroll/MapScroll";

const MapPage = () => {
  const [searchMap, setSearchMap] = useState(false);

  const handleToggleChange = () => {
    setSearchMap(!searchMap);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="toggle-position">
        <h4>{searchMap ? "UV Info" : "UV Map"}</h4>
        <Toggle
          defaultChecked={searchMap}
          icons={false}
          className="map-toggle"
          onChange={handleToggleChange}
        />
      </div>
      {searchMap && <MapScroll />}
      {!searchMap && (
        <div className="map-position">
          {/* <Container>
            <h1>Location Based UV Index</h1>
          </Container> */}
          <UVIndexMap data-aos="zoom-in-up" data-aos-duration="1000" />
        </div>
      )}
    </div>
  );
};

export default MapPage;
