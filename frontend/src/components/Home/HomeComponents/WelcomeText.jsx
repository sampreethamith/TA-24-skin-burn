import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TextTransition, { presets } from "react-text-transition";
import "../Css/WelcomeText.css";
import Typist from "react-typist";

const TEXTS = [" prevent exposure to ", " educate about ", " protect from "];

const WelcomeText = () => {
  const [index, setIndex] = React.useState(0);
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  function handleTypingDone() {
    setTimer(false);
    setTimer(true);
  }

  return (
    <Container>
      <br />
      <br />
      <div className="welcome-text white-text">
        <p className="welcome-text-letter-space">
          WELCOME TO <em>SKINSAFE</em>
        </p>
        {timer && (
          <p className="welcome-text-first-line">
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
              onTypingDone={handleTypingDone}
            >
              Don’t let it start
              <Typist.Backspace count={18} delay={1000} />
              Don’t let it spread
              <Typist.Backspace count={19} delay={1000} />
            </Typist>
          </p>
        )}
        <div>
          <p className="welcome-text-first-line">We are here to help you </p>
          <TextTransition
            className="welcome-text-first-line"
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
            style={{ color: "#ffb800" }}
            inline
          />
          <p className="welcome-text-first-line"> sunburn</p>
        </div>
      </div>
    </Container>
  );
};

export default WelcomeText;
