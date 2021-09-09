import React from "react";
import { useHistory } from "react-router-dom";

const CardWithBorderPrimary = ({ data }) => {
  const history = useHistory();

  return (
    <div
      className="card-with-border-primary"
      onClick={() => history.push(data.route)}
    >
      <p className="text-center card-with-border-primary-title">{data.title}</p>
      <div className="card-with-border-primary-information-layout">
        <img src={data.imageUrl} alt={data.altName} />
        <p className="text-center">{data.information}</p>
      </div>
    </div>
  );
};

export default CardWithBorderPrimary;
