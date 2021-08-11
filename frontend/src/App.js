import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavigationBar />
      </header>
      <Home />
    </React.Fragment>
  );
}

export default App;
