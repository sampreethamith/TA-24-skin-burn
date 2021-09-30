import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import skin_cancer_image from "../Data/skin-cancer-img.jpg";
import "../Css/ImageInfoCard.css";
import { useHistory } from "react-router-dom";

const ImageInfoCard = () => {
  const history = useHistory();
  return (
    <Container
      data-aos="zoom-out"
      data-aos-duration="1000"
      className="bottom-spacing"
    >
      <Row className="image-info-card-row">
        <Col className="image-info-card-col" sm={4}>
          <img src={skin_cancer_image} />
        </Col>
        <Col sm={8} className="image-info-card">
          <h3 className="secondary-text">Skin Cancer</h3>
          <p>
            The two main causes of skin cancer are the sun’s harmful ultraviolet
            (UV) rays and the use of UV tanning beds.Four type of skin cancers
            directly caused by UV radiation with skin:
          </p>
          <ul>
            <li>Basal cell carcinoma (BCC)</li>
            <li>Squamous cell carcinoma</li>
            <li>Melanoma</li>
            <li>Merkel cell carcinoma</li>
          </ul>
          <Button
            onClick={() => history.push("/skincancer")}
            className="image-info-card-button"
            variant="dark"
          >
            Learn more
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageInfoCard;
