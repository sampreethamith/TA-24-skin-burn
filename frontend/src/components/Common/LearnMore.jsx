import React from "react";
import RightArrow from "../../images/right-arrow-icon.svg";

const LearnMore = ({ position }) => {
  let classname = "learn-more";

  if (position != null) classname = classname.concat(" " + position);

  return (
    <div className={classname}>
      <a href="#learnmore">Learn More</a>
      <img src={RightArrow} alt="Right Arrow" />
    </div>
  );
};

export default LearnMore;
