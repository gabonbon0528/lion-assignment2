import { useState } from "react";

function Type({ type, onClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchType(type) {
    setIsClicked(!isClicked);
    onClicked();
    console.log(`icon${type.TypeCode}`);
  }

  return (
    <div
      className={`tag ${isClicked && "clicked"}`}
      key={type.TypeNo}
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
