const SwitchBtn = ({ isFolderOpen, setIsFolderOpen }) => {
  return (
    <div
      className={`switch-block ${isFolderOpen ? "open" : ""}`}
      onClick={() => setIsFolderOpen(!isFolderOpen)}
    >
      <>
        <span className="border"></span>
        <div className="switch-btn">{isFolderOpen ? "收起" : "更多"}</div>
        <span className="switch-arrow"></span>
      </>
    </div>
  );
};

export default SwitchBtn;
