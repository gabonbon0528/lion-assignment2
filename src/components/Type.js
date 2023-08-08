import { useState } from "react";

function Type({ type, onClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchType() {
    setIsClicked(!isClicked);
    onClicked();
  }
  
  return (
    <div
      className={`tag ${isClicked && "clicked"}`}
      key={type.TypeNo}
      onClick={() => {
        switchType();
      }}
    >
      {type.TypeName}
    </div>
  );
}

export default Type;
