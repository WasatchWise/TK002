import React from 'react';
import { Destination } from '../types';

interface OlympianInsightCardProps {
  insight: Destination['olympianInsight'];
}

const OlympianInsightCard: React.FC<OlympianInsightCardProps> = ({ insight }) => {
  return (
    <section className="bg-slctrips-dark-green/10 border-l-4 border-slctrips-dark-green p-6 rounded-r-lg mb-8 flex items-center gap-6">
      {insight.characterImage && (
        <img 
          src={insight.characterImage} 
          alt={`Image of ${insight.character}`}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
        />
      )}
      <div>
        <h3 className="font-heading font-bold text-xl text-slctrips-dark-green mb-2">{insight.character} Says:</h3>
        <blockquote className="italic text-gray-800 relative">
            <span className="absolute -left-3 -top-2 text-4xl text-slctrips-dark-green/20 font-serif">“</span>
            {insight.quote}
        </blockquote>
      </div>
    </section>
  );
};

export default OlympianInsightCard;
