import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import LeftCompo from "./Component/LeftCompo/LeftCompo";
import RightCompo from "./Component/RightCompo/RightCompo";

function App() {
  return (
    // <div className="map-view">
    //   <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Marker position={[51.505, -0.09]}>
    //       <Popup>
    //         A pretty CSS3 popup. <br /> Easily customizable.
    //       </Popup>
    //     </Marker>
    //   </MapContainer>
    // </div>
    <div className="main-page">
      <div className="d-flex  justify-content-between">
        <LeftCompo />
        <RightCompo />
      </div>
    </div>
  );
}

export default App;
