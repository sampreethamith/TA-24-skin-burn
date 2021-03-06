import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import RightInformationCard from "../Common/RightInformationCard";
import LeftInformationCard from "../Common/LeftInformationCard";
import s1 from "./../../images/sympotms/s1.png";
import s2 from "./../../images/sympotms/s2.png";
import s3 from "./../../images/sympotms/s3.png";
import s4 from "./../../images/sympotms/s4.png";
import s5 from "./../../images/sympotms/s5.png";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";

const cards_data = [
  {
    header: `Asymmetrical spots`,
    description: `A spot that is not symmetrical could be a potential sign of skin cancer. This means the left half has a different shape than the right half if you draw a line to split the spot into two-part from its middle.`,
    imgP: s1,
  },
  {
    header: `Irregularly shaped Border `,
    description: `Be careful about the spot that does not have a regular shape board. Such as the changing of color depth or notch in the shape at the board.`,
    imgP: s2,
  },
  {
    header: `Multiple color in one spot`,
    description: `If a spot appears more than one color such as black, blue, red, white. Then it might be a sign of skin cancer.`,
    imgP: s3,
  },
  {
    header: `Growing spots`,
    description: `The spot that getting bigger during the day will possibly become skin cancer.`,
    imgP: s4,
  },
  {
    header: `Evolving spots`,
    description: `Changing spots and Growing spots are the sign of skin cancer. Please be careful if you feel a spot is growing or changing.`,
    imgP: s5,
  },
];

const SkinCancerSympotms = () => {
  const [showImage, setShowImage] = useState(false);

  const onShowImageClick = () => {
    setShowImage(!showImage);
  };

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
      href: "/skincancer/skincancer-symptom",
      title: "Skin Cancer Symptom",
      active: "active",
    },
  ];

  return (
    <div className="block">
      <Container>
        <BreadCrumbComponent navigation={navigation} />
        <h1>Skin Cancer Symptoms</h1>
        <p className="white-text">
          Please try to check all parts of your body including the part that is
          not exposed to the sun such as the skin between the foot fingers. If
          you are not sure whether the black sign is a normal mole or melanoma,
          please talk with your GP.
        </p>

        {!showImage && (
          <div>
            <h2>Sensitive Content</h2>
            <p className="white-text">
              Below Images contains sensitive content which could be disturbing
              to some people.
            </p>
            <Button className="primary-button" onClick={onShowImageClick}>
              See Images
            </Button>
          </div>
        )}

        {showImage && (
          <div>
            <RightInformationCard data={cards_data[0]} />
            <LeftInformationCard data={cards_data[1]} />
            <RightInformationCard data={cards_data[2]} />
            <LeftInformationCard data={cards_data[3]} />
            <RightInformationCard data={cards_data[4]} />
            <div className="text-center">
              <Button className="primary-button" onClick={onShowImageClick}>
                {" "}
                Hide Images
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SkinCancerSympotms;
