import React from "react";

const SwitchBtn = ({ isFolderOpen, setIsFolderOpen }) => {
  return (
    <div className={`switch-block ${isFolderOpen ? "open" : ""}`}>
      <>
        <span className="border"></span>
        <div
          className="switch-btn"
          onClick={() => setIsFolderOpen(!isFolderOpen)}
        >
          {isFolderOpen ? "收起" : "更多"}
        </div>
        <span
          className="switch-arrow"
          onClick={() => setIsFolderOpen(!isFolderOpen)}
        ></span>
      </>
    </div>
  );
};

export default SwitchBtn;
