import React from "react";
import { Container } from "react-bootstrap";
import RightInformationCard from "../Common/RightInformationCard";
import LeftInformationCard from "../Common/LeftInformationCard";
import s1 from "./../../images/sympotms/s1.png";
import s2 from "./../../images/sympotms/s2.png";
import s3 from "./../../images/sympotms/s3.png";
import s4 from "./../../images/sympotms/s4.png";
import s5 from "./../../images/sympotms/s5.png";

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
  return (
    <div className="block">
      <Container>
        <h1>Skin Cancer Symptoms</h1>
        <p className="white-text">
          Please try to check all parts of your body including the part that is
          not exposed to the sun such as the skin between the foot fingers. If
          you are not sure whether the black sign is a normal mole or melanoma,
          please talk with your GP.
        </p>
        <RightInformationCard data={cards_data[0]} />
        <LeftInformationCard data={cards_data[1]} />
        <RightInformationCard data={cards_data[2]} />
        <LeftInformationCard data={cards_data[3]} />
        <RightInformationCard data={cards_data[4]} />
      </Container>
    </div>
  );
};

export default SkinCancerSympotms;
