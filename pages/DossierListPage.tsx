
import React, { useState, useMemo } from 'react';
import { dossiers } from '../data/dossiers';
import { Dossier } from '../types';
import DossierCard from '../components/DossierCard';
import SectionHeader from '../components/ui/SectionHeader';

const DossierListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => ['All', ...new Set(dossiers.map(d => d.category))], []);

  const filteredDossiers = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'All') {
      return dossiers;
    }
    return dossiers.filter(dossier => dossier.category === selectedCategory);
  }, [selectedCategory]);

  const groupedDossiers = useMemo(() => {
    const groups: Record<string, Dossier[]> = {};
    filteredDossiers.forEach(dossier => {
      const categoryName = dossier.category;
      if (!groups[categoryName]) {
        groups[categoryName] = [];
      }
      groups[categoryName].push(dossier);
    });
    
    // Order groups by the main category list order
    const orderedGroups: Record<string, Dossier[]> = {};
    const categoryOrder = categories.slice(1); // Exclude 'All'
    categoryOrder.forEach(catName => {
        if (groups[catName]) {
            orderedGroups[catName] = groups[catName];
        }
    });

    return orderedGroups;
  }, [filteredDossiers, categories]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl font-bold text-center text-slctrips-navy mb-4">Dossier Archives</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Browse detailed profiles of the key individuals and overarching cases in the compendium. Filter by category to focus your investigation.
      </p>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={`font-bold py-2 px-4 rounded-full text-sm transition-colors duration-300 ${
              (selectedCategory === category || (selectedCategory === null && category === 'All'))
                ? 'bg-slctrips-navy text-white'
                : 'bg-white text-slctrips-navy hover:bg-slctrips-mid border border-slctrips-mid'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {Object.entries(groupedDossiers).length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-slctrips-navy">No Dossiers Found</p>
              <p className="text-gray-600 mt-2">Try adjusting your filter criteria.</p>
          </div>
      ) : (
        Object.entries(groupedDossiers).map(([categoryName, categoryDossiers]) => (
            <section key={categoryName} className="mb-16">
                <SectionHeader title={categoryName} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {categoryDossiers.map(dossier => (
                    <DossierCard key={dossier.id} dossier={dossier} />
                ))}
                </div>
            </section>
        ))
      )}
    </div>
  );
};

export default DossierListPage;