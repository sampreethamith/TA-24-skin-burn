import React from "react";
import CardWithBorderPrimary from "../../Common/CardWithBorderPrimary";
import { Container } from "react-bootstrap";
import white from "../Images/white.png";
import paleWhite from "../Images/pale_white.png";
import brown from "../Images/brown.png";
import dark from "../Images/dark.png";

const HandPanel = () => {
  const data = [
    {
      title: "Pale White",
      image: paleWhite,
      altName: "Buld with a idea representing quiz",
    },
    {
      title: "White",
      image: white,
      altName: "Buld with a idea representing quiz",
    },
    {
      title: "Brown",
      image: brown,
      altName: "Buld with a idea representing quiz",
    },
    {
      title: "Dark",
      image: dark,
      altName: "Buld with a idea representing quiz",
    },
  ];

  const childToParent = (childData) => {
    console.log(childData);
  };
  return (
    <Container>
      <div data-aos="zoom-in-up" className="route-card">
        <CardWithBorderPrimary data={data[0]} childToParent={childToParent} />
        <CardWithBorderPrimary data={data[1]} childToParent={childToParent} />
        <CardWithBorderPrimary data={data[2]} childToParent={childToParent} />
        <CardWithBorderPrimary data={data[3]} childToParent={childToParent} />
      </div>
    </Container>
  );
};

export default HandPanel;
