import { useEffect, useState, useMemo, useLayoutEffect, useRef } from "react";
import Tag from "../components/Tag";
import SwitchBtn from "./SwitchBtn";

function List({ tags, title, id }) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isBtnShown, setIsBtnShown] = useState(false);

  const tagsRef = useRef(null);

  useEffect(() => {
    if (tagsRef.current.offsetHeight > 37) {
      setIsBtnShown(true);
      console.log('>37')
    }
  }, []);

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div
        ref={tagsRef}
        className={`tags ${isFolderOpen ? "" : "overflow-y-hidden"}`}
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
