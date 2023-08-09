import Type from "./Type";
import { useState } from "react";

function TypeList({
  types,
  title,
  isFerryActive,
  setIsFerryActive,
  isRailwayActive,
  setIsRailwayActive,
}) {
  const [isSelected, setIsSelected] = useState(false);

  function onClicked(type) {
    setIsSelected(!isSelected);
    if (type.TypeName === "鐵路") {
      setIsRailwayActive(!isRailwayActive);
    } else if (type.TypeName === "郵輪") {
      setIsFerryActive(!isFerryActive);
    }
  }

  return (
    <div className="list">
      <div className="title">{title}</div>
      <div className="tags">
        {types.map((type) => {
          return (
            <Type
              type={type}
              key={type.TypeNo}
              onClicked={() => {
                onClicked(type);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TypeList;
