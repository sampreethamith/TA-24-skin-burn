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
    description: `The sopt that is not symmetrical could be the potential sign of skin cancer. 
    Which means the left half has a different shape than the right half if you draw
    a line to split the spot to two part from its middle.`,
    imgP: s1,
  },
  {
    header: `Irregularly shaped Border `,
    description: `Becareful for the sopt that do not have a regular shap board. Such as the
    changing of colour depth or notch in the shape at board.`,
    imgP: s2,
  },
  {
    header: `Multiple color in one spot`,
    description: `If a spot appers more than one color such as blck, blue, red, white. Then it possibly be a sign of skin cancer.`,
    imgP: s3,
  },
  {
    header: `Growing spots`,
    description: `The sopt that getting bigger during the day will possibly become skin cancer.`,
    imgP: s4,
  },
  {
    header: `Evolving spots`,
    description: `Changing sopts and Growing spots are the sign of skin cancer. Please becareful if you feel a spot is growing or changing.`,
    imgP: s5,
  },
];

const SkinCancerSympotms = () => {
  return (
    <div className="block">
      <Container>
        <h1>Skin cancer sympotms</h1>
        <p className="white-text">
          Please try to check all parts of your body including the part that not
          exposed to the sun such as the skin be tween the foot finger. If you
          are not sure whether the black sign is normal mole or me melanoma,
          please have a talk with your GP.
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
