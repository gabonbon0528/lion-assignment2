import { useEffect, useState } from "react";
import Tag from "../components/Tag";

function List({ tags, title, id, setIsOpen, isOpen, isClicked, setIsClicked }) {
  // const [tagNum, setTagNum] = useState(-1);
  const [tagNum, setTagNum] = useState(tags.length); // 初始值设为标签总数
  const [btnContent, setBtnContent] = useState("更多"); // 初始值设为标签总数

  function getTagNum() {
    let tagsLength = document.querySelectorAll(".tags")[1].offsetWidth;
    let tagLength = 0;
    let newTagNum = tags.length;

    for (let i = 0; i < document.querySelectorAll(`#${id} .tag`).length; i++) {
      if (tagLength < tagsLength) {
        tagLength += document.querySelectorAll(`#${id} .tag`)[i].offsetWidth;
      } else {
        newTagNum = i - 2;
        break;
      }
    }
    setTagNum(newTagNum); // 更新 tagNum
  }

  function switchBtn() {
    setIsOpen(!isOpen);
    setBtnContent(isOpen ? "更多" : "收起");
  }

  useEffect(() => {
    getTagNum();
  }, []);

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div className="tags">
        {isOpen
          ? tags.map((tag) => (
              <Tag
                key={tag.TagNo}
                tag={tag}
              />
            ))
          : tags
              .slice(0, tagNum)
              .map((tag) => (
                <Tag
                  key={tag.TagNo}
                  tag={tag}
                />
              ))}
      </div>
      <div className={`switch-block ${isOpen && "open"}`}>
        {tagNum < tags.length && (
          <>
            <span className="border"></span>
            <div
              className="switch-btn"
              onClick={() => {
                switchBtn();
              }}
            >
              {btnContent}
            </div>
            <span className="switch-arrow"></span>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
