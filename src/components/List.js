import { useEffect, useState } from "react";
import Tag from "../components/Tag";

function List({ tags, title, id }) {
  const [tagNum, setTagNum] = useState(tags.length); // 初始值设为标签总数
  const [btnContent, setBtnContent] = useState("更多");
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [clickedData, setClickedData] = useState([]);

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
    setTagNum(newTagNum);
  }

  function switchFolder() {
    setIsFolderOpen(!isFolderOpen);
    setBtnContent(isFolderOpen ? "更多" : "收起");
  }

  function addData(newData) {
    !clickedData.includes(newData) && setClickedData([...clickedData, newData]);
    console.log(clickedData)
  }

  useEffect(() => {
    getTagNum();
  }, []);

  return (
    <div className="list" id={id}>
      <div className="title">{title}</div>
      <div className="tags">
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
      <div className={`switch-block ${isFolderOpen && "open"}`}>
        {tagNum < tags.length && (
          <>
            <span className="border"></span>
            <div
              className="switch-btn"
              onClick={() => {
                switchFolder();
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
