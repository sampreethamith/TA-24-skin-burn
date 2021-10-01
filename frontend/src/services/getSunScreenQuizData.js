export function sunScreenQuizData() {
  return [
    {
      questionTitle: "Do you know what the SPF value is about?",
      questionSubtitle: "Which is locatated under label of sunscreen lotion.",
      imagePath: "",
      imageAltName: "SunScreen",
      options: [
        {
          optionNumber: "A",
          optionAnswer:
            "A measure of a sunscreen's ability to prevent UVB from damaging the skin",
          correctAnswer: true,
        },
        {
          optionNumber: "B",
          optionAnswer:
            "A measure of the number of ingredients in a sunscreen’s formula",
        },
        {
          optionNumber: "C",
          optionAnswer:
            "A measure of what fraction of the sun’s ultraviolet rays can penetrate a fabric",
        },
        {
          optionNumber: "D",
          optionAnswer: "All of above",
        },
      ],
    },
    {
      questionTitle: "The best time to apply sunscreen on days is?",
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
          optionAnswer: "Mostly, When I feel burn",
        },
      ],
    },
    {
      questionTitle: "Who should use sunscreen?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SunScreen",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "People who have white skin",
        },
        {
          optionNumber: "B",
          optionAnswer: "People who has sunburn issue",
        },
        {
          optionNumber: "C",
          optionAnswer: "People who has long term skin cancer problem",
        },
        {
          optionNumber: "D",
          optionAnswer: "Everyone",
          correctAnswer: true,
        },
      ],
    },
    {
      questionTitle: "What factors you have to check before buying sunscreen?",
      questionSubtitle: "",
      imagePath: "",
      imageAltName: "SunScreen",
      options: [
        {
          optionNumber: "A",
          optionAnswer: "Provides safe and effective protection against broad spectrum of ultraviolet rays",
        },
        {
          optionNumber: "B",
          optionAnswer: "With a SPF 15 (Daily use) or higher level",
        },
        {
          optionNumber: "C",
          optionAnswer: "Should be water resistant",
        },
        {
          optionNumber: "D",
          optionAnswer: "All of above",
          correctAnswer: true,
        },
      ],
    },
  ];
}

export function getSunScreenInfo() {
  return {
    title: "More On Sun Screen",
    descriptionOne:
      "Sun Protection Factor – is a measure of a sunscreen’s ability to prevent UVB from damaging the skin.",
    descriptionTwo:
      "If it takes 20 minutes for your unprotected skin to start turning red, using an SPF 15 sunscreen theoretically prevents reddening 15 times longer – about five hours.",
    descriptionThree:
      "In reality, sunscreen wears away and loses strength after a while in the sun, so you need to reapply at least every couple of hours, and immediately after sweating or swimming.",
    link: "/skincancer",
  };
}
