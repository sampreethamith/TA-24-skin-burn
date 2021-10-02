import React, { useState } from "react";
import HandPanel from "./PreventionComponents/HandPanel";

const PreventionCheckList = () => {
  const [paleWhite, setPaleWhite] = useState(false);
  const [White, setWhite] = useState(false);
  const [brown, setBrown] = useState(false);
  const [dark, setDark] = useState(false);

  const skinColorSelected = () => {};

  return (
    <div>
      <HandPanel />
    </div>
  );
};

export default PreventionCheckList;
