import React, { useState, useEffect, useCallback } from "react";
import ReactMapGL, { Source, Layer, FlyToInterpolator } from "react-map-gl";
import { Container, Spinner } from "react-bootstrap";
import { dataLayer } from "./map-style.js";
import { easeCubic } from "d3-ease";
import MapLegend from "./MapLegend";
import SearchBox from "./SearchBox";
import getStateGeoJson from "../../../services/getStateGeoJson";
import getCityGeoJson from "../../../services/getCityGeoJson";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const UVIndexMap = () => {
  const [data, setData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chips, setChips] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: -28.539960029117317,
    longitude: 133.1102061296636,
    zoom: 3,
    bearing: 0,
    pitch: 0,
    height: 500,
    width: "100",
  });
  const [error, setError] = useState(false);

  const onViewPortChange = (viewport) => {
    setViewport(viewport);
  };

  const onChipChange = (newChip) => {
    if (newChip.length > 5) {
      setError(true);
    } else {
      setError(false);
      setChips(newChip);
    }
  };

  const onCitySearchClick = async () => {
    if (chips.length < 1) return;
    setLoading(true);
    try {
      let { data } = await getCityGeoJson(chips);
      const {
        properties: { coord },
      } = data[0];
      console.log(data);
      setViewport({
        ...viewport,
        latitude: coord["lat"],
        longitude: coord["lon"],
        zoom: 10,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic,
      });
      console.log(viewport);
      data = { type: "FeatureCollection", features: data };
      setData(data);
      setLoading(false);
    } catch (error) {}
  };

  const errorOnClose = () => {
    setError(false);
  };

  useEffect(() => {
    const getStateGeoJsonDataUV = async () => {
      try {
        let { data } = await getStateGeoJson();
        data = { type: "FeatureCollection", features: data };
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getStateGeoJsonDataUV();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  useEffect(() => {
    // setTimeout(() => {
    //   console.clear();
    // }, 1000);
  }, []);

  const onResize = () => {
    setViewport({
      ...viewport,
      width: "100%",
      height: 500,
    });
  };

  const onHover = useCallback((event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;
    const hoveredFeature = features && features[0];
    setHoverInfo(
      hoveredFeature
        ? {
            feature: hoveredFeature,
            x: offsetX,
            y: offsetY,
          }
        : null
    );
  }, []);

  return (
    <section>
      <Container>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          onViewportChange={(viewport) => onViewPortChange(viewport)}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          interactiveLayerIds={["data"]}
          onHover={onHover}
        >
          <Source type="geojson" data={data}>
            <Layer {...dataLayer} />
          </Source>
          {hoverInfo && (
            <div
              className="map-tooltip"
              style={{ left: hoverInfo.x, top: hoverInfo.y }}
            >
              <div>State: {hoverInfo.feature.properties.name}</div>
              <div>UV Index: {hoverInfo.feature.properties.uvi}</div>
            </div>
          )}
          <MapLegend />
          <SearchBox
            chips={chips}
            onChange={onChipChange}
            error={error}
            errorOnclose={errorOnClose}
            onClick={onCitySearchClick}
          />
          {loading && (
            <Spinner
              animation="border"
              role="status"
              style={{
                width: "100px",
                height: "100px",
                display: "block",

                position: "absolute",
                top: "50%",
                left: "50%",
              }}
              variant="warning"
            ></Spinner>
          )}
        </ReactMapGL>
      </Container>
    </section>
  );
};

export default UVIndexMap;
