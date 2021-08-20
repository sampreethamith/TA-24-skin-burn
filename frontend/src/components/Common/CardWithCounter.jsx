import React from "react";
import { Card } from "react-bootstrap";
import stats from "../../images/statistics.png";
import CountUp from "react-countup";

const CardWithCounter = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className="block--dark block--content">
          <p className="card-counter">
            <CountUp end={100} duration={2} />
          </p>
          {/* <Card.Img variant="top" src={stats} className="img-stat" /> */}
        </div>
        <Card.Body>
          <Card.Title>Total Death</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
            soluta!
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardWithCounter;
