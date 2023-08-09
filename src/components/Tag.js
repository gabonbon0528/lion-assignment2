import { useState } from "react";

function Tag({ tag, index, tagNum }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchTag() {
    setIsClicked(!isClicked);
  }

  return (
    <div
      className={`tag ${isClicked && "clicked"} ${index > tagNum && "none"}`}
      onClick={() => {
        switchTag();
      }}
    >
      {tag.TagName}
    </div>
  );
}

export default Tag;
