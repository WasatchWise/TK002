
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slctrips-navy text-center py-6 border-t-4 border-slctrips-red">
      <div className="container mx-auto px-4">
        <p className="text-slctrips-mid text-sm">
          Dark Tourism West &copy; {new Date().getFullYear()}. For informational purposes only.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Always be respectful of private property, residents, and the sensitive nature of these locations. You are responsible for your own safety and compliance with local laws.
        </p>
      </div>
    </footer>
  );
};

export default Footer;