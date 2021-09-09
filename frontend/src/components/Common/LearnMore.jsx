import React from "react";
import { useHistory } from "react-router-dom";
import RightArrow from "../../images/right-arrow-icon.svg";

const LearnMore = ({ position, path, title }) => {
  const history = useHistory();
  let classname = "learn-more";

  if (position != null) classname = classname.concat(" " + position);

  if (!path) return <></>;

  return (
    <div
      className={`${classname} pointer-cursor`}
      onClick={() => history.push(path)}
    >
      <p className="secondary-text text-inline">
        {title ? title : "Learn More"}
      </p>
      <img src={RightArrow} alt="Right Arrow" />
    </div>
  );
};

export default LearnMore;
