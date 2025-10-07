
import React, { useState, useMemo } from 'react';
import { destinations } from '../data/destinations';
import { Category } from '../types';
import DestinationCard from '../components/DestinationCard';

const DestinationListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');

  const categories = useMemo(() => ['ALL', ...Object.values(Category)], []);

  const filteredDestinations = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return destinations;
    }
    return destinations.filter(dest => dest.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl font-bold text-center text-slctrips-navy mb-4">Location Catalog</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Browse our collection of iconic filming locations. Select a state to focus your search or explore the entire atlas of Hollywood's hidden gems.
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as Category | 'ALL')}
            className={`px-4 py-2 text-sm font-bold rounded-full transition-colors duration-300 ${
              selectedCategory === category
                ? 'bg-slctrips-navy text-white'
                : 'bg-slctrips-mid text-slctrips-navy hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationListPage;
