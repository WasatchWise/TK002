
import React from 'react';

const PricingTiers: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
      {/* Tier 1: Sampler (Free) */}
      <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md h-full flex flex-col">
        <h3 className="font-heading text-3xl font-bold text-slctrips-navy">Sampler</h3>
        <p className="text-gray-500 mt-1">Get a taste of the investigation</p>
        <p className="text-5xl font-bold text-slctrips-navy my-6">Free</p>
        <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> ~10 Hand-Picked Entries
          </li>
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> Experience the App's Style
          </li>
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> Instant Access
          </li>
        </ul>
        <button className="w-full bg-slctrips-mid text-slctrips-navy font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
          Your Current Plan
        </button>
      </div>

      {/* Tier 2: Explorer Pack (Core) - Highlighted */}
      <div className="bg-white rounded-lg p-8 border-2 border-slctrips-gold shadow-2xl h-full flex flex-col transform lg:scale-105 relative">
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-slctrips-gold text-slctrips-navy font-bold text-xs uppercase px-4 py-1 rounded-full">
          Best Value
        </div>
        <h3 className="font-heading text-3xl font-bold text-slctrips-navy">Explorer Pack</h3>
        <p className="text-gray-500 mt-1">The essential TripKit for most users</p>
        <div className="my-6">
            <span className="text-5xl font-bold text-slctrips-navy">$8</span>
            <span className="text-gray-500"> / one-time</span>
        </div>
        <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> ~80 Core Destinations
          </li>
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> Uncover the Full Story
          </li>
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> Perfect for Casual Explorers
          </li>
        </ul>
        <button className="w-full bg-slctrips-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors transform hover:scale-105">
          Unlock the Full Adventure
        </button>
      </div>

      {/* Tier 3: Collector's Edition (Premium) */}
      <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md h-full flex flex-col">
        <h3 className="font-heading text-3xl font-bold text-slctrips-navy">Collector's Edition</h3>
        <p className="text-gray-500 mt-1">For the completionist investigator</p>
        <div className="my-6">
            <span className="text-5xl font-bold text-slctrips-navy">$20</span>
            <span className="text-gray-500"> / one-time</span>
        </div>
        <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> 150+ All Documented Locations
          </li>
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> Includes Obscure & Hidden Cases
          </li>
          <li className="flex items-center">
            <span className="text-slctrips-green mr-2">✔️</span> Bonus Digital Map PDF
          </li>
        </ul>
        <button className="w-full bg-slctrips-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-slctrips-black transition-colors">
          Own the Complete TripKit
        </button>
      </div>
    </div>
  );
};

export default PricingTiers;