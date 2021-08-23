import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import Home from "./components/Home/Home";
import DataInformatiom from "./components/Home/DataInformatiom";
import Loader from "./components/Common/Loader";

function App() {
  const [loading, setLoading] = useState(true);

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
        <div>
          <header>
            <NavigationBar />
          </header>
          <Home />
          <DataInformatiom />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
