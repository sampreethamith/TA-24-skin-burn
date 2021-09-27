import React, { useState, useEffect } from "react";

const Test = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  console.log(offset);
  return <div style={{ height: "2000px" }}></div>;
};

export default Test;
