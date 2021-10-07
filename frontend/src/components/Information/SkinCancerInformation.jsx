import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { getSkinCancerInfo } from "../../services/InformationPages/getSkinCancerInfo";
import "./css/SunScreenInformation.css";
import sunscreen_image from "../Prevention/Images/skincancer_title.gif";
import { Container, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import bcc_1 from "./images/bcc_1.png";
import bcc_2 from "./images/bcc_2.png";
import bcc_3 from "./images/bcc_3.png";
import bcc_4 from "./images/bcc_4.png";
import scc_1 from "./images/scc_1.png";
import scc_2 from "./images/scc_2.png";
import scc_3 from "./images/scc_3.png";
import mel_1 from "./images/mel_1.png";
import mel_2 from "./images/mel_2.png";
import mel_3 from "./images/mel_3.png";
import mel_4 from "./images/mel_4.png";
import mel_5 from "./images/mel_5.png";
import mel_6 from "./images/mel_6.png";
import mcc_1 from "./images/mcc_1.jpg";
import mcc_2 from "./images/mcc_2.jpg";
import mcc_3 from "./images/mcc_3.jpg";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";
import { useHistory } from "react-router-dom";

const SkinCancerInformation = () => {
  const history = useHistory();
  const SkinCancerData = getSkinCancerInfo();
  const bcc_images = [bcc_1, bcc_2, bcc_3, bcc_4];
  const scc_images = [scc_1, scc_2, scc_3];
  const mel_images = [mel_1, mel_2, mel_3, mel_4, mel_5, mel_6];
  const mcc_images = [mcc_1, mcc_2, mcc_3];

  function getImageArray(currentHeader) {
    if (
      currentHeader
        .toLowerCase()
        .includes("Basal cell carcinoma".toLocaleLowerCase())
    )
      return bcc_images;
    else if (
      currentHeader
        .toLowerCase()
        .includes("Squamous cell carcinoma".toLocaleLowerCase())
    )
      return scc_images;
    else if (
      currentHeader.toLowerCase().includes("Melanoma".toLocaleLowerCase())
    )
      return mel_images;
    else if (
      currentHeader
        .toLowerCase()
        .includes("Merkel cell carcinoma".toLocaleLowerCase())
    )
      return mcc_images;
    else return [];
  }

  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/skincancer",
      title: "Skin Cancer",
    },
    {
      href: "/skincancer/skincancer-information",
      title: "Skin Cancer Information",
      active: "active",
    },
  ];

  return (
    <>
      <Container className="information-page white-text">
        <div className="content-margin">
          <BreadCrumbComponent navigation={navigation} />
          <p className="information-page-title">{SkinCancerData.pageTitle}</p>
          <p className="information-page-quote">{SkinCancerData.pageQuote}</p>
          <p className="information-page-introduction">
            {SkinCancerData.introductionText}
          </p>
          <div className="information-introduction-content">
            <div>
              {SkinCancerData.paraTexts.map((paraText, paraIndex) => (
                <p>{paraText}</p>
              ))}
            </div>
            <div>
              <img src={sunscreen_image} />
              <Button
                variant="outline-warning information-introduction-content-bottom-margin"
                onClick={() => history.push("/prevention/selfExam")}
              >
                Take a Self Check
              </Button>
            </div>
          </div>
          <Accordion defaultActiveKey="0" flush>
            {SkinCancerData.tiles.map((item, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>
                  <div className="information-child">
                    <div className="information-child-div">
                      <div>
                        <p className="information-child-title">
                          {item.content[0].title}
                        </p>
                        <p className="information-child-text">
                          {item.content[0].text}
                        </p>
                        <p className="information-child-title">
                          {item.content[1].title}
                        </p>
                        <p className="information-child-text">
                          {item.content[1].text}
                        </p>
                      </div>
                      <Carousel pause="hover">
                        {getImageArray(item.header).map(
                          (imageObj, imgIndex) => (
                            <Carousel.Item>
                              <img src={imageObj} alt="imgIndex" />
                            </Carousel.Item>
                          )
                        )}
                      </Carousel>
                    </div>
                    {item.content.map((childItem, childIndex) =>
                      childIndex > 1 ? (
                        <div className="information-child">
                          <p className="information-child-title">
                            {childItem.title}
                          </p>
                          {typeof childItem.text == "string" ? (
                            <p className="information-child-text">
                              {childItem.text}
                            </p>
                          ) : (
                            <ul>
                              {childItem.text.map(
                                (childlistItem, childeListIndex) => (
                                  <li>{childlistItem}</li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default SkinCancerInformation;
