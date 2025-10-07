
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
                    Hollywood's
                    <br />
                    <span className="text-slctrips-gold">Hidden Backlot.</span>
                </h1>
                <p className="text-lg md:text-xl text-slctrips-mid font-light mt-4 max-w-xl">
                    This isn't just a travel guide. It's your call sheet. Explore iconic movie locations, recreate classic scenes, and discover the cinematic secrets of the American West.
                </p>
                <Link
                    to="/destinations"
                    className="mt-8 inline-block bg-slctrips-gold text-slctrips-navy font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
                >
                    Start Your Location Scout
                </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="w-2/3 md:w-full max-w-md h-96 bg-slctrips-sky/20 flex items-center justify-center rounded-lg">
                  <p className="font-heading text-white text-4xl">DAN</p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Introduction & How-To Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-slctrips-navy mb-4">Your Guide to the Silver Screen</h2>
          <p className="text-lg mb-4 text-gray-700">
            Meet Dan, the Wasatch Sasquatch. He's not just a myth; he's a legendary location scout. He knows where all the best scenes were filmed, from epic westerns to sci-fi blockbusters.
          </p>
          <p className="text-lg text-gray-600">
            Our TripKits are your director's handbook to adventure, packed with behind-the-scenes stories, practical tips, and a dash of Hollywood magic. Let's find the perfect shot.
          </p>
        </div>

        {/* How It Works Steps */}
        <div className="pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-slctrips-navy mb-4">Your Director's Toolkit</h2>
            <p className="text-lg text-gray-600 mb-12">
              This TripKit is more than a map—it's an interactive filmmaking experience. Here's how to capture some Hollywood magic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-gold h-full flex flex-col">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Explore the Catalog</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Discover legendary filming locations. From vast desert backdrops to iconic city streets, your next adventure starts here.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-sky h-full flex flex-col">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Get AI Briefings</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Generate instant location summaries and custom shooting itineraries with our AI scout, Dan the Sasquatch.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-red h-full flex flex-col">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Log Your Shots</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Use the built-in camera and notepad to capture your findings on-site. Build your shot list just like a pro.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-navy h-full flex flex-col">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Get The Director's Cut</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Submit your shot list and receive creative feedback from our AI Director to perfect your cinematic vision.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Featured Destinations */}
      <div className="bg-slctrips-mid py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center text-slctrips-navy mb-10">Featured Film Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
           <div className="text-center mt-12">
             <Link to="/destinations" className="text-slctrips-red font-bold hover:text-red-700 text-lg transition-colors">
                See All Locations &rarr;
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;