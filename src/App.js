import "./App.css";
import List from "./components/List";
import TypeList from "./components/TypeList";
import TripTypeList from "./TripTypeList.json";
import CategoryList from "./CategoryList.json";
import { useEffect, useState } from "react";

function App() {
  const dataTripTypeList = TripTypeList;
  let specificationList = [];
  for (let i = 0; i < CategoryList[0].TypeList.length; i++) {
    specificationList = [
      ...specificationList,
      ...CategoryList[0].TypeList[i].GroupList[0].TagList,
    ];
  }
  const marketingList = CategoryList[1].TypeList[0].GroupList[0].TagList;

  let ferryList = [];
  for (let i = 0; i < CategoryList[2].TypeList[0].GroupList.length; i++) {
    ferryList = [
      ...ferryList,
      ...CategoryList[2].TypeList[0].GroupList[i].TagList,
    ];
  }

  let railwayList = [];
  for (let i = 0; i < CategoryList[2].TypeList[0].GroupList.length; i++) {
    railwayList = [
      ...railwayList,
      ...CategoryList[2].TypeList[1].GroupList[i].TagList,
    ];
  }

  const [isFerryActive, setIsFerryActive] = useState(false);
  const [isRailwayActive, setIsRailwayActive] = useState(false);

  return (
    <div className="wrapper">
      <TypeList
        types={dataTripTypeList}
        title="遊玩交通"
        isFerryActive={isFerryActive}
        setIsFerryActive={setIsFerryActive}
        isRailwayActive={isRailwayActive}
        setIsRailwayActive={setIsRailwayActive}
      />

      {isFerryActive && (
        <List key={"ferry"} id="ferry" tags={ferryList} title="郵輪規格" />
      )}

      {isRailwayActive && (
        <List key={"railway"} id="railway" tags={railwayList} title="鐵路規格" />
      )}

      <List
        key={"specification"}
        id="specification"
        tags={specificationList}
        title="產品規格"
      />
      <List id="marketing" tags={marketingList} title="行銷活動" />
    </div>
  );
}

export default App;
