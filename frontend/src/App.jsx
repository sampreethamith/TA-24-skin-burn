import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./components/Home/Home";
import Loader from "./components/Common/Loader";
import NotFound from "./components/Common/NotFound";
import SkinCancer from "./components/SkinCancer/SkinCancer";
import Prevention from "./components/Prevention/Prevention";
// import UVassist from "./components/UV-Assist/UVassist";
// import VerticallyCenteredModal from "./components/Common/VerticallyCenteredModal";
import { getLocation } from "./services/getLocation";
import SunCalculator from "./components/Prevention/SunCalculator";
import SkinCancerSympotms from "./components/SkinCancer/SkinCancerSympotms";
import { getLocationUVName } from "./services/getLocationUVName";
import {
  latlongAvailable,
  latlongNotAvailable,
  locationUVName,
} from "./actions/locationAction";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    const showPosition = (position) => {
      handleLatLongAvailable(position.coords);
    };

    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          handleLatLongNotAvailable();
          break;
        case error.POSITION_UNAVAILABLE:
          handleLatLongNotAvailable();
          break;
        case error.TIMEOUT:
          handleLatLongNotAvailable();
          break;
        case error.UNKNOWN_ERROR:
          handleLatLongNotAvailable();
          break;
        default:
          console.log("No error");
          break;
      }
    };

    const handleLatLongNotAvailable = () => {
      dispatch(latlongNotAvailable());
    };

    const handleLatLongAvailable = (coords) => {
      dispatch(latlongAvailable(coords.latitude, coords.longitude));
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    };

    getLocation(showPosition, showError);

    const getLocationUVNameDetails = async (latitude, longitude) => {
      const { data } = await getLocationUVName(latitude, longitude);
      dispatch(locationUVName(data.uvi, data.loc_name));
    };

    getLocationUVNameDetails(latitude, longitude);
  }, [dispatch, latitude, longitude]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <React.Fragment>
      {/* <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      {loading ? (
        <Loader />
      ) : (
        <div>
          <header>
            <NavigationBar />
          </header>
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/skincancer/skincancer-symptom"
              component={SkinCancerSympotms}
            />
            <Route path="/skincancer" component={SkinCancer} />
            <Route path="/prevention" component={Prevention} />
            <Route path="/skin-burn-calculator" component={SunCalculator} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
