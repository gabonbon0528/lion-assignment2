import Type from "./Type";
import { useState } from "react";

function TypeList({ types, title, isTypeActive, setIsTypeActive }) {
  const [isSelected, setIsSelected] = useState(false);

  function onClicked() {
    setIsSelected(!isSelected);
    setIsTypeActive(!isTypeActive);
    console.log(isSelected);
  }

  return (
    <div className="list">
      <div className="title">{title}</div>
      <div className="tags">
        {types.map((type) => {
          return (
            <Type type={type} key={type.TypeNo} onClicked={onClicked}/>
          );
        })}
      </div>
    </div>
  );
}

export default TypeList;
