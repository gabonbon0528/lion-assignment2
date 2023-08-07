import Tag from "../components/Tag";

function List(tripTypes) {
  console.log(tripTypes.tripType);

  return (
    <div className="list">
      <div className="title">遊玩交通</div>
      <div className="tags">

        {tripTypes.tripType.map((trip) => {
          return <div className="tag" key={trip.TypeCode}>{trip.TypeName}</div>;
        })}

        {/* <div className="tag">鐵路</div>
        <div className="tag">巴士</div>
        <div className="tag">郵輪</div> */}
      </div>
      <span className="border"></span>
      <div className="switch-btn">更多</div>
    </div>
  );
}

export default List;
