import "./App.css";
import LeftCompo from "./Component/LeftCompo/LeftCompo";
import RightCompo from "./Component/RightCompo/RightCompo";

function App() {
  return (
    <div className="main-page">
      <div className="d-flex  justify-content-between">
        <LeftCompo />
        <RightCompo />
      </div>
    </div>
  );
}

export default App;
