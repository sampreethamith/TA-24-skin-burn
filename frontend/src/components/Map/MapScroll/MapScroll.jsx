import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_australiaLow from "@amcharts/amcharts4-geodata/australiaHigh";
import am4themes from "@amcharts/amcharts4/themes/material";
import CardInfo from "./CardInfo";
import "./MapScroll.css";

am4core.useTheme(am4themes);
let map = null;
let polygonSeries = null;
let polygonTemplate = null;
let mapMainColor = "#888";
let mapHighlightColor = "#ffb800";

function buildMap() {
  // Create map instance
  map = am4core.create("chartdiv_map", am4maps.MapChart);
  map.projection = new am4maps.projections.Miller();
  map.geodata = am4geodata_australiaLow;

  map.seriesContainer.draggable = false;
  map.seriesContainer.resizable = false;
  map.chartContainer.wheelable = false;
  map.chartContainer.align = "right";
  map.seriesContainer.events.disableType("doublehit");
  map.chartContainer.background.events.disableType("doublehit");

  polygonSeries = new am4maps.MapPolygonSeries();
  polygonSeries.useGeodata = true;
  map.series.push(polygonSeries);

  // Configure series
  polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.fill = am4core.color(mapMainColor);
}

function highelightState(stateCode, color) {
  // Add some data
  polygonSeries.data = [
    {
      id: stateCode,
      fill: am4core.color(color),
    },
  ];

  // // // Bind "fill" property to "fill" key in data
  polygonTemplate.propertyFields.fill = "fill";
}

const MapScroll = () => {
  const refVic = useRef();
  const refNsw = useRef();
  const refSoutAus = useRef();
  const refQsld = useRef();
  const refWa = useRef();
  const refTas = useRef();
  const refNt = useRef();

  useEffect(() => {
    buildMap();
    map.homeZoomLevel = 1;

    return () => {
      if (map != null) map.dispose();
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
        map.zoomToRectangle(
          map.north + 10,
          map.east,
          map.south,
          map.west,
          2,
          true
        );
        highelightState(mapMainColor);
      } else if (
        refVic.current.offsetTop >= window.scrollY &&
        window.scrollY <= refNsw.current.offsetTop
      ) {
        console.log(refVic);
        map.zoomToGeoPoint({ longitude: 144.9646, latitude: -37.0201 }, 3, 1);
        highelightState("AU-VIC", mapHighlightColor);
      } else if (
        refNsw.current.offsetTop >= window.scrollY &&
        window.scrollY <= refSoutAus.current.offsetTop
      ) {
        map.zoomToGeoPoint(
          { longitude: 145.612793, latitude: -31.840233 },
          3,
          1
        );
        highelightState("AU-NSW", mapHighlightColor);
      } else if (
        refSoutAus.current.offsetTop >= window.scrollY &&
        window.scrollY <= refQsld.current.offsetTop
      ) {
        map.zoomToGeoPoint(
          { longitude: 136.209152, latitude: -30.000233 },
          3,
          1
        );
        highelightState("AU-SA", mapHighlightColor);
      } else if (
        refQsld.current.offsetTop >= window.scrollY &&
        window.scrollY <= refWa.current.offsetTop
      ) {
        map.zoomToGeoPoint(
          { longitude: 142.702789, latitude: -20.917574 },
          3,
          1
        );
        highelightState("AU-QLD", mapHighlightColor);
      } else if (
        refWa.current.offsetTop >= window.scrollY &&
        window.scrollY <= refTas.current.offsetTop
      ) {
        map.zoomToGeoPoint(
          { longitude: 117.793221, latitude: -25.042261 },
          3,
          1
        );
        highelightState("AU-WA", mapHighlightColor);
      } else if (
        refTas.current.offsetTop >= window.scrollY &&
        window.scrollY <= refNt.current.offsetTop
      ) {
        map.zoomToGeoPoint(
          { longitude: 146.315918, latitude: -41.640079 },
          3,
          1
        );
        highelightState("AU-TAS", mapHighlightColor);
      } else if (refNt.current.offsetTop >= window.scrollY) {
        map.zoomToGeoPoint(
          { longitude: 132.550964, latitude: -19.491411 },
          3,
          1
        );
        highelightState("AU-NT", mapHighlightColor);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    {
      firstText: "In 2016, ",
      state: "Victoria ",
      secondText: "recorded the highest ultraviolet rate of 14.9",
      thirdText: "According to the data there are ",
      deaths: "304 deaths ",
      fourthText: "due to skin cancer in Victoria 2017.",
      TotalPeople: "2989 people ",
      fifthText:
        "got affected by sunburn cases, severe damage to their skin in the year 2017.",
    },
    {
      firstText: "In 2016, ",
      state: "New South Wales",
      secondText: "recorded the highest ultraviolet rate of 15.7",
      thirdText: "According to the data there are ",
      deaths: "506 deaths ",
      fourthText: "due to skin cancer in New South Wales 2017.",
      TotalPeople: "4715 people ",
      fifthText:
        "got affected by sunburn cases, severe damage to their skin in the year 2017.",
    },
    {
      firstText: "In 2016, ",
      state: "South Australia ",
      secondText: "recorded the highest ultraviolet rate of 15.5",
      thirdText: "According to the data there are ",
      deaths: "95 deaths ",
      fourthText: "due to skin cancer in South Australia 2017.",
      TotalPeople: "819 people ",
      fifthText:
        "got affected by sunburn cases, severe damage to their skin in the year 2017.",
    },
    {
      firstText: "In 2015, ",
      state: "Queensland ",
      secondText: "recorded the highest ultraviolet rate of 17.1",
      thirdText: "According to the data there are ",
      deaths: "302 deaths ",
      fourthText: "due to skin cancer in Queensland 2017.",
      TotalPeople: "3972 people ",
      fifthText:
        "got affected by sunburn cases, severe damage to their skin in the year 2016.",
    },
    {
      firstText: "In 2015, ",
      state: "Western Australia ",
      secondText: "recorded the highest ultraviolet rate of 15.4",
      thirdText: "According to the data there are ",
      deaths: "126 deaths ",
      fourthText: "due to skin cancer in Western Australia 2016.",
      TotalPeople: "2989 people ",
      fifthText:
        "got affected by sunburn cases, severe damage to their skin in the year 2017.",
    },
    {
      firstText: "In 2013, ",
      state: "Tasmania ",
      secondText: "recorded the highest ultraviolet rate of 13.1",
      thirdText: "According to the data there are ",
      deaths: "40 deaths ",
      fourthText: "due to skin cancer in Tasmania 2014.",
      TotalPeople: "332 people ",
      fifthText:
        "got affected by sunburn cases, severe damage to their skin in the year 2017.",
    },
    {
      firstText: "In 2013, ",
      state: "Northern Territory ",
      secondText: "recorded the highest ultraviolet rate of 19.8",
      thirdText: "According to the data there are ",
      deaths: "7 deaths ",
      fourthText: "due to skin cancer in Northern Territory 2014.",
      TotalPeople: "68 people ",
      fifthText:
        "got affected by sunburn cases, severe damage to their skin in the year 2017.",
    },
  ];

  return (
    <>
      <div className="amChart-map" id="chartdiv_map"></div>
      <Container>
        <div className="flex-card">
          <div className="self-align-start flex-card-individual">
            <CardInfo
              headingText="Due to the high rate of Ultraviolet rays, Australia is suffering from
                            sunburn and skin cancer."
              cardType="primary"
            />
          </div>
          <div className="self-align-start-top flex-card-individual">
            <CardInfo cardType="primary" scrollToLearnText={true} />
          </div>
          <div className="flex-card-individual" ref={refVic}>
            <CardInfo data={data[0]} />
          </div>
          <div className="flex-card-individual" ref={refNsw}>
            <CardInfo data={data[1]} />
          </div>
          <div className="flex-card-individual" ref={refSoutAus}>
            <CardInfo data={data[2]} />
          </div>
          <div className="flex-card-individual" ref={refQsld}>
            <CardInfo data={data[3]} />
          </div>
          <div className="flex-card-individual" ref={refWa}>
            <CardInfo data={data[4]} />
          </div>
          <div className="flex-card-individual" ref={refTas}>
            <CardInfo data={data[5]} />
          </div>
          <div className="flex-card-individual" ref={refNt}>
            <CardInfo data={data[6]} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default MapScroll;
