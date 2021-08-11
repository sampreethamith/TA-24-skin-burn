import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctor from "../../images/doctor.png";
import { Animated } from "react-animated-css";

const Hero = () => {
  return (
    <section className="block block--dark block--skewed-right">
      <Container>
        <Row>
          <Col>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h3>Hello, Welcome to Skin dermatology information center</h3>
            </Animated>
          </Col>
          <Col>
            <Animated
              animationIn="bounceInRight"
              animationOut="fadeOut"
              isVisible={true}
            >
              <img src={doctor} alt="Doctorimage" className="img-doc" />
            </Animated>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
