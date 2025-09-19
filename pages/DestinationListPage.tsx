
import React, { useMemo } from 'react';
import { locations } from '../data/destinations';
import { unverifiedLocations } from '../data/unverified_destinations';
import { categoriesConfig } from '../data/categories';
import { CrimeLocation } from '../types';
import DestinationCard from '../components/DestinationCard';
import SectionHeader from '../components/ui/SectionHeader';

const DestinationListPage: React.FC = () => {

  const groupedLocations = useMemo(() => {
    const groups: Record<string, CrimeLocation[]> = {};
    const assignedIds = new Set<string>();

    categoriesConfig.forEach(category => {
      const categoryLocations: CrimeLocation[] = [];
      locations.forEach(location => {
        if (assignedIds.has(location.id)) return;
        
        const hasMatchingTag = location.tags?.some(tag => category.tags.includes(tag));
        if (hasMatchingTag) {
          categoryLocations.push(location);
          assignedIds.add(location.id);
        }
      });

      if (categoryLocations.length > 0) {
        categoryLocations.sort((a, b) => a.name.localeCompare(b.name));
        groups[category.name] = categoryLocations;
      }
    });

    const unassigned = locations.filter(loc => !assignedIds.has(loc.id));
    if (unassigned.length > 0) {
      unassigned.sort((a, b) => a.name.localeCompare(b.name));
      groups['Other Noteworthy Cases'] = unassigned;
    }

    return groups;
  }, []);

  const sortedUnverified = useMemo(() => {
    return [...unverifiedLocations].sort((a,b) => a.name.localeCompare(b.name));
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl font-bold text-center text-slctrips-navy mb-4">Case File Catalog</h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore the compendium of infamous crime locations, now grouped by theme. This curated view highlights criminal patterns, historical eras, and the connections between these dark sites.
      </p>

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

      <section className="mb-16">
        <SectionHeader title="Pending Investigations" />
        <p className="text-gray-600 my-4 max-w-3xl">These case files are incomplete. Select one to use AI-powered research tools to build out the dossier and expand the compendium.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {sortedUnverified.map(location => (
            <DestinationCard key={location.id} destination={location} verified={false} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationListPage;