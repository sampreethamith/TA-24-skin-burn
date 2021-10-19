import _ from "lodash";

export function UVQuizData() {
  const uvQuizArray = [
    {
      questionTitle: "How do UVA and UVB differ?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer:
            "UVA (ultraviolet A) is associated with skin aging, while UVB (ultraviolet B) is associated with skin burning.",
        },
        {
          optionNumber: "B",
          optionAnswer:
            "UVA (ultraviolet A) is associated with skin burning, while UVB (ultraviolet B) is associated with skin aging.",
        },
        {
          optionNumber: "C",
          optionAnswer:
            "UVB causes sunburn and suntan, while UVA is proven to contribute to the development of skin cancer.",
        },
        {
          optionNumber: "D",
          optionAnswer: "Options A and C",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle:
        "I do not have to apply sunscreen if the UV index is Moderate between (3 to 6).",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "True",
        },
        {
          optionNumber: "B",
          optionAnswer: "False",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle:
        "If the UV index number is 5 to 6, how long can you stay under the sun without protective clothing/sunscreen?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "10 minutes",
        },
        {
          optionNumber: "B",
          optionAnswer: "20 minutes",
        },
        {
          optionNumber: "C",
          optionAnswer: "30 minutes",
          correctAnswer: true,
        },
        {
          optionNumber: "D",
          optionAnswer: "40 minutes",
        },
      ],
    },
    {
      questionTitle:
        "If you are looking for very high sun protective clothing - for outdoor work, bushwalking or for sport - choose light colours, as they are better at absorbing UV than black colours.",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "True",
        },
        {
          optionNumber: "B",
          optionAnswer: "False",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle:
        "Even in people with dark skin, mild sunburns can directly suppress immune functions.",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "True",
          correctAnswer: true,
        },
        {
          optionNumber: "B",
          optionAnswer: "False ",
        },
      ],
    },
  ];

  // return _.shuffle(uvQuizArray);
  return uvQuizArray;
}

export function getUVInfo() {
  return {
    title: "More On Ultraviolet Index",
    descriptionText: [
      "When the UV Index is in a Moderate (5-6) range, most people can tolerate a maximum of 30 minutes of exposure to the sun without skin damage.",
      "UV exposure leads to an altered immune response balance through cells and antibodies and may reduce the body's ability to defend itself against certain diseases.",
      "Dark colours are better at absorbing UV than light colours.",
    ],
    link: "/information/ultraviolet",
  };
}
