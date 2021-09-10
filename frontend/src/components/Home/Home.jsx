import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import DataInformatiom from "./DataInformatiom";
import { getSkinBurnDemograph } from "../../services/getSkinBurnDemograph";
import { getLocationUVName } from "../../services/getLocationUVName";
import { locationUVName } from "../../actions/locationAction";
import { useDispatch, useSelector } from "react-redux";
import RouteCards from "./RouteCards";
import InformationCards from "./InformationCards";

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
      const { properties } = data[0];

      properties.uvi = Math.round(properties.uvi * 10) / 10;

      dispatch(locationUVName(properties.uvi, properties.name.toUpperCase()));
      setLocationName(properties.name.toUpperCase());
      setUvi(properties.uvi);
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
      <InformationCards />
      <iframe
        title="d3-project"
        src="http://ec2-18-224-93-207.us-east-2.compute.amazonaws.com/"
        style={{ border: "0px#ffffff none" }}
        name="myiFrame"
        scrolling="no"
        frameborder="1"
        marginheight="0px"
        marginwidth="0px"
        height="100%"
        width="100%"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default Home;
