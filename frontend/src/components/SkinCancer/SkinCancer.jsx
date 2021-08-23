import React from "react";
import construction from "./../../images/underconstruction.png";

const SkinCancer = () => {
  return (
    <div className="not-found">
      <img
        src={construction}
        alt="Page Under Construction"
        className="img-page-construction"
      />
    </div>
  );
};

export default SkinCancer;
