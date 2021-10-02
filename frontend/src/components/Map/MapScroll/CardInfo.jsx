import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./maps.css";

const CardInfo = ({ cardType, headingText, scrollToLearnText, data }) => {
  const cardStyle =
    cardType === "primary"
      ? "custom-card card-primary"
      : "custom-card card-white";

  return (
    <CardContent className={cardStyle}>
      {headingText && (
        <Typography color="text.secondary" gutterBottom>
          {headingText}
        </Typography>
      )}
      {scrollToLearnText && (
        <Typography color="text.secondary" className="text-center">
          Scroll To Learn More
        </Typography>
      )}
      {data && (
        <>
          <Typography>
            {data.firstText}
            <strong>{data.state}</strong>
            {data.secondText}
          </Typography>
          <Typography>
            {data.thirdText}
            <strong>{data.deaths}</strong>
            {data.fourthText}
          </Typography>
          <Typography>
            <strong>{data.TotalPeople}</strong>
            {data.fifthText}
          </Typography>
        </>
      )}
    </CardContent>
  );
};

export default CardInfo;
