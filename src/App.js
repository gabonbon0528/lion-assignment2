import "./App.css";
import List from "./components/List";
import TripTypeList from '../src/assests/TripTypeList.json'

function App() {
  console.log(TripTypeList);
  const data = TripTypeList;

  return (
    <div className="wrapper">
      <List />
    </div>
  );
}

export default App;
