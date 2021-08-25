import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import Home from "./components/Home/Home";
import Loader from "./components/Common/Loader";
import NotFound from "./components/Common/NotFound";
import SkinCancer from "./components/SkinCancer/SkinCancer";
import Prevention from "./components/Prevention/Prevention";
import Treatment from "./components/Treatment/Treatment";
import UVassist from "./components/UV-Assist/UVassist";
import VerticallyCenteredModal from "./components/Common/VerticallyCenteredModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(true);

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
            <Route path="/treatment" component={Treatment} />
            <Route path="/uv-assist" component={UVassist} />
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
