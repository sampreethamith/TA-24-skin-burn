import React from "react";
import CountUp from "react-countup";

const CardWithCounter = ({ data, body }) => {
  let newData = "";

  if (data.includes("%")) newData = data.replace("%", "");

  return (
    <>
      <div className="card-small-counter">
        {data.includes("%") ? (
          <p>
            <CountUp end={newData} duration={2} />%
          </p>
        ) : (
          <p>
            <CountUp end={data} duration={5} />
          </p>
        )}
        <p className="text-center">{body}</p>
      </div>
    </>
  );
};

export default CardWithCounter;
