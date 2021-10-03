import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { getSunScreenInfo } from "../../services/InformationPages/getSunScreenInfo";
import "./css/SunScreenInformation.css";
import sunscreen_image from "./images/sunscreen.svg";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import sunscreen_5w from './images/sunscreen_5w.png'

const SunScreenInformation = () => {
  const SunScreenData = getSunScreenInfo();
  return (
    <>
      <Container className="information-page white-text">
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
          <img src={sunscreen_image} />
        </div>
        <Accordion defaultActiveKey="0" flush>
          {SunScreenData.tiles.map((item, index) => (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>
                {item.content.map((childItem, childIndex) => (
                  <div className="information-child">
                    <p className="information-child-title">{childItem.title}</p>
                    {typeof childItem.text == "string" ? (
                      <p className="information-child-text">{childItem.text}</p>
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
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <img src={sunscreen_5w} />
      </Container>
    </>
  );
};

export default SunScreenInformation;
