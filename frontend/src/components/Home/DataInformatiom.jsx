import React from "react";
import { Card } from "react-bootstrap";
import stats from "../../images/statistics.png";

const DataInformatiom = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className="block--dark block--content">
          <Card.Img variant="top" src={stats} className="img-stat" />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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

export default DataInformatiom;
