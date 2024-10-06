import { useEffect, useRef } from "react";
import "./Mapa.css";
import leaflet from "leaflet";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useGeolocation from "../../../hooks/useGeolocation";

function Mapa() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  let mapInstanceRef = useRef<leaflet.Map | null>(null);
  const userMarker = useRef<leaflet.Marker | null>(null);

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const location = useGeolocation();

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Inicializa o mapa apenas uma vez
      mapInstanceRef.current = leaflet
        .map(mapRef.current)
        .setView([location.latitude, location.longitude], 17);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 20,
          attribution:
            "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
        })
        .addTo(mapInstanceRef.current);
    }
  }, [location]);

  useEffect(() => {
    setUserPosition({ ...userPosition });

    if (userMarker.current) {
      mapInstanceRef.current?.removeLayer(userMarker.current);
    }

    userMarker.current = leaflet
      .marker([location.latitude, location.longitude])
      .addTo(mapInstanceRef.current!);
    mapInstanceRef.current?.setView([location.latitude, location.longitude]);
  }, [location, userPosition.latitude, userPosition.longitude]);

  return (
    <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
  );
}

export default Mapa;
