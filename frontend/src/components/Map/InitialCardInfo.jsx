import React from "react";
import CardInfo from "./CardInfo";

const InitialCardInfo = () => {
  const style = {
    width: "50%",
  };
  return (
    <div className="initial-info-card-display">
      <div className="initial-info-first-card">
        <CardInfo
          textOneStart="In 2016,"
          textOneBold=" Victoria "
          textOneEnd="recorded the highest ultraviolet rate of 14.9"
          textTwoStart="According to the data there are"
          textTwoBold=" 304 deaths "
          textTwoEnd="due to skin cancer in Victoria 2017."
          textThreeBold=" 2989 people "
          textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2017."
          style={style}
        />
      </div>
      <div className="initial-info-second-card">
        <CardInfo
          textOneStart="In 2016,"
          textOneBold=" Victoria "
          textOneEnd="recorded the highest ultraviolet rate of 14.9"
          textTwoStart="According to the data there are"
          textTwoBold=" 304 deaths "
          textTwoEnd="due to skin cancer in Victoria 2017."
          textThreeBold=" 2989 people "
          textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2017."
          style={style}
        />
      </div>
    </div>
  );
};

export default InitialCardInfo;
