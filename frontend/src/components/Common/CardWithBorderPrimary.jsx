import React from "react";
import australiamap from "../../images/australiamap.svg";

const CardWithBorderPrimary = () => {
  return (
    <div className="card-with-border-primary">
      <h3 className="text-center">Title</h3>
      <div className="card-with-border-primary-information-layout">
        <img src={australiamap} alt="Australia Map" />
        <p className="text-center">Find high UV areas and plan your trip</p>
      </div>
    </div>
  );
};

export default CardWithBorderPrimary;
