import React, { useState, useEffect, useCallback } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { Container, Spinner } from "react-bootstrap";
import { dataLayer } from "./map-style.js";
import MapLegend from "./MapLegend";
import SearchBox from "./SearchBox";
import getStateGeoJson from "../../../services/getStateGeoJson";

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

  const errorOnClose = () => {
    setError(false);
  };

  useEffect(() => {
    const getStateGeoJsonDataUV = async () => {
      try {
        const { data } = await getStateGeoJson();
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
    setTimeout(() => {
      console.clear();
    }, 1000);
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
              <div>State: {hoverInfo.feature.properties.STATE_NAME}</div>
              <div>UV Index: {hoverInfo.feature.properties.UVI}</div>
            </div>
          )}
          <MapLegend />
          <SearchBox
            chips={chips}
            onChange={onChipChange}
            error={error}
            errorOnclose={errorOnClose}
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
