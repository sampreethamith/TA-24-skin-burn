import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "./HomeComponents/Hero";
import SkewPanel from "./HomeComponents/SkewPanel";
import HoverPanel from "./HomeComponents/HoverPanel";
import RouteCards from "./HomeComponents/RouteCards";
import ImageInfoCard from "./HomeComponents/ImageInfoCard";
import { getLocationUVName } from "../../services/getLocationUVName";
import { locationUVName } from "../../actions/locationAction";
import WelcomeText from "./HomeComponents/WelcomeText";

const Home = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const { latitude, longitude } = location;
  const [locationName, setLocationName] = useState("");
  const [uvi, setUvi] = useState("");

  useEffect(() => {
    const getLocationUVNameDetails = async (latitude, longitude) => {
      const { data } = await getLocationUVName(latitude, longitude);
      const { properties } = data[0];

      properties.uvi = Math.round(properties.uvi * 10) / 10;

      dispatch(locationUVName(properties.uvi, properties.name.toUpperCase()));
      setLocationName(properties.name.toUpperCase());
      setUvi(properties.uvi);
    };
    if (location.isLocationEnabled && !latitude)
      getLocationUVNameDetails(latitude, longitude);
  }, [dispatch, latitude, longitude]);

  return (
    <>
      <Hero locationName={locationName} uvi={uvi} />
      <WelcomeText />
      <RouteCards />
      <SkewPanel />
      <HoverPanel />
      <ImageInfoCard />
    </>
  );
};

export default Home;
