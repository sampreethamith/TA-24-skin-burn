import React, { useState, useRef, useEffect } from "react";
import CardWithBorderPrimary from "../Common/CardWithBorderPrimary";
import white from "./Images/white.png";
import paleWhite from "./Images/pale_white.png";
import brown from "./Images/brown.png";
import dark from "./Images/dark.png";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./Css/PreventionChecklist.css";
import LocationUVPanel from "./PreventionComponents/LocationUVPanel";
import ladySittingInBeach from "./Images/ladySittingInBeach.png";
import RightInformationStep from "./PreventionComponents/RightInformationStep";
import LeftInformationStep from "./PreventionComponents/LeftInformationStep";
import getSPFByUvi from "../../services/getSPFByUvi";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";

const PreventionCheckList = () => {
  const [handSelected, setHandSelected] = useState("");
  const [handSelectedNext, setHandSelectedNext] = useState(false);
  const [uviGaugeSelectedNext, setuviGaugeSelectedNext] = useState(false);
  const [stepOneNextSelected, setStepOneNextSelected] = useState(false);
  const [stepTwoNextSelected, setStepTwoNextSelected] = useState(false);
  const [uvi, setUvi] = useState(0);

  const [spfLevel, setspfLevel] = useState(0);

  const handleChangeUvi = (uviLevelChanged) => {
    setUvi(uviLevelChanged);
  };

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

  useEffect(() => {
    const spfValue = getSPFByUvi(handSelected, uvi);
    setspfLevel(spfValue);
  });

  const skinColorSelected = (title) => {
    setHandSelected(title);
  };

  const scrollDown = () => {
    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 600);
    }, 100);
  };

  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/prevention/goingOut",
      title: "Going Out",
      active: "active",
    },
  ];

  return (
    <div className="block">
      <Container>
        <BreadCrumbComponent navigation={navigation} />
        <h2 className="top-bottom-margin">
          Let us help you prepare a checklist before you go out
        </h2>
        <h3 className="top-bottom-margin">Select your Skin Color:</h3>
        <div data-aos="zoom-in-up" className="route-card">
          <CardWithBorderPrimary
            data={data[0]}
            typeSelected={skinColorSelected}
            selected={handSelected === "Pale White"}
          />
          <CardWithBorderPrimary
            data={data[1]}
            typeSelected={skinColorSelected}
            selected={handSelected === "White"}
          />
          <CardWithBorderPrimary
            data={data[2]}
            typeSelected={skinColorSelected}
            selected={handSelected === "Brown"}
          />
          <CardWithBorderPrimary
            data={data[3]}
            typeSelected={skinColorSelected}
            selected={handSelected === "Dark"}
          />
        </div>
        {handSelected && (
          <Button
            variant="warning"
            className="top-bottom-margin"
            onClick={() => {
              setHandSelectedNext(true);
              scrollDown();
            }}
          >
            Next
          </Button>
        )}
        {handSelectedNext && (
          <div data-aos="zoom-in">
            <LocationUVPanel uviChanged={handleChangeUvi} />
            <Button
              variant="warning"
              className="top-bottom-margin"
              onClick={() => {
                setuviGaugeSelectedNext(true);
                scrollDown();
              }}
            >
              Next
            </Button>
          </div>
        )}
        {uviGaugeSelectedNext && (
          <div data-aos="fade-right">
            <h3 className="top-bottom-margin">1st Step: Cover it Up</h3>
            <Row className="image-info-card-row ">
              <Col className="image-info-card-col" sm={4}>
                <img src={ladySittingInBeach} alt="lady sitting in beach" />
              </Col>
              <Col sm={8} className="image-info-card">
                <h3 className="secondary-text">
                  Look for, UPF Cloths Level 50
                </h3>
                <p className="step-one-content">
                  UPF stands for ultraviolet protection factor.On labels for
                  clothing, hats and fabrics. The number indicates what fraction
                  of the sun’s UV rays can penetrate the fabric.
                </p>
                <p className="step-one-content">
                  A shirt labeled UPF 50, for example, allows just 1/50th of the
                  UV radiation to reach your skin.
                </p>
                <p className="step-one-pitfall">The pitfall:</p>
                <p className="step-one-content">
                  Any clothing leaves some skin exposed, so you need sunscreen,
                  too. Don’t forget to apply it to your hands, especially after
                  washing them.
                </p>
              </Col>
            </Row>
            <Button
              variant="warning"
              className="top-bottom-margin"
              onClick={() => {
                setStepOneNextSelected(true);
                scrollDown();
              }}
            >
              Next
            </Button>
          </div>
        )}
        {stepOneNextSelected && (
          <div data-aos="fade-left">
            <RightInformationStep spf={spfLevel} />
            <Button
              variant="warning"
              className="top-bottom-margin"
              onClick={() => {
                setStepTwoNextSelected(true);
                scrollDown();
              }}
            >
              Next
            </Button>
          </div>
        )}
        {stepTwoNextSelected && (
          <div className="top-bottom-margin" data-aos="fade-right">
            <LeftInformationStep />
          </div>
        )}
      </Container>
    </div>
  );
};

export default PreventionCheckList;
