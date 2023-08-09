import { useState } from "react";

function Type({ type, onClickType }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchType(type) {
    setIsClicked(!isClicked);
    onClickType();
  }

  return (
    <div
      className={`tag ${isClicked && "clicked"}`}
      onClick={() => {
        switchType(type);
      }}
    >
      <span className={`icon${type.TypeCode}`}></span>
      {type.TypeName}
    </div>
  );
}

export default Type;
