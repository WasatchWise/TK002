
import React from 'react';
import { Link } from 'react-router-dom';
import { CrimeLocation, State } from '../types';
import NotorietyBadge from './FameBadge';

interface LocationCardProps {
  destination: Partial<CrimeLocation> & { id: string; name: string; state: State };
  verified?: boolean;
}

const LocationCard: React.FC<LocationCardProps> = ({ destination, verified = true }) => {
  const { id, name, crime, state, notorietyLevel } = destination;

  const linkTo = verified ? `/destinations/${id}` : `/create-case/${id}`;

  return (
    <Link 
      to={linkTo} 
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group border border-gray-200 ${!verified ? 'opacity-80 hover:opacity-100 border-dashed' : ''}`}
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <div>
                <p className="text-xs text-slctrips-red font-bold uppercase tracking-wider">{state}</p>
                <h2 className="font-heading text-2xl font-bold text-slctrips-navy mt-1 group-hover:text-slctrips-red transition-colors duration-300">{name}</h2>
            </div>
            {verified && notorietyLevel ? (
              <NotorietyBadge level={notorietyLevel} description={notorietyLevel} small={true}/>
            ) : (
              <div title="Unverified Case File" className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-gray-200 text-slctrips-navy font-bold shadow-inner">?</div>
            )}
        </div>
        <p className="text-gray-600 mt-2 flex-grow text-sm">{verified ? crime : 'This case file is incomplete and requires investigation.'}</p>
        <div className="mt-4 pt-4 border-t border-slctrips-mid">
             <div className="text-center text-slctrips-sky group-hover:text-slctrips-navy font-bold transition-colors">
                {verified ? 'View Case File' : 'Create Case File'} &rarr;
             </div>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;