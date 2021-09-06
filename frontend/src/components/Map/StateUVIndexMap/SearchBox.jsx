import React, { useState, useEffect } from "react";
import Chips from "react-chips";
import vic from "../../../services/GeoJsonFiles/vic.json";
import act from "../../../services/GeoJsonFiles/act.json";
import nsw from "../../../services/GeoJsonFiles/nsw.json";
import nt from "../../../services/GeoJsonFiles/nt.json";
import qld from "../../../services/GeoJsonFiles/qld.json";
import tas from "../../../services/GeoJsonFiles/tas.json";

const SearchBox = () => {
  const [chips, setChips] = useState([]);

  const onChange = (chips) => {
    setChips(chips);
  };

  const theme = {
    chipsContainer: {
      display: "flex",
      position: "relative",
      border: "none",
      backgroundColor: "transparent",
      font: "13.33333px Arial",
      minHeight: 24,
      alignItems: "center",
      flexWrap: "wrap",
      padding: "2.5px",
      borderRadius: 5,
      outlineWidth: 0,
      ":focus": {
        border: "1px solid #aaa",
      },
    },
    container: {
      flex: 1,
    },
    containerOpen: {},
    input: {
      border: "none",
      outline: "none",
      boxSizing: "border-box",
      width: "100%",
      padding: 5,
      margin: 2.5,
    },
    suggestionsContainer: {},
    suggestionsList: {
      position: "absolute",
      border: "1px solid #ffb800",
      zIndex: 10,
      left: 0,
      top: "100%",
      width: "100%",
      backgroundColor: "black",
      listStyle: "none",
      padding: 0,
      margin: 0,
      color: "#ffb800",
    },
    suggestion: {
      padding: "5px 15px",
    },
    suggestionHighlighted: {
      background: "#ffb800",
      color: "black",
    },
    sectionContainer: {},
    sectionTitle: {},
  };

  const chipTheme = {
    chip: {
      padding: 5,
      background: "#ffb800",
      margin: "2.5px",
      borderRadius: 3,
      cursor: "default",
    },
    chipSelected: {
      background: "#ffb800",
    },
    chipRemove: {
      fontWeight: "bold",
      cursor: "pointer",
      ":hover": {
        color: "red",
      },
    },
  };

  return (
    <div className="search-box">
      <Chips
        value={chips}
        onChange={onChange}
        suggestions={[...vic, ...act, ...nsw, ...nt, ...qld, ...tas]}
        placeholder="Search by Suburb Locations"
        className="search-chip-box"
        theme={theme}
        chipTheme={chipTheme}
      />
    </div>
  );
};

export default SearchBox;
