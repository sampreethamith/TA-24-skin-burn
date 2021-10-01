export function sunScreenQuizData() {
  return [
    {
      questionTitle: "Who should use sunscreen?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SunScreen",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "People who have white skin.",
        },
        {
          optionNumber: "B",
          optionAnswer: "People who have sunburn issues.",
        },
        {
          optionNumber: "C",
          optionAnswer: "People who have long-term skin cancer problems.",
        },
        {
          optionNumber: "D",
          optionAnswer: "Everyone",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle:
        "SPF (Sun Protection Factor) is the only thing I need to know to select a good suntan lotion.",
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
          optionAnswer: "False ",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle: "The best time to apply sunscreen while going out? ",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SunScreen",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "Immediately after going outside",
        },
        {
          optionNumber: "B",
          optionAnswer: "5-10 minutes before going outside",
        },
        {
          optionNumber: "C",
          optionAnswer: "15-30 minutes before going outside",
          correctAnswer: true,
        },
        {
          optionNumber: "D",
          optionAnswer: "Mostly, when I feel burn",
        },
      ],
    },
    {
      questionTitle:
        "When you want to suntan, it is not necessary to use sunscreen lotion.",
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
          optionAnswer: "False ",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle:
        "On a cloudy day, it is not necessary to put on sunscreen lotion.",
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
          optionAnswer: "False ",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle: "What factors do you have to check before buying sunscreen?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SunScreen",
      options: [
        {
          optionNumber: "A",
          optionAnswer:
            "Check if it provides safe and effective protection against the broad spectrum of ultraviolet rays.",
        },
        {
          optionNumber: "B",
          optionAnswer: "Check for SPF level 15 or higher.",
        },
        {
          optionNumber: "C",
          optionAnswer: "It should be water-resistant.",
        },
        {
          optionNumber: "D",
          optionAnswer: "All of the above",
          correctAnswer: true,
        },
      ],
    },
  ];
}

export function getSunScreenInfo() {
  return {
    title: "More On SunScreen",
    descriptionOne:
      "Sun Protection Factor – is a measure of a sunscreen’s ability to prevent UVB from damaging the skin.",
    descriptionTwo:
      "If it takes 20 minutes for your unprotected skin to start turning red, using an SPF 15 sunscreen theoretically prevents reddening 15 times longer – about five hours.",
    descriptionThree:
      "In reality, sunscreen wears away and loses strength after a while in the sun, so you need to reapply at least every couple of hours and immediately after sweating or swimming.",
    link: "/information/sunscreen",
  };
}
