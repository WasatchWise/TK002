
import React from 'react';
import { DangerLevel } from '../types';

interface DangerBadgeProps {
  level: DangerLevel;
  description: string;
  small?: boolean;
}

const DangerBadge: React.FC<DangerBadgeProps> = ({ level, description, small=false }) => {
  const levelStyles: Record<DangerLevel, string> = {
    [DangerLevel.MODERATE]: 'bg-slctrips-green text-white',
    [DangerLevel.HIGH]: 'bg-slctrips-gold text-slctrips-navy',
    [DangerLevel.EXTREME]: 'bg-slctrips-orange text-white',
    [DangerLevel.LETHAL]: 'bg-slctrips-red text-white border border-slctrips-mid',
  };

  const icon: Record<DangerLevel, string> = {
    [DangerLevel.MODERATE]: '🛡️',
    [DangerLevel.HIGH]: '⚠️',
    [DangerLevel.EXTREME]: '🔥',
    [DangerLevel.LETHAL]: '☠️',
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

export default DangerBadge;