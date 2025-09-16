
import React from 'react';
import { NotorietyLevel } from '../types';

interface NotorietyBadgeProps {
  level: NotorietyLevel;
  description: string;
  small?: boolean;
}

const NotorietyBadge: React.FC<NotorietyBadgeProps> = ({ level, description, small = false }) => {
  const levelStyles: Record<NotorietyLevel, string> = {
    [NotorietyLevel.LOCAL]: 'bg-slctrips-sky text-white',
    [NotorietyLevel.NATIONAL]: 'bg-slctrips-gold text-slctrips-navy',
    [NotorietyLevel.ICONIC]: 'bg-slctrips-red text-white',
    [NotorietyLevel.LEGENDARY]: 'bg-slctrips-black text-slctrips-red border border-slctrips-red',
  };

  const icon: Record<NotorietyLevel, string> = {
    [NotorietyLevel.LOCAL]: '📰',
    [NotorietyLevel.NATIONAL]: '⚖️',
    [NotorietyLevel.ICONIC]: '🔪',
    [NotorietyLevel.LEGENDARY]: '💀',
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

export default NotorietyBadge;