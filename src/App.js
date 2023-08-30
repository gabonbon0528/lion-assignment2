import "./App.css";
import List from "./components/List";
import TripTypeList from "./TripTypeList.json";
import CategoryList from "./CategoryList.json";
import { useEffect, useState } from "react";

function App() {
  const [tripTypeList, setTripTypeList] = useState([]);
  const [specificationList, setSpecificationList] = useState([]);
  const [marketingList, setMarketingList] = useState([]);
  const [transportArr, setTransportArr] = useState([]);

  useEffect(() => {
    setTripTypeList(TripTypeList);
    const currentSpecificationList = CategoryList[0].TypeList.flatMap(
      (item) => {
        return item.GroupList.flatMap((groupItem) => {
          return groupItem.TagList;
        });
      }
    );
    setSpecificationList(currentSpecificationList);

    const currentMarketingList = CategoryList[1].TypeList.flatMap(
      (item) => {
        return item.GroupList.flatMap((groupItem) => {
          return groupItem.TagList;
        });
      }
    );

    setMarketingList(currentMarketingList);
  }, []);

  const transportExist = (typeListIndex) => {
    let transportationList = CategoryList[2].TypeList.filter((item) => {
      return item.TripTypeCode === typeListIndex;
    });
    return transportationList;
  };

  const getTransportationList = (typeListIndex) => {
    const newArr = transportExist(typeListIndex)[0].GroupList.flatMap(
      (item) => {
        return item.TagList;
      }
    );
    return newArr;
  };

  return (
    <div className="wrapper">
      <List
        tags={tripTypeList}
        title="遊玩交通"
        setTransportArr={setTransportArr}
        transportArr={transportArr}
      />
      {transportArr?.map((item) => {
        return (
          transportExist(item).length > 0 && (
            <List
              key={item}
              tags={getTransportationList(item)}
              title={`${transportExist(item)[0].TypeName}規格`}
            />
          )
        );
      })}
      <List tags={specificationList} title="產品規格" />
      <List tags={marketingList} title="行銷活動" />
    </div>
  );
}

export default App;
