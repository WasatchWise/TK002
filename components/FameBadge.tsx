
import React from 'react';
import { FameLevel } from '../types';

interface FameBadgeProps {
  level: FameLevel;
  description: string;
  small?: boolean;
}

const FameBadge: React.FC<FameBadgeProps> = ({ level, description, small = false }) => {
  const levelStyles: Record<FameLevel, string> = {
    [FameLevel.INDIE]: 'bg-slctrips-sky text-white',
    [FameLevel.BLOCKBUSTER]: 'bg-slctrips-gold text-slctrips-navy',
    [FameLevel.ICONIC]: 'bg-slctrips-red text-white',
    [FameLevel.LEGENDARY]: 'bg-slctrips-black text-slctrips-gold border border-slctrips-gold',
  };

  const icon: Record<FameLevel, string> = {
    [FameLevel.INDIE]: '🎬',
    [FameLevel.BLOCKBUSTER]: '🌟',
    [FameLevel.ICONIC]: '🏆',
    [FameLevel.LEGENDARY]: '📜',
  };
  
  if (small) {
    return (
        <div title={`${level}: ${description}`} className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm ${levelStyles[level]}`}>
            {icon[level]}
        </div>
    )
  }

  return (
    <div className={`inline-flex flex-col items-center justify-center p-3 rounded-lg shadow-md ${levelStyles[level]}`}>
      <span className="text-2xl">{icon[level]}</span>
      <span className="font-bold text-sm mt-1">{level}</span>
      <span className="text-xs opacity-80 uppercase tracking-wider">{description}</span>
    </div>
  );
};

export default FameBadge;