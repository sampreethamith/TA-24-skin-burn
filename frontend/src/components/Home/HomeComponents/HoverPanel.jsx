import React from "react";
import { Container } from "react-bootstrap";
import "../Css/HoverPanel.css";
import FeatureCard from "./FeatureCard";
import uvindex_icon from "../Data/uvindex_icon.svg";
import sunscreen_icon from "../Data/sunscreen_icon.svg";
import hover_icon from "../Data/search_black_icon.svg";

const HoverPanel = () => {
  return (
    <Container>
      <div className="hover-panel">
        <FeatureCard
          mainImage={uvindex_icon}
          hoverImage={hover_icon}
          hoverText="Ultraviolet Index"
          mainImageHeight="180rem"
          path="/information/ultraviolet"
          className="feature-card"
        />
        <FeatureCard
          mainImage={sunscreen_icon}
          hoverImage={hover_icon}
          hoverText="Sun Screen"
          mainImageHeight="180rem"
          className="feature-card"
        />
      </div>
    </Container>
  );
};

export default HoverPanel;
