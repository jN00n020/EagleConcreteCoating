"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Lakeville, MN
const LAKEVILLE: [number, number] = [44.6497, -93.2427];

// Custom red dot marker with label, rendered as HTML so it can be styled freely
const lakevilleIcon = divIcon({
  className: "",
  html: `
    <div style="display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);">
      <div style="background:rgba(255,255,255,0.95);backdrop-filter:blur(4px);padding:6px 12px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);border:1px solid #f8a5b1;margin-bottom:4px;white-space:nowrap;">
        <span style="font-size:13px;font-weight:700;color:#162c48;">Based in Lakeville</span>
      </div>
      <div style="width:20px;height:20px;background:#C41E3A;border-radius:50%;border:3px solid white;box-shadow:0 4px 8px rgba(0,0,0,0.3);"></div>
      <div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #C41E3A;margin-top:-2px;"></div>
    </div>
  `,
  iconSize: [0, 0],
  iconAnchor: [0, 0],
});

export default function InteractiveMap() {
  return (
    <MapContainer
      center={LAKEVILLE}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={LAKEVILLE} icon={lakevilleIcon}>
        <Popup>
          <strong>Eagle Concrete Coatings LLC</strong>
          <br />
          Based in Lakeville, MN
        </Popup>
      </Marker>
    </MapContainer>
  );
}
