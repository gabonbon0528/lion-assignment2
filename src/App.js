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

  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <TypeList types={dataTripTypeList} title="遊玩交通" />
      <List
        id="specification"
        tags={SpecificationList}
        title="產品規格"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <List
        id="marketing"
        tags={MarketingList}
        title="行銷活動"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </div>
  );
}

export default App;
