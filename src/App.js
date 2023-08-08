import "./App.css";
import List from "./components/List";
import TypeList from "./components/TypeList";
import TripTypeList from "../src/assests/TripTypeList.json";
import CategoryList from "../src/assests/CategoryList.json";
import { useEffect, useState } from "react";

function App() {
  const dataTripTypeList = TripTypeList;
  let SpecificationList = [];
  for (let i = 0; i < CategoryList[0].TypeList.length; i++) {
    SpecificationList = [
      ...SpecificationList,
      ...CategoryList[0].TypeList[i].GroupList[0].TagList,
    ];
  }
  const MarketingList = CategoryList[1].TypeList[0].GroupList[0].TagList;

  const [isTypeActive, setIsTypeActive] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <TypeList
        types={dataTripTypeList}
        title="遊玩交通"
        isTypeActive={isTypeActive}
        setIsTypeActive={setIsTypeActive}
      />
      {isTypeActive && (
        <List
          key={"test"}
          id="specification"
          tags={SpecificationList}
          title="產品規格"
        />
      )}

      <List
        key={"specification"}
        id="specification"
        tags={SpecificationList}
        title="產品規格"
      />
      <List id="marketing" tags={MarketingList} title="行銷活動" />
    </div>
  );
}

export default App;
