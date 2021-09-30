import React from "react";
import { Container } from "react-bootstrap";
import "../Css/HoverPanel.css";
import FeatureCard from "./FeatureCard";

const HoverPanel = () => {
  return (
    <Container>
      <div className="hover-panel">
        <FeatureCard className="feature-card" />
        <FeatureCard className="feature-card" />
      </div>
    </Container>
  );
};

export default HoverPanel;
