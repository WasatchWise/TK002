import React, { useEffect, useRef } from 'react';

// We can use the global 'L' object since Leaflet is loaded via CDN script in index.html
declare const L: any;

interface MapComponentProps {
  gps: string;
  name: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ gps, name }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || !gps) return;

    // Parse coordinates, handle potential errors
    const coords = gps.split(',').map(Number);
    if (coords.length !== 2 || isNaN(coords[0]) || isNaN(coords[1])) {
      console.error("Invalid GPS coordinates provided:", gps);
      return;
    }
    const [lat, lng] = coords;

    // Prevent map re-initialization
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([lat, lng], 10);

      if (markerRef.current) {
        markerRef.current
          .setLatLng([lat, lng])
          .bindPopup(`<b>${name}</b>`)
          .openPopup();
      } else {
        const newMarker = L.marker([lat, lng]).addTo(mapInstanceRef.current);
        newMarker.bindPopup(`<b>${name}</b>`).openPopup();
        markerRef.current = newMarker;
      }

      return;
    }

    // Initialize map
    const map = L.map(mapContainerRef.current, {
      scrollWheelZoom: false, // More user-friendly on scrollable pages
    }).setView([lat, lng], 10);
    mapInstanceRef.current = map;

    // Add standard tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>${name}</b>`).openPopup();
    markerRef.current = marker;

    // Cleanup on component unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      markerRef.current = null;
    };
  }, [gps, name]);

  return (
    <div 
        ref={mapContainerRef} 
        className="h-48 w-full rounded-lg border-2 border-slctrips-mid"
        aria-label={`Map showing location of ${name}`}
    />
  );
};

export default MapComponent;