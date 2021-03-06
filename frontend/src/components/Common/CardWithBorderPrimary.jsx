import React from "react";
import { useHistory } from "react-router-dom";

const CardWithBorderPrimary = ({ data, typeSelected, selected }) => {
  const history = useHistory();

  const cardSelected = selected
    ? "card-with-border-primary card-selected"
    : "card-with-border-primary";

  return (
    <div
      className={cardSelected}
      onClick={() => {
        if (data.route) {
          history.push(data.route);
          return;
        } else {
          typeSelected(data.title);
          setTimeout(() => {
            window.scrollTo(0, window.scrollY + 1000);
          }, 100);
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
