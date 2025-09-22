
import React from 'react';
import GlobalMapComponent from '../components/GlobalMapComponent';
import { locations } from '../data/destinations';

const MapRoomPage: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-130px)]">
        <div className="container mx-auto px-4 pt-8 text-center">
            <h1 className="font-heading text-5xl font-bold text-slctrips-navy mb-2">Map Room</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
                A geographical overview of all documented case files in the compendium. Pan, zoom, and click any pin to begin your investigation.
            </p>
        </div>
        <div className="flex-grow p-4">
            <GlobalMapComponent locations={locations} />
        </div>
    </div>
  );
};

export default MapRoomPage;
