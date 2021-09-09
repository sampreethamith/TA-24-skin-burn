import React from "react";

const CalculatedInformation = ({ spfLevel, clothing }) => {
  return (
    <div>
      <div className="primary-card primary-card-large">
        <p className="title-font">
          SPF Level <em className="em-text">(based on current uv Index)</em>
        </p>
        <p className="spf-level-number-font">{spfLevel ? spfLevel : 0}</p>
        <p className="spf-level-font">You need to apply</p>
        <p className="spf-level-font">every 2 hours when outside</p>
      </div>
      <div className="primary-card primary-card-large">
        <p className="title-font">What clothing are better to wear?</p>
        {clothing.map((item, index) => {
          return (
            <p className="spf-level-font" key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatedInformation;
