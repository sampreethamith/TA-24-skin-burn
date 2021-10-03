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
import { getLocation } from "./services/getLocation";
import SunCalculator from "./components/Prevention/SunCalculator";
import SkinCancerSympotms from "./components/SkinCancer/SkinCancerSympotms";
import SkinCancerInformation1 from "./components/SkinCancer/SkinCancerInformation";
import UVassist from "./components/UV-Assist/UVassist";
import MapPage from "./components/Map/MapPage";
import {
  latlongAvailable,
  latlongNotAvailable,
} from "./actions/locationAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import QuizPage from "./components/Quiz/QuizPage";
import ScrollTopButton from "./components/Common/ScrollTopButton";
import SunBurnInformation from "./components/Information/SunBurnInformation";
import ModelPopup from "./components/Common/ModelPopup";
import WelcomeText from "./components/Home/HomeComponents/WelcomeText";
import CenterScreenSpinner from "./components/Common/CenterScreenSpinner";
import UVGauge from "./components/Common/UVGauge";
import CardInfo from "./components/Map/MapScroll/CardInfo";
import LocationUVPanel from "./components/Prevention/PreventionComponents/LocationUVPanel";
import MapScroll from "./components/Map/MapScroll/MapScroll";
import QueAnsTemplate from "./components/Quiz/QuizComponents/QueAnsTemplate";
import UVIndexInformation from "./components/Information/UVIndexInformation";
import SunScreenInformation from "./components/Information/SunScreenInformation";
import SkinCancerInformation from "./components/Information/SkinCancerInformation";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

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
      toast.error("Location Not Turned on");
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
          {locationNotAvailable && (
            <ToastContainer
              position="top-center"
              autoClose={10000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          )}
          <Switch>
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
            <Route
              path="/information/ultraviolet"
              component={UVIndexInformation}
            />
            <Route
              path="/information/sunscreen"
              component={SunScreenInformation}
            />
            <Route path="/prevention" component={Prevention} />
            <Route path="/quiz" component={QuizPage} />
            <Route path="/uv-assist" component={UVassist} />
            <Route path="/map" component={MapPage} />
            <Route path="/test" component={UVIndexInformation} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
          <ScrollTopButton />
        </>
      )}
    </React.Fragment>
  );
}

export default App;
