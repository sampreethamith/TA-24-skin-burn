import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import FloatIcon from "@mui/icons-material/ArrowUpward";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) setShowButton(true);
      else setShowButton(false);
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {showButton && (
        // <button onClick={scrollToTop} className="back-to-top">
        //   &#8679;
        // </button>
        <Fab
          // aria-describedby={id}
          onClick={scrollToTop}
          className="mapbox-float-button"
          color="secondary"
        >
          <FloatIcon />
        </Fab>
      )}
    </div>
  );
};

export default ScrollTopButton;
