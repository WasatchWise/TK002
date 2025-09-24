
import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

const HomePage: React.FC = () => {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="bg-slctrips-light text-slctrips-black">
      {/* Hero Section */}
      <div className="bg-slctrips-navy text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase tracking-wider leading-tight">
                    The Mount Olympus
                    <br />
                    <span className="text-slctrips-gold">Atlas</span>
                </h1>
                 <p className="font-sans text-lg md:text-xl text-slctrips-mid font-light mt-2">A 4th Grader's Utah Journey</p>
                <p className="text-lg text-slctrips-mid font-light mt-6 max-w-xl">
                    "Hey there, future Pathfinder! I'm Daniel, your trusty guide. Forget old textbooks—we're about to explore the real Utah, county by county! Every part of our amazing state has a special Guardian who protects its land, history, and people. So, grab your curiosity, and let’s meet them!"
                </p>
                <Link
                    to="/destinations"
                    className="mt-8 inline-block bg-slctrips-gold text-slctrips-navy font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
                >
                    Start Your Adventure
                </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="w-2/3 md:w-full max-w-md h-96 bg-slctrips-sky/20 flex flex-col items-center justify-center rounded-lg p-4 text-center">
                  <p className="text-6xl">🐾</p>
                  <p className="font-heading text-white text-3xl mt-4">Daniel</p>
                  <p className="text-slctrips-mid text-lg">The Wasatch Sasquatch</p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Introduction & How-To Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-slctrips-navy mb-4">Your Guide to Utah's Wonders</h2>
          <p className="text-lg mb-4 text-gray-700">
            Meet the Guardians of Utah—legendary animal spirits who protect the state's natural and cultural treasures. From Daniel the Wasatch Sasquatch to Jorah the Muskrat, each guardian has lessons to teach about their home county.
          </p>
          <p className="text-lg text-gray-600">
            Our TripKits are your field journal for discovery, packed with learning objectives, safety tips, and a dash of magic. Let's start the expedition.
          </p>
        </div>

        {/* How It Works Steps */}
        <div className="pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-slctrips-navy mb-4">Your Guardian Toolkit</h2>
            <p className="text-lg text-gray-600 mb-12">
              This TripKit is more than a guide—it's an interactive quest. Here's how to become a Junior Guardian.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-gold h-full flex flex-col">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Choose Your County</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Discover the 29 counties of Utah and the unique guardians that protect them. Your next adventure starts here.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-sky h-full flex flex-col">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Explore the Dossier</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Dive into each county's unique story, learning objectives, and field trip stops prepared by its guardian.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-red h-full flex flex-col">
              <div className="text-5xl mb-4">🎒</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Plan Your Field Trip</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Use the detailed guides, safety notes, and learning activities to prepare for an educational adventure in the field.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-green h-full flex flex-col">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Become a Guardian</h3>
              <p className="text-gray-600 text-sm flex-grow">
                By learning about and protecting Utah's heritage, you become a Junior Guardian of its treasures.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Featured Destinations */}
      <div className="bg-slctrips-mid py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center text-slctrips-navy mb-10">Featured County Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
           <div className="text-center mt-12">
             <Link to="/destinations" className="text-slctrips-red font-bold hover:text-red-700 text-lg transition-colors">
                See All Counties &rarr;
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;