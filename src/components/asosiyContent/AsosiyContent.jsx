import React from "react";
// import Header from "../header/Header";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
import "./asosiyContent.css";

const AsosiyContent = () => {
  return (
    <>
      <div className="asosiy-content container-fluid">
        <LeftPanel />
        <RightPanel />
      </div>
    </>
  );
};

export default AsosiyContent;
