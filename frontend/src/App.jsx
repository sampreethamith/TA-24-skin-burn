import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./components/Home/Home";
import SunBurnInformation from "./components/Home/SunBurnInformation";
import Loader from "./components/Common/Loader";
import NotFound from "./components/Common/NotFound";
import SkinCancer from "./components/SkinCancer/SkinCancer";
import Prevention from "./components/Prevention/Prevention";
import { getLocation } from "./services/getLocation";
import SunCalculator from "./components/Prevention/SunCalculator";
import SkinCancerSympotms from "./components/SkinCancer/SkinCancerSympotms";
import SkinCancerInformation from "./components/SkinCancer/SkinCancerInformation";
import UVassist from "./components/UV-Assist/UVassist";
import MapPage from "./components/Map/MapPage";
import {
  latlongAvailable,
  latlongNotAvailable,
} from "./actions/locationAction";
import UVChart from "./components/UVChart/UVChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locationNotAvailable, setLocationNotAvailable] = useState(false);

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
      setLocationNotAvailable(true);
      toast.error("Location Not Turned on", {
        autoClose: 10000,
        position: "top-center",
      });
      dispatch(latlongNotAvailable());
    };

    const handleLatLongAvailable = (coords) => {
      dispatch(latlongAvailable(coords.latitude, coords.longitude));
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    };

    getLocation(showPosition, showError);
  }, [dispatch, latitude, longitude]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <NavigationBar />
          </header>
          {locationNotAvailable && <ToastContainer />}
          <Switch>
            <Route path="/home/information" component={SunBurnInformation} />
            <Route path="/home" component={Home} />
            <Route
              path="/skincancer/skincancer-symptom"
              component={SkinCancerSympotms}
            />
            <Route
              path="/skincancer/skincancer-information"
              component={SkinCancerInformation}
            />
            <Route path="/skincancer" component={SkinCancer} />
            <Route
              path="/prevention/skin-burn-calculator"
              component={SunCalculator}
            />
            <Route path="/prevention" component={Prevention} />
            <Route path="/uv-assist" component={UVassist} />
            <Route path="/map" component={MapPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
        </>
      )}
    </React.Fragment>
  );
}

export default App;
