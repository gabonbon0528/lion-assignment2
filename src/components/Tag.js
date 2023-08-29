import { useState } from "react";
import { ReactComponent as BusIcon } from "../assests/icon1.svg";
import { ReactComponent as FerrytIcon } from "../assests/icon2.svg";
import { ReactComponent as RailwayIcon } from "../assests/icon3.svg";

function Tag({ tag, setTransportArr, transportArr }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchType() {
    setIsClicked(!isClicked);
    console.log(typeof transportArr, transportArr)
    if (tag.TypeCode) {
      if (!isClicked) {
        // let newArr = transportArr.push(tag.TypeCode)
        setTransportArr(transportArr.push(tag.TypeCode));
        // console.log(typeof newArr, newArr);
        console.log(transportArr);
      } else {
        console.log(transportArr);
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
