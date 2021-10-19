import React from "react";

const Iframe = () => {
  return (
    <div>
      <iframe
        title="SunSmart"
        src="https://www.sunsmart.com.au/uvalert/default.asp?version=australia&locationid=161"
        width="100%"
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
