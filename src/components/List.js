import { useEffect, useState, useMemo, useLayoutEffect, useRef } from "react";
import Tag from "../components/Tag";
import SwitchBtn from "./SwitchBtn";

function List({ tags, title, id }) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isBtnShown, setIsBtnShown] = useState(false);

  const tagsRef = useRef(null);

  useLayoutEffect(() => {
    let tagHeight = tagsRef.current.firstChild.offsetHeight;

    if (tagsRef.current.offsetHeight > tagHeight) {
      setIsBtnShown(true);
    }
    console.log(tagsRef.current.firstChild.offsetHeight);
  }, []);

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div
        ref={tagsRef}
        // style={{ height: `${tagsRef.current.firstChild.offsetHeight}px`}}
        className={`tags ${!isFolderOpen ? "overflow-y-hidden" : ""}`}
      >
        {tags.map((tag) => (
          <Tag key={tag.TagNo} tag={tag} />
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
