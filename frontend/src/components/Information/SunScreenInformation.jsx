import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { getSunScreenInfo } from "../../services/InformationPages/getSunScreenInfo";
import "./css/SunScreenInformation.css";
import sunscreen_image from "./images/sunscreen_1.png";
import { Container } from "react-bootstrap";
import sunscreen_5w from "./images/sunscreen_5w.png";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import GroupIcon from "@mui/icons-material/Group";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SPFIcon from "./images/SPF.svg";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

const SunScreenInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/information/sunscreen",
      title: "Sunscreen Information",
      active: "active",
    },
  ];

  const SunScreenData = getSunScreenInfo();
  return (
    <Container className="information-page white-text">
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
          <img className="custome-img-style" src={sunscreen_image} data-aos="zoom-in" />
        </div>
        <div className="white-text">
          <Timeline position="alternate">
            <TimelineItem data-aos="fade-up" data-aos-duration="1200">
              <TimelineSeparator>
                {/* <TimelineConnector /> */}
                <TimelineDot color="warning">
                  <GroupIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  className="primary-text"
                  variant="h6"
                  component="span"
                >
                  Who
                </Typography>
                <Typography>Everyone under the sun</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos="fade-up" data-aos-duration="1500">
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning" variant="outlined">
                  <img src={SPFIcon} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color="warning" sx={{ py: "12px", px: 2 }}>
                <Typography
                  className="primary-text"
                  variant="h6"
                  component="span"
                >
                  What
                </Typography>
                <Typography>
                  Broad spectrum SPF 15 or higher; SPF 30 or higher for a day
                  outdoors
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos="fade-up" data-aos-duration="1200">
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning">
                  <AccessTimeFilledIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  className="primary-text"
                  variant="h6"
                  component="span"
                >
                  When
                </Typography>
                <Typography>
                  Every day; 30 minutes prior to going outdoors. Reapply every
                  two hours
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos="fade-up" data-aos-duration="1500">
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning" variant="outlined">
                  <AccessibilityIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  className="primary-text"
                  variant="h6"
                  component="span"
                >
                  Where
                </Typography>
                <Typography>All exposed skin</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos="fade-up" data-aos-duration="1200">
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning">
                  <CleanHandsIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  className="primary-text"
                  variant="h6"
                  component="span"
                >
                  How
                </Typography>
                <Typography>
                  One ounce (shot glass full) to entire body for each
                  application
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos="fade-up" data-aos-duration="1500">
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning" variant="outlined">
                  <HealthAndSafetyIcon />
                </TimelineDot>
                {/* <TimelineConnector /> */}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  className="primary-text"
                  variant="h6"
                  component="span"
                >
                  Why
                </Typography>
                <Typography>
                  Reduce your risk of skin damage and skin cancer!
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <p className="information-page-introduction primary-text">
          Learn more about SunScreen by following the below question-answers:
        </p>
        <Accordion defaultActiveKey="0" flush>
          {SunScreenData.tiles.map((item, index) => (
            <Accordion.Item data-aos="fade-up" data-aos-duration="1200" eventKey={index}>
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
      </div>
      {/* <img src={sunscreen_5w} data-aos="zoom-in-up" /> */}
      <br/>
      <br/>
      <br/>
    </Container>
  );
};

export default SunScreenInformation;
