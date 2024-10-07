import { useEffect, useRef } from "react";
import "./Mapa.css";
import L from "leaflet";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useGeolocation from "../../../hooks/useGeolocation";

interface MarkerPosition {
  latitude: number;
  longitude: number;
}

function Mapa() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const userMarker = useRef<L.Marker | null>(null);

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const [nearbyMarkers, setNearbyMarkers] = useLocalStorage(
    "NEARBY_MARKERS",
    [] as MarkerPosition[]
  );

  const location = useGeolocation();

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Inicializa o mapa apenas uma vez
      mapInstanceRef.current = L.map(mapRef.current).setView(
        [location.latitude, location.longitude],
        17
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution:
          "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
      }).addTo(mapInstanceRef.current);

      if (Array.isArray(nearbyMarkers)) {
        nearbyMarkers.forEach(({ latitude, longitude }: MarkerPosition) => {
          L.marker([latitude, longitude])
            .addTo(mapInstanceRef.current!)
            .bindPopup(`USER: ${userPosition}`);
        });
      }

      mapInstanceRef.current.addEventListener("click", (e) => {
        const { lat: latitude, lng: longitude } = e.latlng;

        L.marker([latitude, longitude])
          .addTo(mapInstanceRef.current!)
          .bindPopup(
            `lat: ${latitude.toFixed(2)}, lon: ${longitude.toFixed(2)}`
          );
        setNearbyMarkers((prevMarkers: [number]) => [
          ...prevMarkers,
          { latitude, longitude },
        ]);
      });
    }
  }, [location.latitude, location.longitude, nearbyMarkers]);

  useEffect(() => {
    setUserPosition({
      ...userPosition,
    });

    if (userMarker.current) {
      mapInstanceRef.current?.removeLayer(userMarker.current);
    }

    userMarker.current = L.marker([
      location.latitude,
      location.longitude,
    ]).addTo(mapInstanceRef.current!).bindPopup(`Lat: ${location.latitude}
        Long: ${location.longitude}`);

    const el = userMarker.current.getElement();
    if (el) {
      el.style.filter = "hue-rotate(120deg)";
    }

    mapInstanceRef.current?.setView([location.latitude, location.longitude]);
  }, [location, setUserPosition]);

  return (
    <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
  );
}

export default Mapa;
