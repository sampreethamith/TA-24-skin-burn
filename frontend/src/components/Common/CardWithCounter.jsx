import React from "react";
// import { Card } from "react-bootstrap";
// import stats from "../../images/statistics.png";
import CountUp from "react-countup";

const CardWithCounter = ({ border, data, body }) => {
  let classname = "data-information";
  let newData = "";

  if (border != null) classname = classname.concat(" " + border);

  if (data.includes("%")) newData = data.replace("%", "");

  return (
    <div className={classname}>
      <div>
        <h2>
          {data.includes("%") ? (
            <p>
              <CountUp end={newData} duration={2} />%
            </p>
          ) : (
            <CountUp end={data} duration={5} />
          )}
        </h2>
      </div>
      <div>
        <h2>{body}</h2>
      </div>
    </div>
  );
};

export default CardWithCounter;

// {
//   /* <div className="block--dark block--content">
//           <p className="card-counter">
//             <CountUp end={100} duration={2} />
//           </p>
//         </div> */
// }

// {
//   /* <Card style={{ width: "20rem", "background-color": "#ffb800" }}>
//   <Card.Body>
//     <Card.Title>Total Death</Card.Title>
//     <Card.Text>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, soluta!
//     </Card.Text>
//   </Card.Body>
// </Card>; */
// }
