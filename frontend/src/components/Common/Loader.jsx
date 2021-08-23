import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
        variant="warning"
      ></Spinner>
    </div>
  );
};

export default Loader;
