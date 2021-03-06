export default function getSPFByUvi(skin_tone, uv_index) {
  const calcMetaData = {
    uvies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    skins: [
      {
        skin: "Type 1",
        tone: "Pale White",
        relation: [10, 10, 26, 26, 26, 36, 36, 47, 47, 47, 57, 64, 70, 79, 88],
      },
      // {
      //   skin: "Type 2",
      //   tone: "Fair skin",
      //   relation: [9, 9, 22, 22, 22, 30, 30, 39, 39, 39, 48],
      // },
      {
        skin: "Type 3",
        tone: "White",
        relation: [4, 4, 11, 11, 11, 15, 15, 20, 20, 20, 24, 30, 39, 46, 57],
      },
      // {
      //   skin: "Type 4",
      //   tone: "Light brown skin",
      //   relation: [3, 3, 7, 7, 7, 10, 10, 13, 13, 13, 16],
      // },
      {
        skin: "Type 5",
        tone: "Brown",
        relation: [2, 2, 4, 4, 4, 6, 6, 8, 8, 8, 10, 15, 20, 24, 30],
      },
      {
        skin: "Type 6",
        tone: "Dark",
        relation: [1, 1, 3, 3, 3, 5, 5, 6, 6, 6, 8, 11, 15, 20, 24],
      },
    ],
  };
  try {
    const uvi = Math.ceil(uv_index);
    const index_uvi = calcMetaData.uvies.indexOf(uvi);
    let spf_level = 0;
    calcMetaData.skins.forEach((item, index) => {
      if (item.tone.toLowerCase() === skin_tone.toLowerCase()) {
        spf_level = item.relation[index_uvi];
        return;
      }
    });
    return spf_level ? spf_level : 0;
  } catch (error) {
    return 0;
  }
}
