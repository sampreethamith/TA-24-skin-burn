import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/SunScreenInformation.css";
import { Container, Button } from "react-bootstrap";
import { getUVInfo } from "../../services/InformationPages/getUVinfo.js";
import CardWithBorderPrimary from "../Common/CardWithBorderPrimary";
import sunLightUVRays from "./images/sunLightUVRays.png";
import UVInformation from "./images/UVInformation.png";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";
import aboutUVIcon from "./images/aboutUvIcon.png";
import uvauvb from "./images/uvauvbicon.png";
import uvFunFact from "./images/uvFunFact.png";

const UVIndexInformation = () => {
  const [uvInfoType, setuvInfoType] = useState("");
  const SunScreenData = getUVInfo();
  const history = useHistory();

  const data = [
    {
      title: "About UV radiation",
      image: aboutUVIcon,
      altName: "Buld with a idea representing quiz",
    },
    {
      title: "UV Facts",
      image: uvFunFact,
      altName: "Buld with a idea representing quiz",
    },
    {
      title: "UVA and UVB risks",
      image: uvauvb,
      altName: "Buld with a idea representing quiz",
    },
  ];

  const typeOfUVSelected = (title) => {
    setuvInfoType(title);
  };

  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/information/ultraviolet",
      title: "UV Information",
      active: "active",
    },
  ];

  return (
    <Container className="information-page white-text ">
      <div className="content-margin">
        <BreadCrumbComponent navigation={navigation} />
        <p className="information-page-title">{SunScreenData.pageTitle}</p>
        <p className="information-page-quote">{SunScreenData.pageQuote}</p>
        <p className="information-page-introduction">
          {SunScreenData.introductionText}
        </p>
        <div className="information-introduction-content">
          <div>
            {SunScreenData.paraTexts.map((paraText, paraIndex) => (
              <p>{paraText}</p>
            ))}
          </div>
        </div>
        <div
          className="uv-information-card content-margin"
          data-aos="zoom-in-up"
        >
          <CardWithBorderPrimary
            data={data[0]}
            typeSelected={typeOfUVSelected}
            selected={uvInfoType === data[0].title}
          />
          <CardWithBorderPrimary
            data={data[1]}
            typeSelected={typeOfUVSelected}
            selected={uvInfoType === data[1].title}
          />
          <CardWithBorderPrimary
            data={data[2]}
            typeSelected={typeOfUVSelected}
            selected={uvInfoType === data[2].title}
          />
        </div>
        {uvInfoType === "About UV radiation" && (
          <div data-aos="zoom-in">
            <div className="content content-margin">
              <img
                src={sunLightUVRays}
                alt="sun light UV rays "
                className="image-size content-margin"
              />
              <div className="horizontal-line"></div>
              <div className="content-information content-margin">
                <h3 className="primary-text text-center">
                  What is UV radiation?
                </h3>
                <p>
                  UV radiation is part of the natural energy produced by the
                  sun. On the electromagnetic spectrum, UV light has shorter
                  wavelengths than visible light, so your eyes can’t see UV, but
                  your skin can feel it. Tanning beds also emit UV radiation.
                </p>
              </div>
              <div>
                <p>
                  Two types of UV light are proven to contribute to the risk for
                  skin cancer:
                </p>
                <ul>
                  <li>
                    <p>
                      Ultraviolet A (UVA) has a longer wavelength, and is
                      associated with skin aging.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ultraviolet B (UVB) has a shorter wavelength and is
                      associated with skin burning.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center content-margin">
              <Button
                variant="warning"
                onClick={() => history.push("/prevention/map")}
              >
                Check UV at your Current Location
              </Button>
            </div>
          </div>
        )}
        {uvInfoType === "UV Facts" && (
          <div data-aos="zoom-in-up">
            <div className="content content-margin">
              <div className="horizontal-line"></div>
              <div className="content-information content-margin">
                <h3 className="primary-text text-center">
                  What you need to know
                </h3>
                <ol>
                  <li>
                    <p>
                      UV exposure is a powerful attack on the skin, creating
                      damage that can range from premature wrinkles to dangerous
                      skin cancer.
                    </p>
                  </li>
                  <li>
                    <p>
                      Damage from UV exposure is cumulative and increases your
                      skin cancer risk over time. While your body can repair
                      some of the DNA damage in skin cells, it can’t repair all
                      of it. The unrepaired damage builds up over time and
                      triggers mutations that cause skin cells to multiply
                      rapidly. That can lead to malignant tumors.
                    </p>
                  </li>
                  <li>
                    <p>
                      The degree of damage depends on the intensity of UV rays
                      and the length of time your skin has been exposed without
                      protection. Location is also a factor. If you live where
                      the sun is strong year-round, your exposure level and risk
                      increase.
                    </p>
                  </li>
                  <li>
                    <p>
                      You can easily reduce your likelihood of developing skin
                      cancer by taking care to protect yourself against UV
                      radiation.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="horizontal-line"></div>
              <div className="content-information content-margin">
                <h3 className="primary-text text-center">UV Index Map</h3>
                <p>Quick check what to do when UV Index is high.</p>
                <img
                  src={UVInformation}
                  alt="UV level information"
                  className="image-size"
                />
              </div>
            </div>
            <div className="text-center button-margin-bottom">
              <Button
                variant="warning"
                onClick={() => history.push("/prevention/goingOut")}
              >
                Make a safe checks before you go out.
              </Button>
            </div>
          </div>
        )}
        {uvInfoType === "UVA and UVB risks" && (
          <div data-aos="zoom-in-up">
            <div className="content content-margin">
              <div className="horizontal-line"></div>
              <div className="uv-row-content content-margin">
                <div className="uv-title">
                  <h3 className="primary-text">UVB</h3>
                </div>
                <ul>
                  <li>
                    <p>
                      UVB penetrates and damages the outermost layers of your
                      skin. Overexposure causes suntan, sunburn and, in severe
                      cases, blistering.
                    </p>
                  </li>
                  <li>
                    <p>
                      UVB is connected to the Sun Protection Factor (SPF) on
                      labels of sunscreen products. The SPF number tells you how
                      long the sun’s radiation (including some of the UVA) would
                      take to redden your skin when using that product compared
                      to the time without sunscreen.
                    </p>
                  </li>
                  <li>
                    <p>
                      UVB intensity fluctuates. While the sun’s rays are
                      strongest and pose the highest risk late-morning to
                      mid-afternoon from spring to fall in temperate climates
                      and even greater timespans in tropical climates, UVB rays
                      can damage your skin year-round, especially at high
                      altitudes or on reflective surfaces like snow or ice.
                    </p>
                  </li>
                  <li>
                    <p>UVB rays can be filtered and do not penetrate glass.</p>
                  </li>
                </ul>
              </div>
              <div className="horizontal-line"></div>
              <div className="uv-row-content content-margin">
                <div className="uv-title">
                  <h3 className="primary-text">UVA</h3>
                </div>
                <ul>
                  <li>
                    <p>
                      UVA rays cause tanning, and the shorter wavelengths of UVA
                      also cause sunburn. There is no such thing as a safe or
                      healthy tan. UVA radiation is proven to contribute to the
                      development of skin cancer.
                    </p>
                  </li>
                  <li>
                    <p>
                      UVA is connected to the “broad-spectrum protection” you
                      see on the labels of sunscreen products. Early sunscreens
                      only protected your skin from UVB rays, but once it was
                      understood how dangerous UVA rays were, sunscreen
                      manufacturers began adding ingredients to protect you from
                      both UVB and UVA across this broader spectrum.
                    </p>
                  </li>
                  <li>
                    <p>
                      UVA rays, while slightly less intense than UVB, penetrate
                      your skin more deeply. Exposure causes genetic damage to
                      cells on the innermost part of your top layer of skin,
                      where most skin cancers occur. The skin tries to prevent
                      further damage by darkening, resulting in a tan. Over
                      time, UVA also leads to premature aging and skin cancer.
                    </p>
                  </li>
                  <li>
                    <p>
                      UVA radiation is the main type of light used in most
                      tanning beds. Once thought to be safe, we now know it is
                      just the opposite.
                    </p>
                  </li>
                  <li>
                    <p>
                      UVA is everywhere. UVA accounts for up to 95 percent of
                      the UV radiation reaching the earth. These rays maintain
                      the same level of strength during daylight hours
                      throughout the year. This means that during a lifetime, we
                      are all exposed to a high level of UVA rays.
                    </p>
                  </li>
                  <li>
                    <p>UVA can penetrate windows and cloud cover.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default UVIndexInformation;
