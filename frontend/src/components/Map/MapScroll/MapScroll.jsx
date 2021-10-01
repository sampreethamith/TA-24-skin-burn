import React, { useState, useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_australiaLow from "@amcharts/amcharts4-geodata/australiaHigh";
import am4themes from "@amcharts/amcharts4/themes/material";
import CardInfo from "./CardInfo";

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
  // const [offset, setoffset] = useState(0);
  const refVic = useRef();
  const refNsw = useRef();
  const refSoutAus = useRef();
  const refQsld = useRef();
  const refWa = useRef();
  const refTas = useRef();
  const refNt = useRef();

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setoffset(window.pageYOffset);
  //   };
  // }, []);

  useEffect(() => {
    buildMap();
    map.zoomToRectangle(map.north + 10, map.east, map.south, map.west, 2, true);
    return () => {
      if (map != null) map.dispose();
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      console.log(refVic);
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
      } else if (refNsw.current.offsetTop >= window.scrollY) {
        map.zoomToGeoPoint(
          { longitude: 145.612793, latitude: -31.840233 },
          3,
          1
        );
        highelightState("AU-NSW", mapHighlightColor);
      } else if (refSoutAus.current.offsetTop >= window.scrollY) {
        map.zoomToGeoPoint(
          { longitude: 136.209152, latitude: -30.000233 },
          3,
          1
        );
        highelightState("AU-SA", mapHighlightColor);
      } else if (refQsld.current.offsetTop >= window.scrollY) {
        map.zoomToGeoPoint(
          { longitude: 142.702789, latitude: -20.917574 },
          3,
          1
        );
        highelightState("AU-QLD", mapHighlightColor);
      } else if (refWa.current.offsetTop >= window.scrollY) {
        map.zoomToGeoPoint(
          { longitude: 117.793221, latitude: -25.042261 },
          3,
          1
        );
        highelightState("AU-WA", mapHighlightColor);
      } else if (refTas.current.offsetTop >= window.scrollY) {
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

  return (
    <div style={{}}>
      <div
        className="amChart-map"
        id="chartdiv_map"
        style={{
          position: `fixed`,
        }}
      ></div>
      <div
        style={{
          position: `absolute`,
          display: `flex`,
          flexDirection: `column`,
          height: `800%`,
          width: `100vw`,
        }}
      >
        <CardInfo
          style={{
            display: `flex`,
            flexDirection: `row`,
            alignContent: `flex-start`,
            alignItems: "center",
            alignItems: `start`,
            // height: '300%',
            marginLeft: "7%",
            marginTop: "10%",
          }}
          cardBackColor="#ffb800"
          textOneStart="Due to the high rate of ultraviolet rays, Australia's server sunburn and skin cancer issues."
        />
        <CardInfo
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `center`,
            alignItems: `center`,
            marginTop: "20%",
          }}
          cardBackColor="#ffb800"
          textOneStart="Scroll to learn more"
        />
        <CardInfo visibility="hidden" cardBackColor="#ffb800" />
        <div ref={refVic}>
          <CardInfo
            textOneStart="In 2016,"
            textOneBold=" Victoria "
            textOneEnd="recorded the highest ultraviolet rate of 14.9"
            textTwoStart="According to the data there are"
            textTwoBold=" 304 deaths "
            textTwoEnd="due to skin cancer in Victoria 2017."
            textThreeBold=" 2989 people "
            textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2017."
          />
        </div>
        <div ref={refNsw}>
          <CardInfo
            textOneStart="In 2016,"
            textOneBold=" New South Wales "
            textOneEnd="recorded the highest ultraviolet rate of 15.7"
            textTwoStart="According to the data there are"
            textTwoBold=" 506 deaths "
            textTwoEnd="due to skin cancer in New South Wales 2017."
            textThreeBold=" 4715 people "
            textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2017."
          />
        </div>
        <div ref={refSoutAus}>
          <CardInfo
            textOneStart="In 2016,"
            textOneBold=" South Australia "
            textOneEnd="recorded the highest ultraviolet rate of 15.5"
            textTwoStart="According to the data there are"
            textTwoBold=" 95 deaths "
            textTwoEnd="due to skin cancer in South Australia 2017."
            textThreeBold=" 819 people "
            textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2017."
          />
        </div>
        <div ref={refQsld}>
          <CardInfo
            textOneStart="In 2015,"
            textOneBold=" Queensland "
            textOneEnd="recorded the highest ultraviolet rate of 17.1"
            textTwoStart="According to the data there are"
            textTwoBold=" 302 deaths "
            textTwoEnd="due to skin cancer in Queensland 2016."
            textThreeBold=" 3972 people "
            textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2016."
          />
        </div>
        <div ref={refWa}>
          <CardInfo
            textOneStart="In 2015,"
            textOneBold=" Western Australia "
            textOneEnd="recorded the highest ultraviolet rate of 15.4"
            textTwoStart="According to the data there are"
            textTwoBold=" 126 deaths "
            textTwoEnd="due to skin cancer in Western Australia 2016."
            textThreeBold=" 1546 people "
            textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2016."
          />
        </div>
        <div ref={refTas}>
          <CardInfo
            textOneStart="In 2013,"
            textOneBold=" Tasmania "
            textOneEnd="recorded the highest ultraviolet rate of 13.1"
            textTwoStart="According to the data there are"
            textTwoBold=" 40 deaths "
            textTwoEnd="due to skin cancer in Tasmania 2014."
            textThreeBold=" 332 people "
            textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2017."
          />
        </div>
        <div ref={refNt}>
          <CardInfo
            textOneStart="In 2013,"
            textOneBold=" Northern Territory "
            textOneEnd="recorded the highest ultraviolet rate of 19.8"
            textTwoStart="According to the data there are"
            textTwoBold=" 7 deaths "
            textTwoEnd="due to skin cancer in Northern Territory 2014."
            textThreeBold=" 68 people "
            textThreeEnd=" got affected by sunburn cases severe damage to their skin in the year of 2017."
          />
        </div>
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
      </div>
      {/* <UVIndexMap data-aos="zoom-in-up" data-aos-duration="1000" /> */}
    </div>
  );
};

export default MapScroll;

// useEffect(() => {
//   let variationOffeset =
//     document.documentElement.clientWidth > 768 ? 850 : 750;
//   if (offset >= 0 && offset <= variationOffeset * 1) {
//     map.zoomToRectangle(
//       map.north + 10,
//       map.east,
//       map.south,
//       map.west,
//       2,
//       true
//     );
//     highelightState(mapMainColor);
//   } else if (
//     offset >= variationOffeset * 1 &&
//     offset <= variationOffeset * 2
//   ) {
//     map.zoomToGeoPoint({ longitude: 144.9646, latitude: -37.0201 }, 3, 1);
//     highelightState("AU-VIC", mapHighlightColor);
//   } else if (
//     offset >= variationOffeset * 2 &&
//     offset <= variationOffeset * 3
//   ) {
//     map.zoomToGeoPoint({ longitude: 145.612793, latitude: -31.840233 }, 3, 1);
//     highelightState("AU-NSW", mapHighlightColor);
//   } else if (
//     offset >= variationOffeset * 3 &&
//     offset <= variationOffeset * 4
//   ) {
//     map.zoomToGeoPoint({ longitude: 136.209152, latitude: -30.000233 }, 3, 1);
//     highelightState("AU-SA", mapHighlightColor);
//   } else if (
//     offset >= variationOffeset * 4 &&
//     offset <= variationOffeset * 5
//   ) {
//     map.zoomToGeoPoint({ longitude: 142.702789, latitude: -20.917574 }, 3, 1);
//     highelightState("AU-QLD", mapHighlightColor);
//   } else if (
//     offset >= variationOffeset * 5 &&
//     offset <= variationOffeset * 6
//   ) {
//     map.zoomToGeoPoint({ longitude: 117.793221, latitude: -25.042261 }, 3, 1);
//     highelightState("AU-WA", mapHighlightColor);
//   } else if (
//     offset >= variationOffeset * 6 &&
//     offset <= variationOffeset * 7
//   ) {
//     map.zoomToGeoPoint({ longitude: 146.315918, latitude: -41.640079 }, 3, 1);
//     highelightState("AU-TAS", mapHighlightColor);
//   } else if (
//     offset >= variationOffeset * 7 &&
//     offset <= variationOffeset * 8
//   ) {
//     map.zoomToGeoPoint({ longitude: 132.550964, latitude: -19.491411 }, 3, 1);
//     highelightState("AU-NT", mapHighlightColor);
//   }
// }, [offset]);
