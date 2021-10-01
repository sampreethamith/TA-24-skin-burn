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
    map.homeZoomLevel = 1.5;
    map.zoomToRectangle(
      map.north,
      map.east,
      map.south,
      map.west + 100,
      4,
      true
    );
    return () => {
      if (map != null) map.dispose();
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
      state: "Victoria ",
      secondText: "recorded the highest ultraviolet rate of 14.9",
      thirdText: "According to the data there are ",
      deaths: "304 deaths ",
      fourthText: "due to skin cancer in Victoria 2017.",
      TotalPeople: "2989 people ",
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
          <div className="flex-card-individual">
            <CardInfo data={data[0]} />
          </div>
          <div className="flex-card-individual">
            <CardInfo data={data[1]} />
          </div>
          <div className="flex-card-individual">
            <CardInfo data={data[2]} />
          </div>
          <div className="flex-card-individual">
            <CardInfo data={data[3]} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default MapScroll;
