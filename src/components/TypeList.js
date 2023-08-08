import Tag from "./Tag";

function TypeList({ types, title }) {
  return (
    <div className="list">
      <div className="title">{title}</div>
      <div className="tags">
        {types.map((type) => {
          return (
            <div className="tag" key={type.TypeNo}>
              {type.TypeName}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypeList;
