
function Tag({ tag, children, onClickTag, isClicked }) {

  return (
    <div
      className={`tag ${isClicked ? "clicked" : ""}`}
      onClick={() => onClickTag(tag)}
    >
      {children}
    </div>
  );
}

export default Tag;
