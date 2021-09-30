import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Css/ModelPopup.css";
import cities from "../../services/auCities.json";
import getCityGeoJson from "../../services/getCityGeoJson";
import { useDispatch, useSelector } from "react-redux";
import { latlongAvailable, locationUVName } from "../../actions/locationAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModelPopup = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputError, setinputError] = useState(false);

  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  async function handleOnSubmit() {
    if (value === "" || value === undefined || value === null) {
      setinputError(true);
      return;
    }
    setinputError(false);
    let { data } = await getCityGeoJson([value]);
    dispatch(
      latlongAvailable(
        data[0].properties.coord.lat,
        data[0].properties.coord.lon
      )
    );
    dispatch(
      locationUVName(
        data[0].properties.uvi,
        data[0].properties.name.toUpperCase()
      )
    );
    setOpen(false);
  }
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <p
          className="primary-text text-center hero-current-uv-radiation-current-time"
          onClick={handleOpen}
        >
          Select suburb
        </p>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="model-popup">
              <Autocomplete
                disablePortal
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
              <Button variant="warning" onClick={handleOnSubmit}>
                Submit
              </Button>
            </div>
          </Box>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default ModelPopup;
