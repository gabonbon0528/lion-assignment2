import { useEffect, useState, useMemo, useLayoutEffect } from "react";
import Tag from "../components/Tag";
import SwitchBtn from "./SwitchBtn";

function List({ tags, title, id }) {
  const [btnContent, setBtnContent] = useState("更多");
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const [isBtnShown, setIsBtnShown] = useState(false);

  useLayoutEffect(() => {
    const tagsLength = document.querySelectorAll(".tags")[1].offsetWidth;
    let tagLength = 0;

    for (let i = 0; i < document.querySelectorAll(`#${id} .tag`).length; i++) {
      if (tagLength < tagsLength) {
        tagLength +=
          document.querySelectorAll(`#${id} .tag`)[i].offsetWidth + 3;
      } else {
        setIsBtnShown(true);
        break;
      }
    }
  }, []);

  const switchFolder = () => {
    setIsFolderOpen(!isFolderOpen);
    setBtnContent(isFolderOpen ? "更多" : "收起");
  };

  const addData = (newData) => {
    !clickedData.includes(newData) && setClickedData([...clickedData, newData]);
  };

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div className={`tags ${!isFolderOpen && "overflow-y-hidden"}`}>
        {tags.map((tag) => (
          <Tag key={tag.TagNo} tag={tag} addData={addData} />
        ))}
      </div>
      {isBtnShown && (
        <SwitchBtn
          isFolderOpen={isFolderOpen}
          switchFolder={switchFolder}
          btnContent={btnContent}
        />
      )}
    </div>
  );
}

export default List;
