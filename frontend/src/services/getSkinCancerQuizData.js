export function skinCancerQuizData() {
  return [
    {
      questionTitle: "What is the most common form of skin cancer?",
      questionSubtitle: "",
      imagePath: "../../images/UVSunImage.svg",
      imageAltName: "UV",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "Basal cell carcinoma (BCC)",
          correctAnswer: true,
        },
        {
          optionNumber: "B",
          optionAnswer: "Squamous cell carcinoma",
        },
        {
          optionNumber: "C",
          optionAnswer: "Melanoma",
        },
        {
          optionNumber: "D",
          optionAnswer: "Merkel cell carcinoma",
        },
      ],
    },
    {
      questionTitle:
        "Skin cancer is found only on areas of your body which are exposed to the sun?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SkinCancer",
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
      questionTitle: "What is an effective way to prevent skin cancer?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SkinCancer",
      options: [
        {
          optionNumber: "A",
          optionAnswer:
            "Covering up with clothing, including a broad-brimmed hat and UV-blocking sunglasses",
        },
        {
          optionNumber: "B",
          optionAnswer:
            "Daily use of a broad-spectrum (UVA/UVB) sunscreen with an SPF of 15 or higher",
        },
        {
          optionNumber: "C",
          optionAnswer: "Seeking the shade, especially between 10 AM and 4 PM",
        },
        {
          optionNumber: "D",
          optionAnswer: "All of above",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle:
        "Early awakening of skin cancer has a great chance of cure.",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SkinCancer",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "True",
          correctAnswer: true,
        },
        {
          optionNumber: "B",
          optionAnswer: "False",
        },
      ],
    },
    {
      questionTitle:
        "Tanned or olive skin people don’t need to worry about sun burn.",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SkinCancer",
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
  ];
}

export function getSkinCancerInfo() {
  return {
    title: "More On Skin Cancer",
    description: [
      "The early cure rate of common skin cancer diseases such as melanoma has reached more than 90%.",
      "Cosmetics themselves do not have the function to protect you from Ultraviolet radiation, and some cosmetics contain the composition to protect you from UV radiation. But make sure that only the comedic that have 30+ SPF could effectively guard against sunburn.",
      "Understanding BCC causes, risk factors and warning signs can help you detect them early when they are easiest to treat and cure.",
    ],
    link: "/skincancer",
  };
}
