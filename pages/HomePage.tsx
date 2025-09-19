
import React from 'react';
import { Link } from 'react-router-dom';
import { locations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import AICaseSuggester from '../components/AICaseSuggester';

const HomePage: React.FC = () => {
  const featuredLocations = locations.filter(l => 
    l.id === 'bundy-residence-1st-ave' || 
    l.id === 'columbine-high-school' || 
    l.id === 'route-91-harvest-festival'
  );

  return (
    <div className="bg-slctrips-light text-slctrips-black">
      {/* Hero Section */}
      <div className="bg-slctrips-black text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-center md:text-left mb-10 md:mb-0">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase tracking-wider leading-tight">
                    Dark Tourism
                    <br />
                    <span className="text-slctrips-red">American West</span>
                </h1>
                <p className="text-lg md:text-xl text-slctrips-mid font-light mt-4 max-w-2xl">
                    This is not a travel guide. It's a compendium of morbid misdeeds. Explore infamous crime locations, understand the historical context, and investigate the dark underbelly of the American West.
                </p>
                <Link
                    to="/destinations"
                    className="mt-8 inline-block bg-slctrips-red text-white font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
                >
                    Explore Case Files
                </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
                 <div className="w-64 h-80 bg-slctrips-navy border-4 border-slctrips-red/50 flex items-center justify-center rounded-lg shadow-2xl">
                  <p className="font-heading text-slctrips-red text-8xl -rotate-12 opacity-50">?</p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Introduction & How-To Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-slctrips-navy mb-4">A Compendium of Crime</h2>
          <p className="text-lg mb-4 text-gray-700">
            The American West's vast landscapes hide stories of violence, mystery, and tragedy. This guide documents hundreds of dark tourism sites, providing historical context for those who wish to explore these locations with respect and understanding.
          </p>
          <p className="text-lg text-gray-600">
            Our interactive case files are your key to investigating these sites, packed with historical details, practical visiting information, and AI-powered analytical tools.
          </p>
        </div>

        {/* How It Works Steps */}
        <div className="pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-slctrips-navy mb-4">Your Investigator's Toolkit</h2>
            <p className="text-lg text-gray-600 mb-12">
              This compendium is more than a map—it's an interactive investigative experience. Here's how to conduct your research.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-gold h-full flex flex-col">
              <div className="text-5xl mb-4">🗂️</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Access the Case Files</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Discover infamous crime scenes, from frontier massacres to modern serial killer lairs. Your investigation starts here.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-sky h-full flex flex-col">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Get AI Briefings</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Generate instant case summaries and respectful visitation plans with our AI criminal profiler.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-red h-full flex flex-col">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Log Your Findings</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Use the built-in camera and notepad to document your on-site observations. Build your case file like a detective.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-navy h-full flex flex-col">
              <div className="text-5xl mb-4">🕵️</div>
              <h3 className="font-heading text-xl font-bold text-slctrips-navy mb-2">Get a Profiler's Analysis</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Submit your field logs and receive creative feedback from our AI Analyst to deepen your understanding of the case.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Case Suggester */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <AICaseSuggester />
        </div>
      </div>


      {/* Featured Locations */}
      <div className="bg-slctrips-mid py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center text-slctrips-navy mb-10">Featured Case Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLocations.map((loc) => (
              <DestinationCard key={loc.id} destination={loc} />
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