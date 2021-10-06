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
import Fab from "@mui/material/Fab";
import FloatIcon from "@mui/icons-material/LiveHelp";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const UVIndexMap = () => {
  const [data, setData] = useState(null);
  const [state, setState] = useState(null);
  const [suburb, setSuburb] = useState(null);
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
      setViewport({
        ...viewport,
        latitude: coord["lat"],
        longitude: coord["lon"],
        zoom: chips.length <= 1 ? 10 : 4,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic,
      });
      data = { type: "FeatureCollection", features: data };
      setSuburb(data);
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
        setState(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        // console.log(error);
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

  const [alignment, setAlignment] = React.useState("state");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
    if (newAlignment === "state") setData(state);
    else setData(suburb);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHelpPopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHelpPopupClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
          {
            <Source type="geojson" data={data}>
              <Layer {...dataLayer} />
            </Source>
          }
          {hoverInfo && alignment == "state" && (
            <div
              className="map-tooltip"
              style={{ left: hoverInfo.x, top: hoverInfo.y }}
            >
              <div>
                State: {hoverInfo.feature.properties.name.toUpperCase()}
              </div>
              <div>UV Index: {hoverInfo.feature.properties.uvi}</div>
            </div>
          )}
          <MapLegend />
          <div className="mapbox-mapover-controls ">
            <p className="mapbox-title-text">
              Find out current ultraviolet <em>heat levels</em>
            </p>
            <ToggleButtonGroup
              className="mapbox-toggle-search-button"
              color="warning"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="state">States</ToggleButton>
              <ToggleButton value="suburb">Suburbs</ToggleButton>
            </ToggleButtonGroup>
            {alignment == "suburb" && (
              <SearchBox
                chips={chips}
                onChange={onChipChange}
                error={error}
                errorOnclose={errorOnClose}
                onClick={onCitySearchClick}
              />
            )}
          </div>
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
            alignment == "suburb" &&
            data.features.map((item, index) => (
              <div
                onMouseEnter={() => {
                  openPopup(item);
                  setHoverInfo(null);
                }}
                onMouseLeave={() => setPopupInfo(false)}
              >
                <Marker
                  key={`marker-${index}`}
                  longitude={item.properties.coord.lon}
                  latitude={item.properties.coord.lat}
                  onH
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
                    }}
                  >
                    <path d={ICON} />
                  </svg>
                </Marker>
              </div>
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
        <Fab
          aria-describedby={id}
          onClick={handleHelpPopupClick}
          className="mapbox-float-button"
          color="secondary"
          aria-label="add"
        >
          <FloatIcon />
        </Fab>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleHelpPopupClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Typography sx={{ p: 2 }}>
            <ul>
              <li>
                Use Top left toggle button <strong>'STATES/SUBURB'</strong> to
                switch between state and suburb areas.
              </li>
              <li>
                The <strong>STATES button</strong> highlights the state's
                current UV Index.
              </li>
              <li>
                The <strong>SUBURBS button</strong> enables search bar and
                searches through different cities of Australia to retrieve their
                current UV index.
              </li>
              <li>
                On the Bottom Left, use <strong> the legend</strong> to find the
                intensity levels of UV rays.
              </li>
              <li>
                Use the Right side switch <strong>'UV Map/UV Info'</strong> to
                switch between Map functionality and information on the history
                of UV and its effects.
              </li>
            </ul>
          </Typography>
        </Popover>
      </>
    </section>
  );
};

export default UVIndexMap;
