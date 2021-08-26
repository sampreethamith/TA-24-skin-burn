import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import skintype from "../../images/skin-type.jpeg";
import { Animated } from "react-animated-css";

const SkinCancerInformation = () => {
  return (
    <div className="block">
      <Container>
        <Row>
          <Col>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h1>Skin Cancer Information</h1>
              <p className="white-text">
                Skin Cancer is a disease in which cancer cells form in the
                tissues of the skin. The skin has several layers, but the two
                main layers are the upper layer, called the epidermis, and the
                lower or inner layer, called the dermis.
              </p>
              <h4>Skin Cancer devlop</h4>
              <p className="white-text">
                Skin Cancer develops when the cells of the skin are damaged.
                This causes cells to mutate, reproduce abnormally and form a
                mass of cancerous cells. The type of skin cancer that develops
                depends on the type of cells that are involved.
              </p>
              <h4>Causes of skin cancer </h4>
              <p className="white-text">
                Damage to the skin cells’ DNA leads to the cells mutating. This
                damage can be caused by ultraviolet radiation from sunlight and
                from tanning beds. Other factors may also contribute to the
                development of Skin Cancer since it can develop on parts of the
                body that are not normally exposed to these sources of
                ultraviolet light. Exposure to toxic substances or having a
                weakened immune system may also contribute to the development of
                skin cancer.
              </p>
              <h4>Skin Cancer Spread</h4>
              <p className="skin-cancer-informaton-text">
                Whether and how skin cancers spread depends on the type of skin
                cancer. Basal cell carcinomas and squamous cell cancers rarely
                spread. Melanomas are the most likely type of skin cancer to
                spread and metastasise. Melanoma can spread to any part of the
                body, but the most common areas it spreads to are the lungs,
                liver, bones, brain, abdomen and lymph nodes.
              </p>
            </Animated>
          </Col>
          <Col>
            <Animated
              animationIn="bounceInRight"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className="image-block">
                <div className="image-background">
                  <img src={skintype} alt="Type of Skin Cancer Displayed" />
                </div>
              </div>
            </Animated>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkinCancerInformation;
