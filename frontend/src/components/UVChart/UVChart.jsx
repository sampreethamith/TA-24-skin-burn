import React, { useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { getLocationHistory } from "../../services/getLocationHistory";

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end
// am4core.options.autoSetClassName = true;

const UVChart = () => {
  const location = useSelector((state) => state.location);
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);
    if (location.isLocationEnabled) {
      const getLocationUVHistory = async (latitude, longitude) => {
        try {
          const { data } = await getLocationHistory(
            latitude,
            longitude,
            "hourly"
          );
          
          // data.forEach((item, index) => {
          //   item[index]['dt'] = new Date(item[index]['dt'] * 1000);
          // })
          console.log(data)
          x.paddingRight = 20;
          x.data = data;

          let dateAxis = x.xAxes.push(new am4charts.DateAxis());
          dateAxis.renderer.grid.template.location = 0;

          let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
          valueAxis.tooltip.disabled = true;
          valueAxis.renderer.minWidth = 35;

          let series = x.series.push(new am4charts.LineSeries());
          series.dataFields.dateX = "dt";
          series.dataFields.valueY = "uvi";
          series.tooltipText = "{valueY.value}";
          x.cursor = new am4charts.XYCursor();

          let scrollbarX = new am4charts.XYChartScrollbar();
          scrollbarX.series.push(series);
          x.scrollbarX = scrollbarX;

          chart.current = x;
        } catch (error) {
          console.log(error);
        }
      };
      getLocationUVHistory(location.latitude, location.longitude);
    }

    return () => {
      x.dispose();
    };
  });

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default UVChart;
