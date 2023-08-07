import "./App.css";
import List from "./components/List";
import TripTypeList from "../src/assests/TripTypeList.json";
import CategoryList from "../src/assests/CategoryList.json";

function App() {
  const dataTripTypeList = TripTypeList;
  const dataCAtegoryList = CategoryList;

  // console.log(TripTypeList);
  // console.log(CategoryList);

  return (
    <div className="wrapper">
      <List tripType={TripTypeList} />
    </div>
  );
}

export default App;
