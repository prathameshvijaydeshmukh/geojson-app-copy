import "./App.css";
import LeftCompo from "./Component/LeftCompo/LeftCompo";
import RightCompo from "./Component/RightCompo/RightCompo";
import MapCompo from "./Component/MapCompo/MapCompo";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState("");
  // converting input-string to object
  let jsonDataObj = {};

  if (jsonData) {
    console.log(jsonData);
    jsonDataObj = JSON.parse(jsonData);
    console.log(jsonDataObj);
  }
  return (
    <div className="main-page">
      <div>
        <LeftCompo />
        <RightCompo setJsonData={setJsonData} />
      </div>
      <MapCompo jsonDataObj={jsonDataObj} />
    </div>

    //
  );
}

export default App;
