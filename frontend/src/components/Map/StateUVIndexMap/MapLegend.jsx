import React from "react";

const MapLegend = () => {
  return (
    <div className="legend">
      <h6 className="primary-text">Legend</h6>
      <div className="legend-color-pallet-container">
        <div className="legend-individual-color-pallet">
          <div className="legend-individual-color-pallet-1"></div>
          <p>0-2</p>
        </div>
        <div className="legend-individual-color-pallet">
          <div className="legend-individual-color-pallet-2"></div>
          <p>3-5</p>
        </div>
        <div className="legend-individual-color-pallet">
          <div className="legend-individual-color-pallet-3"></div>
          <p>6-7</p>
        </div>
        <div className="legend-individual-color-pallet">
          <div className="legend-individual-color-pallet-4"></div>
          <p>8-10</p>
        </div>
        <div className="legend-individual-color-pallet">
          <div className="legend-individual-color-pallet-5"></div>
          <p>11+</p>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
