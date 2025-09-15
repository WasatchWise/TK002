
import React from 'react';
import { Link } from 'react-router-dom';
import { Destination } from '../types';
import DangerBadge from './DangerBadge';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { id, name, subtitle, category, dangerLevel, dangerDescription } = destination;

  return (
    <Link 
      to={`/destinations/${id}`} 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group border border-gray-200"
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <div>
                <p className="text-xs text-slctrips-orange font-bold uppercase tracking-wider">{category}</p>
                <h2 className="font-heading text-2xl font-bold text-slctrips-navy mt-1 group-hover:text-slctrips-red transition-colors duration-300">{name}</h2>
            </div>
            <DangerBadge level={dangerLevel} description={dangerDescription} small={true}/>
        </div>
        <p className="text-gray-600 mt-2 flex-grow text-sm">{subtitle}</p>
        <div className="mt-4 pt-4 border-t border-slctrips-mid">
             <div className="text-center text-slctrips-blue group-hover:text-slctrips-navy font-bold transition-colors">
                View Guide &rarr;
             </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(DestinationCard);
