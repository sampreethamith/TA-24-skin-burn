import React from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CardWithCounter from "../Common/CardWithCounter";
import { Animated } from "react-animated-css";

const DataInformatiom = () => {
  return (
    <section className="block block--light">
      <Container>
        <Animated
          animationIn="bounceIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <Row>
            <Col>
              <CardWithCounter
                border="data-infromation-right-border"
                data="66.67%"
                body="Diagnosed with skin cancer"
              />
            </Col>
            <Col>
              <CardWithCounter
                border="data-infromation-right-border"
                data="2072"
                body="Deaths due to sunburn"
              />
            </Col>
            <Col>
              <CardWithCounter data="92%" body="Melanoma survival rate" />
            </Col>
          </Row>
        </Animated>
      </Container>
    </section>
  );
};

export default DataInformatiom;
