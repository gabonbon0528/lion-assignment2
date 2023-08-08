import { useState } from "react";

function Tag({ tag }) {
  const [isClicked, setIsClicked] = useState(false);
  function switchTag() {
    setIsClicked(!isClicked);
  }
  return (
    <div
      className={`tag ${isClicked && "clicked"}`}
      onClick={() => {
        switchTag();
      }}
    >
      {tag.TagName}
    </div>
  );
}

export default Tag;
