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
              <CardWithCounter />
            </Col>
            <Col>
              <CardWithCounter />
            </Col>
            <Col>
              <CardWithCounter />
            </Col>
          </Row>
        </Animated>
      </Container>
    </section>
  );
};

export default DataInformatiom;
