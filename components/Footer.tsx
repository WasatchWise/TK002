import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slctrips-navy text-center py-6 border-t-4 border-slctrips-gold">
      <div className="container mx-auto px-4">
        <p className="text-slctrips-mid text-sm">
          SLCTrips &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Adventure responsibly. Conditions change quickly. You are responsible for your own safety and compliance with local rules.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Information such as park fees and hours are subject to change. Please verify details before your trip. Content last reviewed October 2023.
        </p>
      </div>
    </footer>
  );
};

export default Footer;