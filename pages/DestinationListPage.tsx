
import React, { useMemo, useState } from 'react';
import { locations } from '../data/destinations';
import { unverifiedLocations } from '../data/unverified_destinations';
import { categoriesConfig } from '../data/categories';
import { CrimeLocation, State, UnverifiedCrimeLocation } from '../types';
import DestinationCard from '../components/DestinationCard';
import SectionHeader from '../components/ui/SectionHeader';

const DestinationListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const allStates = Object.values(State);
  const allCategories = categoriesConfig.map(c => c.name);

  const handleStateChange = (state: string) => {
    setSelectedStates(prev =>
      prev.includes(state) ? prev.filter(s => s !== state) : [...prev, state]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedStates([]);
    setSelectedCategories([]);
  };

  const locationCategoryMap = useMemo(() => {
    const map = new Map<string, string>();
    const assignedIds = new Set<string>();
    categoriesConfig.forEach(category => {
      locations.forEach(location => {
        if (assignedIds.has(location.id)) return;
        const hasMatchingTag = location.tags?.some(tag => category.tags.includes(tag));
        if (hasMatchingTag) {
          map.set(location.id, category.name);
          assignedIds.add(location.id);
        }
      });
    });
    locations.forEach(location => {
      if (!map.has(location.id)) {
        map.set(location.id, 'Other Noteworthy Cases');
      }
    });
    return map;
  }, []);

  const filteredVerifiedLocations = useMemo(() => {
    return locations.filter(location => {
      const searchMatch =
        searchTerm.trim() === '' ||
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.crime.toLowerCase().includes(searchTerm.toLowerCase());
      
      const stateMatch = selectedStates.length === 0 || selectedStates.includes(location.state);
      
      const categoryName = locationCategoryMap.get(location.id);
      const categoryMatch = selectedCategories.length === 0 || (categoryName && selectedCategories.includes(categoryName));
      
      return searchMatch && stateMatch && categoryMatch;
    });
  }, [searchTerm, selectedStates, selectedCategories, locationCategoryMap]);

  const groupedLocations = useMemo(() => {
    const groups: Record<string, CrimeLocation[]> = {};
    filteredVerifiedLocations.forEach(location => {
      const categoryName = locationCategoryMap.get(location.id) || 'Other Noteworthy Cases';
      if (!groups[categoryName]) {
        groups[categoryName] = [];
      }
      groups[categoryName].push(location);
    });

    const orderedGroups: Record<string, CrimeLocation[]> = {};
    const categoryOrder = [...categoriesConfig.map(c => c.name), 'Other Noteworthy Cases'];
    categoryOrder.forEach(catName => {
      if (groups[catName]) {
        orderedGroups[catName] = groups[catName];
      }
    });

    return orderedGroups;
  }, [filteredVerifiedLocations, locationCategoryMap]);

  const filteredUnverified = useMemo(() => {
    return unverifiedLocations
      .filter(location => {
        const searchMatch =
          searchTerm.trim() === '' ||
          location.name.toLowerCase().includes(searchTerm.toLowerCase());
        const stateMatch = selectedStates.length === 0 || selectedStates.includes(location.state);
        return searchMatch && stateMatch;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedStates]);
  
  const totalResults = Object.keys(groupedLocations).length + filteredUnverified.length;


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl font-bold text-center text-slctrips-navy mb-4">Case File Catalog</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Explore the compendium of infamous crime locations. Use the tools below to search and filter the archives.
      </p>

      {/* Filter Panel */}
      <div className="bg-white p-4 sm:p-6 rounded-lg mb-12 border border-gray-200 shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Search by name or crime..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-slctrips-gold focus:border-slctrips-gold"
            aria-label="Search locations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* State Filter */}
            <details className="border rounded-md p-3" open>
              <summary className="font-bold text-slctrips-navy cursor-pointer">Filter by State</summary>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 max-h-48 overflow-y-auto">
                {allStates.map(state => (
                  <label key={state} className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedStates.includes(state)}
                      onChange={() => handleStateChange(state)}
                      className="form-checkbox h-4 w-4 text-slctrips-sky rounded focus:ring-slctrips-sky"
                    />
                    <span>{state}</span>
                  </label>
                ))}
              </div>
            </details>
            {/* Category Filter */}
            <details className="border rounded-md p-3" open>
              <summary className="font-bold text-slctrips-navy cursor-pointer">Filter by Category</summary>
              <div className="space-y-1 mt-2 max-h-48 overflow-y-auto">
                {allCategories.map(category => (
                  <label key={category} className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="form-checkbox h-4 w-4 text-slctrips-sky rounded focus:ring-slctrips-sky"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </details>
          </div>
          {(searchTerm || selectedStates.length > 0 || selectedCategories.length > 0) && (
            <button
              onClick={clearFilters}
              className="bg-slctrips-mid text-slctrips-navy font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors text-sm justify-self-start"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {totalResults === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-slctrips-navy">No Case Files Found</p>
              <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria.</p>
          </div>
      )}

      {Object.entries(groupedLocations).map(([categoryName, categoryLocations]) => (
        <section key={categoryName} className="mb-16">
          <SectionHeader title={categoryName} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {categoryLocations.map(location => (
              <DestinationCard key={location.id} destination={location} />
            ))}
          </div>
        </section>
      ))}

      {filteredUnverified.length > 0 && (
        <section className="mb-16">
          <SectionHeader title="Pending Investigations" />
          <p className="text-gray-600 my-4 max-w-3xl">These case files are incomplete. Select one to use AI-powered research tools to build out the dossier and expand the compendium.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredUnverified.map(location => (
              <DestinationCard key={location.id} destination={location} verified={false} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DestinationListPage;
