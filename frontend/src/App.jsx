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
import UVassist from "./components/UV-Assist/UVassist";
// import VerticallyCenteredModal from "./components/Common/VerticallyCenteredModal";
import SunCalculator from "./components/SunCalculator/SunCalculator";
import { getLocation } from "./services/getLocation";
// import { getLocationName } from "./services/getLocationName";
import {
  latlongAvailable,
  latlongNotAvailable,
} from "./actions/locationAction";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
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

      // getLocationName()
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    };

    getLocation(showPosition, showError);
  }, [dispatch]);

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
            <Route path="/skincancer" component={SkinCancer} />
            <Route path="/prevention" component={Prevention} />
            <Route path="/suncalculator" component={SunCalculator} />
            <Route path="/uv-assist" component={UVassist} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            {/* <Redirect to="not-found" /> */}
          </Switch>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
