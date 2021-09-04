import React, { useState } from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const UVIndexMap = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: -37.0201,
    longitude: 144.9646,
    zoom: 4.5,
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        transitionDuration={1000}
        transitionInterpolator={new FlyToInterpolator()}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      />
    </>
  );
};

export default UVIndexMap;
