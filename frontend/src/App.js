import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import Home from "./components/Home/Home";
import DataInformatiom from "./components/Home/DataInformatiom";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavigationBar />
      </header>
      <Home />
      {/* <DataInformatiom /> */}
    </React.Fragment>
  );
}

export default App;
