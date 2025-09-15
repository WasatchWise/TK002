
import React from 'react';
import { Link } from 'react-router-dom';
import { useDestinations } from '../context/DestinationsContext';
import DestinationCard from '../components/DestinationCard';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage: React.FC = () => {
  const { destinations, isLoading } = useDestinations();
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="bg-slctrips-light text-slctrips-black">
      {/* Hero Section */}
      <div className="bg-slctrips-navy text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase tracking-wider leading-tight">
                    Your Next
                    <br />
                    <span className="text-slctrips-gold">Investigation Awaits.</span>
                </h1>
                <p className="text-lg md:text-xl text-slctrips-mid font-light mt-4 max-w-xl">
                    This isn't just a travel guide. It's a toolkit for adventure. Explore mysterious locations, gather evidence, and build your own case file on the unexplained.
                </p>
                <Link
                    to="/destinations"
                    className="mt-8 inline-block bg-slctrips-gold text-slctrips-navy font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
                >
                    Start Your Investigation
                </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src="./assets/dan-mascot-transparent-bg.png" alt="Dan the Wasatch Sasquatch, mascot for SLCTrips" className="w-2/3 md:w-full max-w-md"/>
            </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-slctrips-navy mb-4">Your Gentle Guide to Everywhere</h2>
          <p className="text-lg mb-4 text-gray-700">
            Meet Dan, the Wasatch Sasquatch. He's big, he's woolly, and he knows the most interesting thing just off the main road. He's your guide to the wonders of Utah, from the well-known to the weird.
          </p>
          <p className="text-lg text-gray-600">
            Our TripKits are more than just maps; they're curated adventures filled with local stories, practical tips, and a dash of mystery. We believe the best adventures are accessible, safe, and fun for the whole family.
          </p>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="bg-slctrips-mid py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center text-slctrips-navy mb-10">Featured Investigations</h2>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          )}
           <div className="text-center mt-12">
             <Link to="/destinations" className="text-slctrips-red font-bold hover:text-red-700 text-lg transition-colors">
                See All Destinations &rarr;
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
