import React, { useState, useEffect } from "react";
import "../Data/SkewPanel.css";
import diagnosis_img from "../Data/diagnosis_icon.svg";
import death_img from "../Data/death_icon.svg";
import survive_img from "../Data/survive_icon.svg";
import CountUp from "react-countup";
import { getSkinBurnDemograph } from "../../../services/getSkinBurnDemograph";

const SkewPanel = () => {
  const [deathCount, setDeathCount] = useState("");
  const [survivalRate, setSurvivalRate] = useState("");
  const [diagnosedCount, setDiagnosedCount] = useState("");

  useEffect(() => {
    const getSkinDemographDetails = async (params) => {
      try {
        const { data } = await getSkinBurnDemograph();
        if (data.survival_rate.includes("%"))
          data.survival_rate = data.survival_rate.replace("%", "");
        setDeathCount(data.death_count);
        setSurvivalRate(data.survival_rate);
        setDiagnosedCount(data.incidence_count);
      } catch (error) {
        console.log(error);
      }
    };

    getSkinDemographDetails();
  }, []);

  return (
    <div data-aos="zoom-out" data-aos-duration="1000" className="skew-panel-back">
      <div className="skew-panel-info">
        <img src={diagnosis_img}></img>
        <h3 className="secondary-text">
          <CountUp end={diagnosedCount} duration={2.5} />
        </h3>
        <p>Diagnosed with sunburn every year</p>
      </div>
      <div className="skew-vertical-line"></div>
      <div className="skew-panel-info">
        <img src={death_img}></img>
        <h3 className="secondary-text">
          <CountUp end={deathCount} duration={2.5} />
        </h3>
        <p>Died last year due to skin cancer</p>
      </div>
      <div className="skew-vertical-line"></div>
      <div className="skew-panel-info">
        <img src={survive_img}></img>
        <h3 className="secondary-text">
          <CountUp end={survivalRate} duration={2.5} />
        </h3>
        <p>Recovered last year from sunburn</p>
      </div>
    </div>
  );
};

export default SkewPanel;
