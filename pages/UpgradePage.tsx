
import React from 'react';
import PricingTiers from '../components/PricingTiers';

const UpgradePage: React.FC = () => {
  return (
    <div className="bg-slctrips-light py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slctrips-navy mb-4">
            Unlock the Full Compendium
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Choose the TripKit that best fits your investigation. Gain access to the complete catalog of destinations, from well-known headline cases to the most obscure and forgotten tragedies.
          </p>
        </div>
        <PricingTiers />
      </div>
    </div>
  );
};

export default UpgradePage;