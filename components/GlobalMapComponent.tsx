
import React, { useEffect, useRef } from 'react';
import { CrimeLocation } from '../types';

declare const L: any;

interface GlobalMapComponentProps {
  locations: CrimeLocation[];
}

const GlobalMapComponent: React.FC<GlobalMapComponentProps> = ({ locations }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current).setView([40, -111], 5); // Center on the American West
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markers: any[] = [];
    locations.forEach(location => {
      const coords = location.gps.split(',').map(Number);
      if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
        const [lat, lng] = coords;
        const popupContent = `
            <div class="font-sans">
                <h3 class="font-bold text-base text-slctrips-navy mb-1">${location.name}</h3>
                <p class="text-xs text-gray-600 mb-2">${location.crime}</p>
                <a href="/#/destinations/${location.id}" class="text-slctrips-sky font-bold text-sm">View Case File &rarr;</a>
            </div>
        `;
        const marker = L.marker([lat, lng]).bindPopup(popupContent);
        markers.push(marker);
      }
    });

    if (markers.length > 0) {
      const featureGroup = L.featureGroup(markers).addTo(map);
      map.fitBounds(featureGroup.getBounds().pad(0.1));
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locations]);

  return (
    <div 
        ref={mapContainerRef} 
        className="h-full w-full rounded-lg border-2 border-slctrips-mid shadow-lg"
        aria-label="Global map of all crime locations"
    />
  );
};

export default GlobalMapComponent;
