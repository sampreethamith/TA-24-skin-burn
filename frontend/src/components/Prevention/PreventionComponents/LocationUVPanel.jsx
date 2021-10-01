import React, { useState, useEffect } from "react";
import UVGauge from "../../Common/UVGauge";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cities from "../../../services/auCities.json";
import CenterScreenSpinner from "../../Common/CenterScreenSpinner";
import getCityGeoJson from "../../../services/getCityGeoJson";
import "../Css/LocationUVPanel.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getLocationUVName } from "../../../services/getLocationUVName";
import { locationUVName } from "../../../actions/locationAction";

const LocationUVPanel = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [inputError, setinputError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uviChange, setUviChange] = useState(0);
  const [locationNameChange, setLocationNameChange] = useState("");

  const [checked, setChecked] = React.useState(
    location || location.isLocationEnabled ? location.isLocationEnabled : false
  );

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  async function handleOnSubmit() {
    setLoading(true);
    if (value === "" || value === undefined || value === null) {
      setLoading(false);
      setinputError(true);
      return;
    }
    setinputError(false);
    try {
      let { data } = await getCityGeoJson([value]);
      setLoading(false);
      const { properties } = data[0];
      properties.uvi = Math.round(properties.uvi * 10) / 10;
      console.log(properties);
      setUviChange(properties.uvi);
      setLocationNameChange(properties.name);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const getLocationUVNameDetails = async (latitude, longitude) => {
      const { data } = await getLocationUVName(latitude, longitude);
      const { properties } = data[0];

      properties.uvi = Math.round(properties.uvi * 10) / 10;

      dispatch(locationUVName(properties.uvi, properties.name.toUpperCase()));
      setLocationNameChange(properties.name.toUpperCase());
      setUviChange(properties.uvi);
    };
    if (location.isLocationEnabled && !location.locationName)
      getLocationUVNameDetails(location.latitude, location.longitude);
  }, []);

  const handleChange = (event) => {
    if (event.target.checked) {
      if (location.isLocationEnabled) {
        setChecked(true);
        console.log(location);
        setUviChange(location.uvi);
        setLocationNameChange(location.locationName);
      } else {
        toast.error("Location Not Turned on");
      }
    } else {
      setChecked(false);
      setUviChange(0);
      setLocationNameChange("");
    }
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="location-uv-panel-div">
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Use Current Location"
            />
          </FormGroup>
          <Autocomplete
            disablePortal
            disabled={checked}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="combo-box-demo"
            options={[...cities]}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                error={inputError}
                helperText={inputError ? "No suburb selected." : ""}
                {...params}
                label="Suburb"
              />
            )}
          />
          {loading && <CenterScreenSpinner />}
          <Button
            disabled={checked}
            variant="outline-warning"
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </div>
      </ThemeProvider>
      <UVGauge uvi={uviChange} locationName={locationNameChange} />
    </>
  );
};

export default LocationUVPanel;
