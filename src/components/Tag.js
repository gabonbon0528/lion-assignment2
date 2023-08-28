import { useState } from "react";

function Tag({ tag }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`tag ${isClicked ? "clicked" : ""}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      {tag.TagName}
    </div>
  );
}

export default Tag;
