import { useState } from "react";
import { ReactComponent as BusIcon } from "../assests/icon1.svg";
import { ReactComponent as FerrytIcon } from "../assests/icon2.svg";
import { ReactComponent as RailwayIcon } from "../assests/icon3.svg";

function Tag({ tag, setTransportArr, transportArr }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchType() {
    setIsClicked(!isClicked);
    if (tag.TypeCode) {
      if (!isClicked) {
        const newArray = [...transportArr, tag.TypeCode].sort();
        setTransportArr(newArray);
      } else {
        const newArray = transportArr.filter(item => item !== tag.TypeCode);
        setTransportArr(newArray);
      }
    }
  }

  return (
    <div
      className={`tag ${isClicked ? "clicked" : ""}`}
      onClick={() => switchType()}
    >
      {tag.TypeCode == 1 && <FerrytIcon className="icon" />}
      {tag.TypeCode == 2 && <BusIcon className="icon" />}
      {tag.TypeCode == 3 && <RailwayIcon className="icon" />}

      {tag.TagName || tag.TypeName}
    </div>
  );
}

export default Tag;
