import React from "react";
import {
  CircleMarker,
  MapContainer,
  Marker,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import "./MapCompo.css";

function MapCompo({ jsonDataObj }) {
  // console.log("jsonDataObj=", jsonDataObj.features);

  const newarray = jsonDataObj?.features || [];
  console.log("newarray = ", newarray);

  const position = [51.505, -0.09];
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon = [
    [
      [100.0, 0.0],
      [101.0, 0.0],
      [101.0, 1.0],
      [100.0, 1.0],
      [100.0, 0.0],
    ],
  ];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  //   const rectangle = [
  //     [51.49, -0.08],
  //     [51.5, -0.06],
  //   ];

  const lineString = [
    [102.0, 0.0],
    [103.0, 1.0],
    [104.0, 0.0],
    [105.0, 1.0],
  ];

  const blackOptions = { color: "black" };
  const redOptions = { color: "red" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };

  // const type = newarray[2]?.geometry?.type;
  // const coordinates = newarray[2]?.geometry?.coordinates;
  // console.log("cor", coordinates);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={8}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
      {newarray.map((info) => (
        <Newcompo info={info} />
      ))}
    </MapContainer>
  );
}

export default MapCompo;

function Newcompo({ info }) {
  console.log(info);

  if (info.geometry.type === "Point") {
    <Marker position={info.geometry.coordinates}>
      <Popup>point</Popup>
    </Marker>;
  } else if (info.geometry.type === "LineString") {
    <lineString positions={info.geometry.coordinates}></lineString>;
  } else {
    <Polygon positions={info.geometry.coordinates}></Polygon>;
  }
}
