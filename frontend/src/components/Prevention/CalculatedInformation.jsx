import React from "react";

const CalculatedInformation = ({ spfLevel, clothing }) => {
  return (
    <div>
      <h2>Which Sunscreen you should apply?</h2>
      <div className="primary-card primary-card-large">
        <p>SPF Level should be</p>
        <p>{spfLevel}</p>
        <p>Should be</p>
        <p>Water Resistent</p>
      </div>
      <h2>What clothing are better to wear?</h2>
      <div className="primary-card primary-card-large">
        {clothing.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default CalculatedInformation;
