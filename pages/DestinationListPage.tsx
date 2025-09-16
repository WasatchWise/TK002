
import React, { useMemo } from 'react';
import { locations } from '../data/destinations';
import { CrimeLocation } from '../types';
import DestinationCard from '../components/DestinationCard';

// Define categories and their matching tags in order of precedence
const categoriesConfig = [
  { name: 'The Ted Bundy Trail', tags: ['Ted Bundy'] },
  { name: 'Mass Shootings & Spree Killings', tags: ['Mass Shooting', 'Spree Killer'] },
  { name: 'Cults, Extremism & Terrorism', tags: ['Cults', 'Religious Extremism', 'Anti-Government', 'Domestic Terrorism', 'Assassination'] },
  { name: 'Serial Killers & Unsolved Mysteries', tags: ['Serial Killer', 'Unsolved Mystery', 'Missing Person'] },
  { name: 'Kidnapping & Captivity Cases', tags: ['Kidnapping', 'Abduction', 'Survivor'] },
  { name: 'Prisons, Executions & Riots', tags: ['Prison', 'Execution', 'Prison Riot'] },
  { name: 'Wild West & Frontier Justice', tags: ['Wild West', 'Vigilante', 'Gunfighter', 'Outlaw', 'Range War'] },
  { name: 'Historical Massacres', tags: ['Massacre'] },
  { name: 'Infamous Murders', tags: ['Murder', 'Mass Murder', 'Familicide', 'Cannibalism'] },
];


const DestinationListPage: React.FC = () => {

  const groupedLocations = useMemo(() => {
    const groups: Record<string, CrimeLocation[]> = {};
    const assignedIds = new Set<string>();

    // Assign locations to the first matching category based on the config order
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
        // Sort locations within the category alphabetically by name
        categoryLocations.sort((a, b) => a.name.localeCompare(b.name));
        groups[category.name] = categoryLocations;
      }
    });

    // Add any remaining unassigned locations to a general category
    const unassigned = locations.filter(loc => !assignedIds.has(loc.id));
    if (unassigned.length > 0) {
      unassigned.sort((a, b) => a.name.localeCompare(b.name));
      groups['Other Noteworthy Cases'] = unassigned;
    }

    return groups;
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl font-bold text-center text-slctrips-navy mb-4">Case File Catalog</h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore the compendium of infamous crime locations, now grouped by theme. This curated view highlights criminal patterns, historical eras, and the connections between these dark sites.
      </p>

      {Object.entries(groupedLocations).map(([categoryName, categoryLocations]) => (
        <section key={categoryName} className="mb-16">
          <div className="mb-6 pb-2 border-b-2 border-slctrips-red/30">
            <h2 className="font-heading text-3xl font-bold text-slctrips-red">
              {categoryName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryLocations.map(location => (
              <DestinationCard key={location.id} destination={location} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default DestinationListPage;
