import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import DataInformatiom from "./DataInformatiom";
import { getSkinBurnDemograph } from "../../services/getSkinBurnDemograph";
import { getLocationUVName } from "../../services/getLocationUVName";
import { locationUVName } from "../../actions/locationAction";
import { useDispatch, useSelector } from "react-redux";
import CardWithBorderPrimary from "../Common/CardWithBorderPrimary";
import RouteCards from "./RouteCards";

const Home = () => {
  const dispatch = useDispatch();
  const [deathCount, setDeathCount] = useState("");
  const [survivalRate, setSurvivalRate] = useState("");
  const [diagnosedCount, setDiagnosedCount] = useState("");
  const location = useSelector((state) => state.location);
  const { latitude, longitude } = location;
  const [locationName, setLocationName] = useState("");
  const [uvi, setUvi] = useState("");

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

  useEffect(() => {
    const getLocationUVNameDetails = async (latitude, longitude) => {
      const { data } = await getLocationUVName(latitude, longitude);
      data.uvi = Math.round(data.uvi * 10) / 10;
      dispatch(locationUVName(data.uvi, data.loc_name));
      setLocationName(data.loc_name);
      setUvi(data.uvi);
    };
    getLocationUVNameDetails(latitude, longitude);
  }, [dispatch, latitude, longitude]);

  return (
    <>
      <Hero locationName={locationName} uvi={uvi} />
      <DataInformatiom
        deathCount={deathCount}
        survivalRate={survivalRate}
        diagnosedCount={diagnosedCount}
      />
      <RouteCards />
    </>
  );
};

export default Home;
