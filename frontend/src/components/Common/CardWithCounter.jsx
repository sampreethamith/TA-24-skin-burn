import React from "react";
import CountUp from "react-countup";

const CardWithCounter = ({ data, body }) => {
  let newData = "";

  if (typeof data === "undefined") data = "0";

  if (data.includes("%")) newData = data.replace("%", "");

  return (
    <>
      <div className="card-small-counter">
        {data.includes("%") ? (
          <p className="card-small-counter-number-font">
            <CountUp end={newData} duration={2} />%
          </p>
        ) : (
          <p className="card-small-counter-number-font">
            <CountUp end={data} duration={5} />
          </p>
        )}
        <p className="text-center">{body}</p>
      </div>
    </>
  );
};

export default CardWithCounter;
