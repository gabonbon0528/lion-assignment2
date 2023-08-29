import Type from "./Type";
import SwitchBtn from "./SwitchBtn";
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
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [isBtnShown, setIsBtnShown] = useState(false);

  function onClickType(type) {
    setIsSelected(!isSelected);
    if (type.TypeName === "鐵路") {
      setIsRailwayActive(!isRailwayActive);
    } else if (type.TypeName === "郵輪") {
      setIsFerryActive(!isFerryActive);
    }
  }

  return (
    <div className="list">
      <div className="title">
        {title}
      </div>
      <div className="tags">
        {types.map((type) => {
          return (
            <Type
              type={type}
              key={type.TypeCode}
              onClickType={() => {
                onClickType(type);
              }}
            />
          );
        })}
      </div>
      {isBtnShown && (
        <SwitchBtn
          isFolderOpen={isFolderOpen}
          setIsFolderOpen={setIsFolderOpen}
        />
      )}

    </div>
  );
}

export default TypeList;
