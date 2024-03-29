import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { useFormikContext } from "formik";
import "./_mainMap.scss";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const defaultLocation = [35.70161989139748, 51.40018794532503];

/**
 * we use react-leaflet
 * @param {object} props
 * @returns map element with label
 */
const MainMap = (props) => {
  const { label, defaultValue = defaultLocation, name } = props;

  /****************************** ELMENTS *****************************************/
  return (
    <div className="main-map-wrapper">
      <div className="text-container">
        <span className="label-style">{label}</span>
      </div>
      <div className="main-map-container">
        <MapContainer center={defaultValue} readOnly={true} zoom={18} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker name={name} defaultValue={defaultValue} />
        </MapContainer>
      </div>
    </div>
  );
};

export default React.memo(MainMap);

function LocationMarker({ name, defaultValue }) {
  /****************************************************************************** */
  const { setFieldValue } = useFormikContext();
  const [position, setPosition] = useState(defaultValue ?? null);
  let clickTimeOut = null;

  /******************************************************************************* */
  const map = useMapEvents({
    click(e) {
      if (clickTimeOut) {
        clearTimeout(clickTimeOut);
        clickTimeOut = null;
        map.locate();
      } else {
        clickTimeOut = setTimeout(() => {
          setPosition(e.latlng);
          setFieldValue(name, e.latlng);
        }, 300);
      }
    },
    locationfound(e) {
      console.log("locationfound");
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  if (!position) return null;
  return (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>You are here</Popup>
    </Marker>
  );
}
