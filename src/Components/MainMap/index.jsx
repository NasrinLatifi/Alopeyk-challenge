import React, { useState } from "react";
import "./_mainMap.scss";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useMap, useMapEvents } from "react-leaflet/hooks";

/**
 * we use HTML input
 * @param {object} props
 * @returns input element with label
 */
const MainMap = (props) => {
  const { label, onChange, values } = props;

  /****************************** ELMENTS *****************************************/
  return (
    <div className="main-input-wrapper">
      <div className="text-container">
        <span className="label-style">{label}</span>
      </div>
      <MapContainer
        center={values || [35.7, 51.3]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onChange={onChange} />
      </MapContainer>
    </div>
  );
};

export default MainMap;

function LocationMarker({ onChange }) {
  const [position, setPosition] = useState(null);
  let clickTimeOut = null;
  const map = useMapEvents({
    click(e) {
      if (clickTimeOut) {
        clearTimeout(clickTimeOut);
        clickTimeOut = null;
        map.locate();
      } else {
        clickTimeOut = setTimeout(() => {
          setPosition(e.latlng);
        }, 300);
      }
    },
    locationfound(e) {
      console.log("locationfound");
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  if (!position) return null;
  console.log("onChange",onChange);
  onChange?.(position);
  return (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
