import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/home/img1.jpg";
import img2 from "../../images/home/img2.png";
import img3 from "../../images/home/img3.png";

const Home2 = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img1})`,
        }}
        className="zoomin-div"
      />
    </div>
  );
};

export default Home2;
