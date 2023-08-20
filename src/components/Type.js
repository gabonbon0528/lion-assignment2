import { useState } from "react";
import { ReactComponent as BusIcon } from '../assests/icon1.svg'
import { ReactComponent as FerrytIcon } from '../assests/icon2.svg'
import { ReactComponent as RailwayIcon } from '../assests/icon3.svg'

function Type({ type, onClickType }) {
  const [isClicked, setIsClicked] = useState(false);

  function switchType() {
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
      {type.TypeCode==1 && <FerrytIcon className='icon01'/>}
      {type.TypeCode==2 && <BusIcon  className='icon02'/>}
      {type.TypeCode==3 && <RailwayIcon  className='icon03'/>}
      {type.TypeName}
    </div>
  );
}

export default Type; 

