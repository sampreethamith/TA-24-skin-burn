import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes from "@amcharts/amcharts4/themes/dark";
import "./Css/UVGauge.css";

am4core.useTheme(am4themes);
let chart = null;
let hand = null;
var chartMin = 0;
var chartMax = 15;

const data = {
  score: 0,
  gradingData: [
    {
      title: "Low",
      color: "#54b947",
      lowScore: 0,
      highScore: 3,
    },
    {
      title: "Moderate",
      color: "#b0d136",
      lowScore: 3,
      highScore: 5,
    },
    {
      title: "High",
      color: "#f3eb0c",
      lowScore: 5,
      highScore: 7,
    },
    {
      title: "Very High",
      color: "#fdae19",
      lowScore: 7,
      highScore: 10,
    },
    {
      title: "Extreme",
      color: "#f04922",
      lowScore: 10,
      highScore: 15,
    },
  ],
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore <= lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

function buildGauge() {
  // create chart
  var chart = am4core.create("chartdiv", am4charts.GaugeChart);
  chart.hiddenState.properties.opacity = 0;
  chart.fontSize = 16;
  chart.innerRadius = am4core.percent(80);
  chart.resizable = true;

  /**
   * Normal axis
   */

  var axis = chart.xAxes.push(new am4charts.ValueAxis());
  axis.min = chartMin;
  axis.max = chartMax;
  axis.strictMinMax = true;
  axis.renderer.radius = am4core.percent(80);
  axis.renderer.inside = true;
  axis.renderer.line.strokeOpacity = 0.1;
  axis.renderer.ticks.template.disabled = false;
  axis.renderer.ticks.template.strokeOpacity = 1;
  axis.renderer.ticks.template.strokeWidth = 0.5;
  axis.renderer.ticks.template.length = 5;
  axis.renderer.grid.template.disabled = true;
  axis.renderer.labels.template.radius = am4core.percent(15);
  axis.renderer.labels.template.fontSize = "0.9em";

  /**
   * Axis for ranges
   */

  var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
  axis2.min = chartMin;
  axis2.max = chartMax;
  axis2.strictMinMax = true;
  axis2.renderer.labels.template.disabled = true;
  axis2.renderer.ticks.template.disabled = true;
  axis2.renderer.grid.template.disabled = false;
  axis2.renderer.grid.template.opacity = 0.5;
  axis2.renderer.labels.template.bent = true;
  axis2.renderer.labels.template.fill = am4core.color("#fff");
  axis2.renderer.labels.template.fontWeight = "bold";
  // axis2.renderer.labels.template.fillOpacity = 0.3;

  /**
Ranges
*/

  for (let grading of data.gradingData) {
    var range = axis2.axisRanges.create();
    range.axisFill.fill = am4core.color(grading.color);
    range.axisFill.fillOpacity = 0.8;
    range.axisFill.zIndex = -1;
    range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
    range.endValue =
      grading.highScore < chartMax ? grading.highScore : chartMax;
    range.grid.strokeOpacity = 0;
    range.stroke = am4core.color(grading.color).lighten(-0.1);
    range.label.inside = true;
    range.label.text = grading.title.toUpperCase();
    range.label.inside = true;
    range.label.location = 0.5;
    range.label.inside = true;
    range.label.radius = am4core.percent(10);
    range.label.paddingBottom = -5; // ~half font size
    range.label.fontSize = "0.9em";
  }

  var matchingGrade = lookUpGrade(data.score, data.gradingData);

  /**
   * Label 0
   */

  var label0 = chart.radarContainer.createChild(am4core.Label);
  label0.isMeasured = false;
  label0.fontSize = "1.3em";
  label0.x = am4core.percent(0);
  label0.paddingBottom = 90;
  label0.horizontalCenter = "middle";
  label0.verticalCenter = "bottom";
  //label.dataItem = data;
  label0.text = "UVI";
  //label.text = "{score}";
  label0.fill = am4core.color("#ffb800");

  /**
   * Label 00
   */

  var label00 = chart.radarContainer.createChild(am4core.Label);
  label00.isMeasured = false;
  label00.fontSize = "0.9em";
  label00.x = am4core.percent(0);
  label00.paddingBottom = 70;
  label00.horizontalCenter = "middle";
  label00.verticalCenter = "bottom";
  //label.dataItem = data;
  label00.text = "Clayton";
  //label.text = "{score}";
  label00.fill = am4core.color("#ffffff");

  /**
   * Label 1
   */

  var label = chart.radarContainer.createChild(am4core.Label);
  label.isMeasured = false;
  label.fontSize = "3em";
  label.x = am4core.percent(50);
  label.paddingBottom = 10;
  label.horizontalCenter = "middle";
  label.verticalCenter = "bottom";
  //label.dataItem = data;
  label.text = data.score.toFixed(1);
  //label.text = "{score}";
  label.fill = am4core.color(matchingGrade.color);

  /**
   * Label 2
   */

  var label2 = chart.radarContainer.createChild(am4core.Label);
  label2.isMeasured = false;
  label2.fontSize = "1em";
  label2.horizontalCenter = "middle";
  label2.verticalCenter = "bottom";
  label2.fontWeight = "normal";
  label2.text = matchingGrade.title.toUpperCase();
  label2.fill = am4core.color(matchingGrade.color);

  /**
   * Hand
   */

  hand = chart.hands.push(new am4charts.ClockHand());
  hand.axis = axis2;
  hand.innerRadius = am4core.percent(55);
  hand.startWidth = 8;
  hand.pin.disabled = true;
  hand.value = data.score;
  hand.fill = am4core.color("#ffb800");
  hand.stroke = am4core.color("#ffb800");

  hand.events.on("positionchanged", function () {
    label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
    var value2 = axis.positionToValue(hand.currentPosition);
    var matchingGrade = lookUpGrade(
      axis.positionToValue(hand.currentPosition),
      data.gradingData
    );
    if (matchingGrade != null) {
      label2.text = matchingGrade.title.toUpperCase();
      label2.fill = am4core.color(matchingGrade.color);
      label2.stroke = am4core.color(matchingGrade.color);
      label.fill = am4core.color(matchingGrade.color);
    }
  });
}

function setHandValue(val) {
  hand.showValue(val, 1000, am4core.ease.cubicOut);
  setTimeout(function () {
    hand.value = val;
  }, 1000);
}

const UVGauge = ({ customClass }) => {
  const location = useSelector((state) => state.location);
  console.log(location);
  const uvi = location || location.uvi ? location.uvi : 0;
  console.log(uvi);
  useEffect(() => {
    buildGauge();
    hand.value = uvi;
    return () => {
      if (chart != null) chart.dispose();
    };
  }, []);

  customClass = customClass
    ? "am-chart-uv-gauge " + customClass
    : "am-chart-uv-gauge";
  return (
    <>
      <div className={customClass} id="chartdiv"></div>
    </>
  );
};

export default UVGauge;
