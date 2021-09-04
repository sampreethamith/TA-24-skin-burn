import React from "react";

const Iframe = () => {
  const styling = "padding:0; margin: 0px; overflow:hidden;";
  return (
    <div>
      <iframe
        title="SunSmart"
        src="https://www.sunsmart.com.au/uvalert/default.asp?version=australia&locationid=161"
        width="200"
        height="300"
        frameborder="0"
        scrolling="no"
        style={{
          padding: 0,
          margin: "0px",
          overflow: "hidden",
        }}
        allowtransparency="true"
      ></iframe>
    </div>
  );
};

export default Iframe;
