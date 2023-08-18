import React from "react";

const SwitchBtn = ({
  isFolderOpen,
  switchFolder,
  btnContent,
}) => {
  return (
    <div className={`switch-block ${isFolderOpen && "open"}`}>
      <>
        <span className="border"></span>
        <div className="switch-btn" onClick={switchFolder}>
          {btnContent}
        </div>
        <span className="switch-arrow" onClick={switchFolder}></span>
      </>
    </div>
  );
};

export default SwitchBtn;
