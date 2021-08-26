import React from "react";
import { Container } from "react-bootstrap";
import Calculator from "./Calculator";
import CalculatedInformation from "./CalculatedInformation";

function get_spf_by_uvi(skin_tone, uv_index) {
  const calcMetaData = {
    uvies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    skins: [
      {
        skin: "Type 1",
        tone: "Very pale skin",
        relation: [10, 10, 26, 26, 26, 36, 36, 47, 47, 47, 57],
      },
      {
        skin: "Type 2",
        tone: "Fair skin",
        relation: [9, 9, 22, 22, 22, 30, 30, 39, 39, 39, 48],
      },
      {
        skin: "Type 3",
        tone: "Medium skin",
        relation: [4, 4, 11, 11, 11, 15, 15, 20, 20, 20, 24],
      },
      {
        skin: "Type 4",
        tone: "Light brown skin",
        relation: [3, 3, 7, 7, 7, 10, 10, 13, 13, 13, 16],
      },
      {
        skin: "Type 5",
        tone: "Dark brown skin",
        relation: [2, 2, 4, 4, 4, 6, 6, 8, 8, 8, 10],
      },
      {
        skin: "Type 6",
        tone: "Black skin",
        relation: [1, 1, 3, 3, 3, 5, 5, 6, 6, 6, 8],
      },
    ],
  };
  try {
    const uvi = Math.ceil(uv_index);
    const index_uvi = calcMetaData.uvies.indexOf(uvi);
    let spf_level = -1;
    calcMetaData.skins.forEach((item, index) => {
      if (item.tone.toLowerCase() === skin_tone.toLowerCase()) {
        spf_level = item.relation[index_uvi];
        return;
      }
    });
    return spf_level;
  } catch (error) {
    console.log(error);
    return -1;
  }
}

// function get_clothing(num_of_items) {
//   const clothMetaData = [
//     "Long body coverage",
//     "White or pastel colours",
//     "UV absorbers",
//     "Moisture content",
//     "More layering Fabric"
//   ]
//   return [clothMetaData[1], clothMetaData[3], clothMetaData[2]];
// }

const SunCalculator = () => {
  console.log(get_spf_by_uvi("Fair skin", 4.0));
  return (
    <div className="block">
      <Container>
        <div className="sun-calculator-container">
          <Calculator />
          <CalculatedInformation />
        </div>
      </Container>
    </div>
  );
};

export default SunCalculator;
