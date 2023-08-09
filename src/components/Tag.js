import { useState } from "react";

function Tag({ tag, index, tagNum }) {
  const [isClicked, setIsClicked] = useState(false);
  function switchTag() {
    setIsClicked(!isClicked);
    console.log(index, tagNum)
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
