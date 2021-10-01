import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../MapScroll/mapscroll.css";

const CardInfo = ({
  textOneStart,
  textOneBold,
  textOneEnd,
  textTwoStart,
  textTwoBold,
  textTwoEnd,
  textThreeStart,
  textThreeBold,
  textThreeEnd,
  visibility,
  Customclass,
  cardBackColor,
}) => {
  // textOneStart = "In 2016,";
  // textOneBold = " Victoria ";
  // textOneEnd = "recorded the highest ultraviolet rate of 14.9";
  // textTwoStart = "According to the data there are";
  // textTwoBold = " 304 deaths ";
  // textTwoEnd = "due to skin cancer in Victoria 2017.";
  // textThreeBold = " 2989 people ";
  // textThreeEnd =
  //   " got affected by sunburn cases severe damage to their skin in the year of 2017.";
  // className = "map-scroll-flex-normal-card";
  cardBackColor = cardBackColor
    ? "card-info map-scroll-card-background-primary"
    : "card-info map-scroll-card-background-white";
  return (
    <div className={Customclass}>
      <Card className={cardBackColor}>
        <CardContent>
          <Typography variant="h5" component="div">
            {textOneStart}
            <strong>{textOneBold}</strong>
            {textOneEnd}
          </Typography>
          <Typography variant="h5" component="div">
            {textTwoStart}
            <strong>{textTwoBold}</strong>
            {textTwoEnd}
          </Typography>
          <br />
          <Typography variant="h6" component="div">
            {textThreeStart}
            <strong>{textThreeBold}</strong>
            {textThreeEnd}{" "}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardInfo;
