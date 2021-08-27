import React, { useEffect } from "react";

const CalculatedInformation = ({ spfLevel, clothing }) => {
  useEffect(() => {
    console.log(clothing);
  }, []);
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
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default CalculatedInformation;
