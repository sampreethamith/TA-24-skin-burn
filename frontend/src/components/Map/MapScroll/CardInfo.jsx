import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

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
  style,
  cardBackColor,
}) => {
  const styleToApply =
    style == null
      ? {
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          height: `300%`,
          visibility: visibility,
        }
      : style;
  const cardStyle =
    cardBackColor == null
      ? {}
      : {
          backgroundColor: cardBackColor,
        };
  return (
    <div style={styleToApply}>
      <Card className="card-info" style={cardStyle}>
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
