
import React from 'react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

const DestinationListPage: React.FC = () => {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl font-bold text-center text-slctrips-navy mb-4">County Directory</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Browse our collection of educational adventures. Select a county to learn about its unique geography, history, and its legendary guardian.
      </p>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationListPage;
