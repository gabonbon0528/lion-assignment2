import "./App.css";
import List from "./components/List";
import TypeList from "./components/TypeList";
import TripTypeList from "./TripTypeList.json";
import CategoryList from "./CategoryList.json";
import { useEffect, useState } from "react";

function App() {
  const getTransportationList = (typeListIndex) => {
    let transportationList = [];
    for (
      let i = 0;
      i < CategoryList[2].TypeList[typeListIndex].GroupList.length;
      i++
    ) {
      transportationList = [
        ...transportationList,
        ...CategoryList[2].TypeList[typeListIndex].GroupList[i].TagList,
      ];
    }
    return transportationList;
  };

  const [tripTypeList, setTripTypeList] = useState([]);
  const [specificationList, setSpecificationList] = useState([]);
  const [marketingList, setMarketingList] = useState([]);
  const [isFerryActive, setIsFerryActive] = useState(false);
  const [isRailwayActive, setIsRailwayActive] = useState(false);
  const [transportArr, setTransportArr] = useState([]);
  
  useEffect(() => {
    setTripTypeList(TripTypeList);
    let currentSpecificationList = [];
    CategoryList[0].TypeList.forEach((item) => {
      item.GroupList.forEach((item) => {
        currentSpecificationList = currentSpecificationList.concat(
          item.TagList
        );
      });
    });
    // console.log(currentSpecificationList);
    setSpecificationList(currentSpecificationList);

    let currentMarketingList = [];
    CategoryList[1].TypeList.forEach((item) => {
      item.GroupList.forEach((item) => {
        currentMarketingList = currentMarketingList.concat(item.TagList);
      });
    });

    // console.log(currentMarketingList);
    setMarketingList(currentMarketingList);
  }, []);

  return (
    <div className="wrapper">
      <List tags={tripTypeList} title="遊玩交通" />

      {/* {isFerryActive && (
        <List tags={getTransportationList(0)} title="郵輪規格" />
      )}

      {isRailwayActive && (
        <List id="railway" tags={getTransportationList(1)} title="鐵路規格" />
      )} */}

      <List id="specification" tags={specificationList} title="產品規格" />
      <List id="marketing" tags={marketingList} title="行銷活動" />
    </div>
  );
}

export default App;
