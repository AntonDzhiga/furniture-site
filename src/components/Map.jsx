import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet"
import "leaflet/dist/leaflet.css";

const Map = () => {
    const position = [49.24016132276013, 28.394236465575243]
    const customMarkerIcon = L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/2499/2499159.png", iconSize: [32, 32], iconAnchor: [13, 32], popupAnchor: [3, -30] })
    return (
        <MapContainer center={position} zoom={18} scrollWheelZoom={true} style={{ width: "100%", height: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customMarkerIcon}>
                <Popup>
                вулиця Одеська, 2, Зарванці, Вінницька область <br />
                </Popup>
            </Marker>
        </MapContainer>

    );
}

export default Map;
