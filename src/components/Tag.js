import { useState } from "react";

function Tag({ tag, addData }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchTag(tag) {
    setIsClicked(!isClicked);
    addData(tag.TagName);
  }

  return (
    <div
      className={`tag ${isClicked && "clicked"}`}
      onClick={() => {
        switchTag(tag);
      }}
    >
      {tag.TagName}
    </div>
  );
}

export default Tag;
