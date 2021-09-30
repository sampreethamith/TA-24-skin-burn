import React from "react";
import { useHistory } from "react-router-dom";

const CardWithBorderPrimary = ({ data }) => {
  const history = useHistory();

  return (
    <div
      className="card-with-border-primary"
      onClick={() => history.push(data.route)}
    >
      <img className="card-with-border-primary-img" src={data.image} />
      <p className="card-with-border-primary-title">{data.title}</p>
      <p className="text-center">{data.information}</p>
    </div>
  );
};

export default CardWithBorderPrimary;
