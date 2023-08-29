import { useEffect, useState, useMemo, useLayoutEffect, useRef } from "react";
import Tag from "../components/Tag";
import SwitchBtn from "./SwitchBtn";

function List({ tags, title, id, transportArr, setTransportArr }) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isBtnShown, setIsBtnShown] = useState(false);

  const tagsRef = useRef(null);

  useEffect(() => {
    // console.log(tagsRef.current)
    if (tagsRef.current && tagsRef.current.scrollHeight > 35) {
      setIsBtnShown(true);
      setIsFolderOpen(false);
    }
  }, [tagsRef.current]);

  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 1000));
  }, []);

  function debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // fn(...args);
        fn.call(this, args);
      }, delay);
    };
  }

  const handleResize = () => {
    if (tagsRef.current && tagsRef.current.scrollHeight > 35) {
      setIsBtnShown(true);
    } else {
      setIsBtnShown(false);
    }
  };

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div
        ref={tagsRef}
        className={`tags ${isFolderOpen ? "" : "overflow-y-hidden"}`}
      >
        {tags.map((tag) => (
          <Tag
            key={tag.TagNo || tag.TypeCode}
            tag={tag}
            transportArr={transportArr}
            setTransportArr={setTransportArr}
          />
        ))}
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
