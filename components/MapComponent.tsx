import React, { useEffect, useRef } from 'react';

// We can use the global 'L' object since Leaflet is loaded via CDN script in index.html
declare const L: any;

interface MapComponentProps {
  gps: string;
  name: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ gps, name }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
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
        markerRef.current.setLatLng([lat, lng]);
        if (typeof markerRef.current.setPopupContent === 'function') {
          markerRef.current.setPopupContent(`<b>${name}</b>`).openPopup();
        } else {
          markerRef.current.bindPopup(`<b>${name}</b>`).openPopup();
        }
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
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
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