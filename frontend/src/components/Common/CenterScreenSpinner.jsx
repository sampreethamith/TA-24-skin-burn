import React from "react";
import { Spinner } from "react-bootstrap";
import "./Css/CenterSpinner.css";

const CenterScreenSpinner = () => {
  return (
    <div>
      <Spinner
        animation="border"
        variant="warning"
        className="center-spinner"
      />
    </div>
  );
};

export default CenterScreenSpinner;
