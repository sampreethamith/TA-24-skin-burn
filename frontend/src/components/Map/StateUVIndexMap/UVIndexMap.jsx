import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactMapGL, {
  Source,
  Layer,
  FlyToInterpolator,
  Marker,
  Popup,
} from "react-map-gl";
import { Container, Spinner } from "react-bootstrap";
import { dataLayer } from "./map-style.js";
import { easeCubic } from "d3-ease";
import MapLegend from "./MapLegend";
import SearchBox from "./SearchBox";
import getStateGeoJson from "../../../services/getStateGeoJson";
import getCityGeoJson from "../../../services/getCityGeoJson";
import "./UVIndexMap.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const UVIndexMap = () => {
  const [data, setData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chips, setChips] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: -28.539960029117317,
    longitude: 133.1102061296636,
    minZoom: 4,
    zoom: 4,
    bearing: 0,
    pitch: 0,
    height: document.documentElement.clientHeight - 100,
    width: "auto",
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
        zoom: chips.length <= 1 ? 10 : 4,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic,
      });
      console.log(viewport);
      data = { type: "FeatureCollection", features: data };
      setData(data);
      console.log(data);
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
      height: document.documentElement.clientHeight - 100,
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

  const [location, setlocation] = useState(null);
  function openPopup(param) {
    setlocation(param);
    setPopupInfo(true);
  }

  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

  const SIZE = 20;
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <section>
      <>
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
          {data &&
            data.features.map((item, index) => (
              <Marker
                key={`marker-${index}`}
                longitude={item.properties.coord.lon}
                latitude={item.properties.coord.lat}
              >
                <svg
                  height={SIZE}
                  viewBox="0 0 24 24"
                  style={{
                    cursor: "pointer",
                    fill: "#d00",
                    stroke: "none",
                    transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                  }}
                  onClick={() => {
                    openPopup(item);
                    setHoverInfo(false);
                  }}
                  onMouseEnter={() => setHoverInfo(false)}
                >
                  <path d={ICON} />
                </svg>
              </Marker>
            ))}
          {popupInfo && (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={location.properties.coord.lon}
              latitude={location.properties.coord.lat}
              closeOnClick={true}
              onClose={() => setPopupInfo(false)}
              onMouseEnter={() => setHoverInfo(false)}
              className="mapbox-popup"
            >
              <div>
                <p>{location.properties.name.toUpperCase()}</p>
                <p>{"UVI: " + location.properties.uvi}</p>
              </div>
            </Popup>
          )}
        </ReactMapGL>
      </>
    </section>
  );
};

export default UVIndexMap;
