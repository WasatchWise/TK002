
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#B33C1A', // slctrips-red
    borderBottom: '2px solid #B33C1A'
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b-4 border-slctrips-navy">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <div className="font-heading text-xl lg:text-2xl font-bold text-slctrips-navy">
            DARK TOURISM <span className="text-slctrips-red">WEST</span>
          </div>
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              end
              className="text-slctrips-navy hover:text-slctrips-red font-bold transition-colors pb-1 text-base"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              Home
            </NavLink>
            <NavLink
              to="/destinations"
              className="text-slctrips-navy hover:text-slctrips-red font-bold transition-colors pb-1 text-base"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              Locations
            </NavLink>
            <NavLink
              to="/dossiers"
              className="text-slctrips-navy hover:text-slctrips-red font-bold transition-colors pb-1 text-base"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              Dossiers
            </NavLink>
             <NavLink
              to="/map-room"
              className="text-slctrips-navy hover:text-slctrips-red font-bold transition-colors pb-1 text-base"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              Map Room
            </NavLink>
             <NavLink
              to="/field-kit"
              className="text-slctrips-navy hover:text-slctrips-red font-bold transition-colors pb-1 text-base"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              Field Kit
            </NavLink>
          </nav>
          <a
            href="https://github.com/slctrips/kits"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-slctrips-navy text-white font-bold py-2 px-4 rounded-full text-xs uppercase hover:bg-slctrips-black transition-colors duration-300"
          >
            Marketplace
          </a>
          <Link
            to="/upgrade"
            className="bg-slctrips-gold text-slctrips-navy font-bold py-2 px-4 rounded-full text-xs uppercase hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;