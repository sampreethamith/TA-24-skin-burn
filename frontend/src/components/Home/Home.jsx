import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import DataInformatiom from "./DataInformatiom";
import { getSkinBurnDemograph } from "../../services/getSkinBurnDemograph";

const Home = () => {
  const [deathCount, setDeathCount] = useState("");
  const [survivalRate, setSurvivalRate] = useState("");
  const [diagnosedCount, setDiagnosedCount] = useState("");

  useEffect(() => {
    const getSkinDemographDetails = async (params) => {
      try {
        const { data } = await getSkinBurnDemograph();

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
    <div>
      <Hero />
      <DataInformatiom
        deathCount={deathCount}
        survivalRate={survivalRate}
        diagnosedCount={diagnosedCount}
      />
    </div>
  );
};

export default Home;
