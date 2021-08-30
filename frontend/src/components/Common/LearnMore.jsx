import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../images/right-arrow-icon.svg";

const LearnMore = ({ position, path }) => {
  let classname = "learn-more";

  if (position != null) classname = classname.concat(" " + position);

  if (!path) return <></>;

  return (
    <div className={classname}>
      <Link to={path}>Learn More</Link>
      <img src={RightArrow} alt="Right Arrow" />
    </div>
  );
};

export default LearnMore;
