import { useEffect, useState, useMemo, useLayoutEffect } from "react";
import Tag from "../components/Tag";
import SwitchBtn from "./SwitchBtn";

function List({ tags, title, id }) {
  const [tagNum, setTagNum] = useState(tags.length); // 初始值设为标签总数
  const [btnContent, setBtnContent] = useState("更多");
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [clickedData, setClickedData] = useState([]);

  const getTagNum = () => {
    const tagsLength = document.querySelectorAll(".tags")[1].offsetWidth;
    let tagLength = 0;
    let newTagNum = tags.length;

    for (let i = 0; i < document.querySelectorAll(`#${id} .tag`).length; i++) {
      if (tagLength < tagsLength) {
        tagLength +=
          document.querySelectorAll(`#${id} .tag`)[i].offsetWidth + 3;
      } else {
        newTagNum = i - 2;
        break;
      }
    }
    setTagNum(newTagNum);
    if (id == "specification") {
      console.log("newTagNum", newTagNum, "tagNum", tagNum);
    }
  };

  function debounce(func, delay = 250) {
    let timer = null;

    return function (...args) {
      let context = this;

      clearTimeout(timer);
      return setTimeout(() => {
        func;
      }, delay);
    };
  }

  useLayoutEffect(() => {
    getTagNum();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", debounce(getTagNum));
  }, []);

  const switchFolder = () => {
    setIsFolderOpen(!isFolderOpen);
    setBtnContent(isFolderOpen ? "更多" : "收起");
  };

  const addData = (newData) => {
    !clickedData.includes(newData) && setClickedData([...clickedData, newData]);
  };

  // const memoizedTags = useMemo(
  //   () =>
  //     tags.map((tag, index) => (
  //       <Tag
  //         key={tag.TagNo}
  //         tag={tag}
  //         index={index}
  //         tagNum={tagNum}
  //         isFolderOpen={isFolderOpen}
  //         addData={addData}
  //       />
  //     )),
  //   [tagNum, isFolderOpen]
  // );

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div className="tags">
        {/* {memoizedTags} */}
        {tags.map((tag, index) => (
          <Tag
            key={tag.TagNo}
            tag={tag}
            index={index}
            tagNum={tagNum}
            isFolderOpen={isFolderOpen}
            addData={addData}
          />
        ))}
      </div>
      <SwitchBtn
        isFolderOpen={isFolderOpen}
        tagNum={tagNum}
        tags={tags}
        switchFolder={switchFolder}
        btnContent={btnContent}
      />
    </div>
  );
}

export default List;
