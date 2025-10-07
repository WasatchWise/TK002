
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { EvidenceItem } from '../types';
import FameBadge from '../components/FameBadge';
import GeminiMissionBriefing from '../components/GeminiMissionBriefing';
import MapComponent from '../components/MapComponent';
import FieldInvestigationKit from '../components/FieldInvestigationKit';
import FieldReport from '../components/FieldReport';
import EvidenceBoard from '../components/EvidenceBoard';
import GeminiTrivia from '../components/GeminiTrivia';

const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  const [evidenceItems, setEvidenceItems] = useState<EvidenceItem[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setEvidenceItems([]); // Reset evidence when changing pages
  }, [id]);

  if (!destination) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-4xl font-bold text-slctrips-red">Location Not Found</h1>
        <p className="text-gray-600 mt-4">The coordinates for this film location are missing from our map.</p>
        <button onClick={() => navigate('/destinations')} className="mt-6 bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300">
          Return to Catalog
        </button>
      </div>
    );
  }

  const handlePinEvidence = (item: Omit<EvidenceItem, 'id'>) => {
    setEvidenceItems(prev => [...prev, { ...item, id: `evidence-${Date.now()}` }]);
  };

  const relatedDestinations = destination.relatedDestinationIds
    .map(relatedId => destinations.find(d => d.id === relatedId))
    .filter((d): d is NonNullable<typeof d> => d !== undefined);

  return (
    <div className="bg-slctrips-light">
        <header className="bg-slctrips-navy text-white py-10 text-center relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-slctrips-gold font-sans font-bold uppercase tracking-widest">{destination.category}</p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">{destination.name}</h1>
                <p className="text-lg text-slctrips-mid mt-2">{destination.subtitle}</p>
            </div>
        </header>
        <nav className="bg-white text-sm p-3 text-center border-b border-slctrips-mid sticky top-[68px] z-40">
            <Link to="/destinations" className="text-slctrips-sky hover:text-slctrips-navy font-bold">🎬 All Locations</Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-slctrips-black font-semibold">{destination.name}</span>
        </nav>

        <div className="container mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <GeminiMissionBriefing destination={destination} />

                    <FieldInvestigationKit destination={destination} />
                    
                    <GeminiTrivia destination={destination} />

                    <FieldReport onPinEvidence={handlePinEvidence} />

                    <EvidenceBoard destination={destination} evidenceItems={evidenceItems} />

                    <section className="bg-white p-6 rounded-lg mb-8 shadow-md">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 mb-4">Location History</h2>
                        {destination.story.map((p, i) => <p key={i} className="mb-4 text-gray-700 leading-relaxed">{p}</p>)}
                    </section>

                    <section className="bg-white p-6 rounded-lg mb-8 shadow-md overflow-hidden">
                        <h3 className="font-heading text-2xl font-bold text-slctrips-navy mb-4">{destination.moviesFilmed.title}</h3>
                        <div className="flex overflow-x-auto space-x-4 pb-4 -mb-4">
                            {destination.moviesFilmed.movies.map((movie, i) => (
                                <div key={i} className="flex-shrink-0 w-40 text-center group">
                                    <img 
                                        src={movie.posterUrl} 
                                        alt={`Poster for ${movie.title}`} 
                                        className="w-full h-60 object-cover rounded-md shadow-lg transform transition-transform duration-300 group-hover:scale-105" 
                                    />
                                    <p className="mt-2 text-sm font-semibold text-gray-800 break-words">{movie.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-6 rounded-lg mb-8 shadow-md">
                        <h3 className="font-heading text-2xl font-bold text-slctrips-navy mb-4">The Director's Angle</h3>
                        <p className="text-gray-700 leading-relaxed">{destination.hook}</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-4">Scene Breakdowns</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {destination.media.map((media, i) => (
                                <div key={i} className="bg-white p-2 rounded-lg shadow-md">
                                    <iframe
                                        className="w-full h-48 rounded"
                                        src={`https://www.youtube.com/embed/${media.youtubeId}`}
                                        title={media.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                     <p className="text-xs text-center p-2 text-gray-500">{media.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="bg-slctrips-red text-white p-6 rounded-lg mb-8 flex items-center gap-6 shadow-lg">
                        <div className="w-24 h-24 bg-red-400 rounded-full hidden sm:block"></div>
                        <div>
                            <h3 className="font-heading font-bold text-2xl mb-2">{destination.visitorTips.title}</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {destination.visitorTips.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    </div>

                     <div className="bg-slctrips-sky bg-opacity-20 border-l-4 border-slctrips-sky text-slctrips-navy p-6 rounded-r-lg mb-8">
                        <h3 className="font-heading font-bold text-xl text-slctrips-navy mb-2">{destination.behindTheScenes.title}:</h3>
                        <p className="italic text-gray-800">"{destination.behindTheScenes.quote}"</p>
                    </div>

                    {relatedDestinations.length > 0 && (
                        <div className="bg-slctrips-navy text-white p-8 rounded-lg mt-12">
                            <h3 className="font-heading text-3xl font-bold text-center">Continue Your Scout</h3>
                            <p className="text-slctrips-mid my-4 text-center">Explore these related film locations to continue your adventure.</p>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                {relatedDestinations.map(dest => (
                                    <Link key={dest.id} to={`/destinations/${dest.id}`} className="block bg-slctrips-black p-4 rounded-lg text-center hover:bg-gray-800 transition-colors transform hover:scale-105">
                                        <p className="font-bold text-slctrips-gold">{dest.name}</p>
                                        <p className="text-xs text-slctrips-mid mt-1">{dest.subtitle}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-24 h-min">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Location Vitals</h3>
                        <div className="space-y-3 text-sm">
                            <p><strong className="text-slctrips-red w-28 inline-block">Location:</strong> {destination.location}</p>
                            <p><strong className="text-slctrips-red w-28 inline-block">Drive Time:</strong> {destination.driveTime}</p>
                            <p><strong className="text-slctrips-red w-28 inline-block">Duration:</strong> {destination.visitDuration}</p>
                            <p><strong className="text-slctrips-red w-28 inline-block">Cost:</strong> {destination.cost}</p>
                            <p><strong className="text-slctrips-red w-28 inline-block">Group Size:</strong> {destination.groupSize}</p>
                            <p><strong className="text-slctrips-red w-28 inline-block">Best Time:</strong> {destination.bestTime}</p>
                        </div>
                    </div>

                     <div className="bg-white p-4 rounded-lg text-center shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy mb-3">Fame Level</h3>
                        <FameBadge level={destination.fameLevel} description={destination.fameDescriptor} />
                    </div>

                    {destination.ar_data && (
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Interactive Experience</h3>
                        <Link
                          to={`/ar-view/${destination.id}`}
                          className="block w-full text-center bg-slctrips-red text-white font-bold py-2 px-4 rounded-full text-sm uppercase hover:bg-red-700 transition-colors duration-300"
                        >
                          🎬 Launch AR Scene Scout
                        </Link>
                        <p className="text-xs text-gray-500 text-center mt-2">{destination.ar_data.title}</p>
                      </div>
                    )}

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="font-mono text-xs text-center">
                            <p className="text-slctrips-black">📍 GPS: {destination.gps}</p>
                            <p className="text-gray-500 mt-1">/// What3Words: {destination.what3words}</p>
                        </div>
                         <div className="mt-4">
                            <MapComponent gps={destination.gps} name={destination.name} />
                        </div>
                        <div className="mt-4">
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${destination.gps}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-slctrips-gold text-slctrips-navy font-bold py-2 px-4 rounded-full text-sm uppercase hover:bg-yellow-300 transition-colors duration-300"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>

                     <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Essential Gear</h3>
                        <ul className="space-y-2 text-sm">
                            {destination.equipment.map((item, i) => (
                                <li key={i}>
                                    <strong className="text-gray-800">{item.name}:</strong>
                                    <span className="text-gray-600"> {item.reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {destination.buddyLinks && (
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Local Partners</h3>
                        <ul className="space-y-3 text-sm">
                          {destination.buddyLinks.map((link, i) => (
                            <li key={i}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="group block">
                                <p className="font-bold text-slctrips-sky group-hover:underline">{link.text}</p>
                                <p className="text-xs text-gray-500">{link.category}</p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                </aside>
            </div>
        </div>
    </div>
  );
};

export default DestinationDetailPage;
