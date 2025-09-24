
import React from 'react';
import { Destination } from '../types';

interface GuardianProfileProps {
  destination: Destination;
}

const GuardianProfile: React.FC<GuardianProfileProps> = ({ destination }) => {
  const { guardian } = destination;
  
  return (
    <div className="bg-slctrips-navy border-2 border-slctrips-gold p-6 rounded-lg mb-8 shadow-lg text-white">
      <h2 className="font-heading text-3xl font-bold text-slctrips-gold mb-4">Meet Your Guardian</h2>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-slctrips-light">
            Your guide for {destination.name} is <strong className="text-slctrips-gold font-semibold">{guardian.name}</strong>, the <strong className="text-slctrips-gold font-semibold">{guardian.animal_form}</strong>.
        </p>
        <ul className="text-slctrips-mid">
            <li><strong>Archetype:</strong> {guardian.archetype}</li>
            <li><strong>Teaches:</strong> {guardian.teaching_moment}</li>
        </ul>
        <blockquote className="border-l-4 border-slctrips-sky pl-4 italic">
            {guardian.signature_line}
        </blockquote>
      </div>
    </div>
  );
};

export default GuardianProfile;
