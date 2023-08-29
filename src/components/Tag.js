import { useState } from "react";
import { ReactComponent as BusIcon } from "../assests/icon1.svg";
import { ReactComponent as FerrytIcon } from "../assests/icon2.svg";
import { ReactComponent as RailwayIcon } from "../assests/icon3.svg";

function Tag({ tag }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchType() {
    setIsClicked(!isClicked);
    if(tag.TypeCode){
      console.log(tag.TypeCode)
    }
  }

  return (
    <div
      className={`tag ${isClicked ? "clicked" : ""}`}
      onClick={() => switchType()}
    >
      {tag.TypeCode == 1 && <FerrytIcon className="icon01" />}
      {tag.TypeCode == 2 && <BusIcon className="icon02" />}
      {tag.TypeCode == 3 && <RailwayIcon className="icon03" />}

      {tag.TagName || tag.TypeName}
    </div>
  );
}

export default Tag;
