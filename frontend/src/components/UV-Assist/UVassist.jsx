import React, { useEffect, useState } from "react";
import IframeWillyWeatherLaptop from "./IframeWillyWeatherLaptop";
import IframeWillyWeatherMobile from "./IframeWillyWeatherMobile";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes from "@amcharts/amcharts4/themes/dark";
import uvindexData from "./data/state_month_uv.json";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import radara_chart_help from "./data/radar_chart_help.jpg";

am4core.useTheme(am4themes);
var startYear = 2011;
var endYear = 2020;
var currentYear = 2020;
var chart = null;

function setUpChart() {
  chart = am4core.create("chartdiv", am4charts.RadarChart);
  var colorSet = new am4core.ColorSet();
  chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
  chart.hiddenState.properties.opacity = 0;

  chart.startAngle = 270 - 180;
  chart.endAngle = 270 + 180;

  chart.padding(5, 15, 5, 10);
  chart.radius = am4core.percent(65);
  chart.innerRadius = am4core.percent(40);

  // year label goes in the middle
  var yearLabel = chart.radarContainer.createChild(am4core.Label);
  yearLabel.horizontalCenter = "middle";
  yearLabel.verticalCenter = "middle";
  yearLabel.fill = am4core.color("#673AB7");
  yearLabel.fontSize = 30;
  yearLabel.text = String(currentYear);

  // zoomout button
  var zoomOutButton = chart.zoomOutButton;
  zoomOutButton.dx = 0;
  zoomOutButton.dy = 0;
  zoomOutButton.marginBottom = 15;
  zoomOutButton.parent = chart.rightAxesContainer;

  // scrollbar
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarX.parent = chart.rightAxesContainer;
  chart.scrollbarX.orientation = "vertical";
  chart.scrollbarX.align = "center";
  chart.scrollbarX.exportable = false;

  // vertical orientation for zoom out button and scrollbar to be positioned properly
  chart.rightAxesContainer.layout = "vertical";
  chart.rightAxesContainer.padding(120, 20, 120, 20);

  // category axis
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "month";

  var categoryAxisRenderer = categoryAxis.renderer;
  var categoryAxisLabel = categoryAxisRenderer.labels.template;
  categoryAxisLabel.location = 0.5;
  categoryAxisLabel.radius = 28;
  categoryAxisLabel.relativeRotation = 90;

  categoryAxisRenderer.fontSize = 11;
  categoryAxisRenderer.minGridDistance = 10;
  categoryAxisRenderer.grid.template.radius = -25;
  categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
  categoryAxisRenderer.grid.template.interactionsEnabled = false;

  categoryAxisRenderer.ticks.template.disabled = true;
  categoryAxisRenderer.axisFills.template.disabled = true;
  categoryAxisRenderer.line.disabled = true;

  categoryAxisRenderer.tooltipLocation = 0.5;
  categoryAxis.tooltip.defaultState.properties.opacity = 0;

  // value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 9;
  valueAxis.strictMinMax = true;
  valueAxis.tooltip.defaultState.properties.opacity = 0;
  valueAxis.tooltip.animationDuration = 0;
  valueAxis.cursorTooltipEnabled = true;
  valueAxis.zIndex = 10;

  var valueAxisRenderer = valueAxis.renderer;
  valueAxisRenderer.axisFills.template.disabled = true;
  valueAxisRenderer.ticks.template.disabled = true;
  valueAxisRenderer.minGridDistance = 20;
  valueAxisRenderer.grid.template.strokeOpacity = 0.05;

  // series
  var series = chart.series.push(new am4charts.RadarColumnSeries());
  series.columns.template.width = am4core.percent(90);
  series.columns.template.strokeOpacity = 0;
  series.dataFields.valueY = "value" + currentYear;
  series.dataFields.categoryX = "month";
  series.tooltipText = "{categoryX}:{valueY.value}";

  // this makes columns to be of a different color, depending on value
  series.heatRules.push({
    target: series.columns.template,
    property: "fill",
    minValue: 0,
    maxValue: 9,
    min: am4core.color("#673AB7"),
    max: am4core.color("#F44336"),
    dataField: "valueY",
  });

  // cursor
  var cursor = new am4charts.RadarCursor();
  chart.cursor = cursor;
  cursor.behavior = "zoomX";

  cursor.xAxis = categoryAxis;
  cursor.innerRadius = am4core.percent(40);
  cursor.lineY.disabled = true;

  cursor.lineX.fillOpacity = 0.2;
  cursor.lineX.fill = am4core.color("#000000");
  cursor.lineX.strokeOpacity = 0;
  cursor.fullWidthLineX = true;

  // year slider
  var yearSliderContainer = chart.createChild(am4core.Container);
  yearSliderContainer.layout = "vertical";
  yearSliderContainer.padding(0, 38, 0, 38);
  yearSliderContainer.width = am4core.percent(100);

  var yearSlider = yearSliderContainer.createChild(am4core.Slider);
  yearSlider.events.on("rangechanged", function () {
    updateRadarData(
      startYear + Math.round(yearSlider.start * (endYear - startYear))
    );
  });
  yearSlider.orientation = "horizontal";
  yearSlider.start = 1;
  yearSlider.exportable = false;

  chart.data = generateRadarData();

  var slider = yearSliderContainer.createChild(am4core.Slider);
  slider.start = 1;
  slider.exportable = false;
  slider.events.on("rangechanged", function () {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
  });

  function generateRadarData() {
    var data = [];
    var i = 0;
    for (var state in uvindexData) {
      var stateData = uvindexData[state];

      stateData.forEach(function (month) {
        var rawDataItem = { month: month[0] };

        for (var y = 1; y < month.length; y++) {
          rawDataItem["value" + (startYear + y - 1)] = parseFloat(
            month[y]
          ).toFixed(2);
        }

        data.push(rawDataItem);
      });

      createRange(state, stateData, i);
      i++;
    }
    return data;
  }

  function updateRadarData(year) {
    if (currentYear != year) {
      currentYear = year;
      yearLabel.text = String(currentYear);
      series.dataFields.valueY = "value" + currentYear;
      chart.invalidateRawData();
    }
  }

  function createRange(name, stateData, index) {
    var axisRange = categoryAxis.axisRanges.create();
    axisRange.axisFill.interactionsEnabled = true;
    axisRange.text = name;
    // first month
    axisRange.category = stateData[0][0];
    // last month
    axisRange.endCategory = stateData[stateData.length - 1][0];

    // every 3rd color for a bigger contrast
    axisRange.axisFill.fill = colorSet.getIndex(index * 3);
    axisRange.grid.disabled = true;
    axisRange.label.interactionsEnabled = false;
    axisRange.label.bent = true;

    var axisFill = axisRange.axisFill;
    axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
    axisFill.radius = -20; // negative radius means it is calculated from max radius
    axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
    axisFill.fillOpacity = 1;
    axisFill.togglable = true;

    axisFill.showSystemTooltip = true;
    axisFill.readerTitle = "click to zoom";
    axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    axisFill.events.on("hit", function (event) {
      var dataItem = event.target.dataItem;
      if (!event.target.isActive) {
        categoryAxis.zoom({ start: 0, end: 1 });
      } else {
        categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
      }
    });

    // hover state
    var hoverState = axisFill.states.create("hover");
    hoverState.properties.innerRadius = -10;
    hoverState.properties.radius = -25;

    var axisLabel = axisRange.label;
    axisLabel.location = 0.5;
    axisLabel.fill = am4core.color("#ffffff");
    axisLabel.radius = 3;
    axisLabel.relativeRotation = 0;
  }
}

const UVassist = () => {
  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
      },
    })
  );

  const [expanded, setExpanded] = React.useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentWidth, setCurrentWidth] = useState(
    document.documentElement.clientWidth
  );
  useEffect(() => {
    window.addEventListener("resize", onResize);
    setUpChart();
    return () => {
      window.removeEventListener("resize", onResize);
      chart.dispose();
    };
  });

  const onResize = () => {
    setCurrentWidth(document.documentElement.clientWidth);
  };

  return (
    <div
      className="text-center"
      style={{
        margin: `10px 40px`,
      }}
    >
      <ThemeProvider theme={theme}>
        <h1>UV Assist</h1>
        <Accordion
          expanded={expanded === "panel1"}
          defaultExpanded={true}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Historical UV index Summary:
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Contains historical UV index data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              style={{
                float: "right",
                zIndex: 9,
              }}
              onClick={handleOpen}
            >
              Open Help
            </Button>
            <Modal
              style={{
                overflow: "scroll",
              }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Understand the History UV Graph
                </Typography>
                <img style={{}} src={radara_chart_help} />
              </Box>
            </Modal>
            <div className="amChart-radar-timeline" id="chartdiv"></div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Current UV graph:
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Shows todays hourly UV index
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {currentWidth <= 450 && (
              <IframeWillyWeatherMobile currentWidth={currentWidth} />
            )}
            {currentWidth > 450 && (
              <IframeWillyWeatherLaptop currentWidth={currentWidth} />
            )}
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
};

export default UVassist;
