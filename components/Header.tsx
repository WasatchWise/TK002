
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#F4B441', // slctrips-gold
    borderBottom: '2px solid #F4B441'
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b-4 border-slctrips-navy">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <div className="font-heading text-2xl font-bold text-slctrips-sky">
            SLCTRIPS
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            end
            className="text-slctrips-navy hover:text-slctrips-gold font-bold transition-colors pb-1 text-lg"
            style={({ isActive }) => isActive ? activeLinkStyle : {}}
          >
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            className="text-slctrips-navy hover:text-slctrips-gold font-bold transition-colors pb-1 text-lg"
            style={({ isActive }) => isActive ? activeLinkStyle : {}}
          >
            Counties
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
