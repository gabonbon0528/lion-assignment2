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

  // 取得資料
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

    const currentMarketingList = CategoryList[1].TypeList.flatMap((item) => {
      return item.GroupList.flatMap((groupItem) => {
        return groupItem.TagList;
      });
    });

    setMarketingList(currentMarketingList);
  }, []);

  // 確認交通類型資料是否存在，如果有則返回資料
  const getTransportTypeData = (typeCode) => {
    const transportType = CategoryList[2].TypeList.filter((item) => {
      return item.TripTypeCode === typeCode;
    });
    return transportType;
  };

  // 取得交通類型的所有標籤
  const getTransportList = (typeCode) => {
    const newArr = getTransportTypeData(typeCode)[0].GroupList.flatMap(
      (item) => item.TagList
    );
    return newArr;
  };

  const transportLists = transportArr?.map((typeCode) => {
    const isTypeDataExist = getTransportTypeData(typeCode).length > 0;
    if (!isTypeDataExist) return "";

    const transportList = getTransportList(typeCode);
    const typeName = getTransportTypeData(typeCode)[0].TypeName;
    return (
      <List key={typeCode} tags={transportList} title={`${typeName}規格`} />
    );
  });

  // if(!tripTypeList || !specificationList || !marketingList) return <p>loading</p>

  return (
    <div className="wrapper">
      <List
        tags={tripTypeList}
        title="遊玩交通"
        setTransportArr={setTransportArr}
        transportArr={transportArr}
      />
      {transportLists}
      <List tags={specificationList} title="產品規格" />
      <List tags={marketingList} title="行銷活動" />
    </div>
  );
}

export default App;
