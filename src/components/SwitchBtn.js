import React from "react";

const SwitchBtn = ({
  isFolderOpen,
  tagNum,
  tags,
  switchFolder,
  btnContent,
}) => {
  return (
    <div className={`switch-block ${isFolderOpen && "open"}`}>
      {tagNum < tags.length && (
        <>
          <span className="border"></span>
          <div className="switch-btn" onClick={switchFolder}>
            {btnContent}
          </div>
          <span className="switch-arrow"></span>
        </>
      )}
    </div>
  );
};

export default SwitchBtn;
