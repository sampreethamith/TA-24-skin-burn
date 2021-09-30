import React, { useState } from "react";
import Autocomplete from "react-autocomplete";

const LocationSearch = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="">
        <Autocomplete
          getItemValue={(item) => item.label}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          items={[
            { id: 1, label: "apple" },
            { id: 2, label: "banana" },
            { id: 3, label: "pear" },
          ]}
          renderItem={(item, isHighlighted) => (
            <div
              key={item.id}
              style={{ background: isHighlighted ? "lightgray" : "white" }}
            >
              {item.label}
            </div>
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(val) => setValue(val)}
        />
      </div>
    </>
  );
};

export default LocationSearch;
