import React from "react";
import { Container } from "react-bootstrap";
import UVIndexMap from "./StateUVIndexMap/UVIndexMap";

const MapPage = () => {
  return (
    <section className="block">
      <Container>
        <h1>Location Based UV Level</h1>
        <UVIndexMap data-aos="zoom-in-up" data-aos-duration="1000" />
      </Container>
    </section>
  );
};

export default MapPage;
