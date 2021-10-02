import React from "react";
import { useHistory } from "react-router-dom";

const CardWithBorderPrimary = ({ data, childToParent }) => {
  const history = useHistory();

  return (
    <div
      className="card-with-border-primary"
      onClick={() => {
        if (data.route) {
          history.push(data.route);
          return;
        } else {
          childToParent(data.title);
        }
      }}
    >
      <img
        className="card-with-border-primary-img"
        src={data.image}
        alt={data.altName}
      />
      <p className="card-with-border-primary-title">{data.title}</p>
      <p className="text-center">{data.information}</p>
    </div>
  );
};

export default CardWithBorderPrimary;
