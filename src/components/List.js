import { useEffect, useState, useRef } from "react";
import Tag from "../components/Tag";
import SwitchBtn from "./SwitchBtn";
import { ReactComponent as BusIcon } from "../assests/icon1.svg";
import { ReactComponent as FerryIcon } from "../assests/icon2.svg";
import { ReactComponent as RailwayIcon } from "../assests/icon3.svg";

function List({ tags, title, id, transportArr, setTransportArr }) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isBtnShown, setIsBtnShown] = useState(false);
  const [clickedTagsArr, setClickedTagsArr] = useState([]);

  const tagsRef = useRef(null);

  // 判斷收合按鈕
  useEffect(() => {
    if (tagsRef.current.scrollHeight > 35) {
      setIsBtnShown(true);
    }
  }, [tags]);

  // 註冊螢幕監聽事件
  useEffect(() => {
    const debounce = (fn, delay = 100) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          // fn(...args);
          fn.call(this, args);
        }, delay);
      };
    };

    window.addEventListener("resize", debounce(windowResizeHandler, 1000));
  }, []);

  const windowResizeHandler = () => {
    if (tagsRef.current && tagsRef.current.scrollHeight > 35) {
      setIsBtnShown(true);
    } else {
      setIsBtnShown(false);
    }
  };

  const clickTypeHandler = (tag) => {
    const isTypeExisted = transportArr.includes(tag.TypeCode);
    if (!isTypeExisted) {
      setTransportArr((prevArr) => [tag.TypeCode, ...prevArr].sort());
      // setTransportArr((...prevArgs) => {
      //   console.log("prevArgs", prevArgs)
      //   return []
      // });
    } else {
      setTransportArr(transportArr.filter((item) => item !== tag.TypeCode));
    }
  };

  const clickTagHandler = (tag) => {
    const isTagExisted = clickedTagsArr.includes(tag.TagNo);
    if (!isTagExisted) {
      setClickedTagsArr((prevArr) => [tag.TagNo, ...prevArr].sort());
    } else {
      setClickedTagsArr(clickedTagsArr.filter((item) => item !== tag.TagNo));
    }
  };

  const typeIcon = {
    "01": <FerryIcon className="icon" />,
    "02": <BusIcon className="icon" />,
    "03": <RailwayIcon className="icon" />,
  };

  const renderedTags = tags.map((tag) => {
    const isTag = tag.TagNo !== undefined;
    const tagId = isTag ? tag.TagNo : tag.TypeCode;
    const clickHandler = isTag ? clickTagHandler : clickTypeHandler;
    const clickedArr = isTag
      ? clickedTagsArr.includes(tag.TagNo)
      : transportArr.includes(tag.TypeCode);
    const icon = isTag ? "" : typeIcon[tag.TypeCode];
    const name = isTag ? tag.TagName : tag.TypeName;

    return (
      <Tag
        key={tagId}
        tag={tag}
        onClickTag={clickHandler}
        isClicked={clickedArr}
      >
        {icon}
        {name}
      </Tag>
    );
  });

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div
        ref={tagsRef}
        className={`tags ${isFolderOpen ? "" : "overflow-y-hidden"}`}
      >
        {renderedTags}
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

export default List;
