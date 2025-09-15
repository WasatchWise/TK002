
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDestinations } from '../context/DestinationsContext';
import DangerBadge from '../components/DangerBadge';
import GeminiMissionBriefing from '../components/GeminiMissionBriefing';
import MapComponent from '../components/MapComponent';
import FieldInvestigationKit from '../components/FieldInvestigationKit';
import FieldReport from '../components/FieldReport';
import EvidenceBoard from '../components/EvidenceBoard';
import BuddyLinks from '../components/BuddyLinks';
import OlympianInsightCard from '../components/OlympianInsightCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Destination } from '../types';

export interface EvidenceItem {
    note: string;
    photo?: string;
    id: string;
}

const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getDestinationById, destinations, isLoading } = useDestinations();
  
  const [destination, setDestination] = useState<Destination | undefined>(undefined);
  const [evidenceItems, setEvidenceItems] = useState<EvidenceItem[]>([]);

  useEffect(() => {
    if (id && !isLoading) {
      const foundDestination = getDestinationById(id);
      setDestination(foundDestination);
      if (foundDestination) {
        document.title = `SLCTrips | ${foundDestination.name}`;
      } else {
        document.title = 'SLCTrips | Not Found';
      }
    }
  }, [id, isLoading, getDestinationById]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setEvidenceItems([]); // Reset evidence when changing pages
  }, [id]);

  if (isLoading) {
    return <div className="py-20"><LoadingSpinner /></div>;
  }

  if (!destination) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-4xl font-bold text-slctrips-red">Destination Not Found</h1>
        <p className="text-gray-600 mt-4">The coordinates for this adventure are missing from our atlas.</p>
        <button onClick={() => navigate('/destinations')} className="mt-6 bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300">
          Return to Atlas
        </button>
      </div>
    );
  }

  const handlePinEvidence = (item: Omit<EvidenceItem, 'id'>) => {
    setEvidenceItems(prev => [...prev, { ...item, id: `evidence-${Date.now()}` }]);
  };

  const nextDestinationId = destination.relatedDestinationIds?.[0];
  const nextDestination = nextDestinationId ? getDestinationById(nextDestinationId) : undefined;

  return (
    <div className="bg-slctrips-light">
        <header className="bg-slctrips-navy text-white py-10 text-center relative overflow-hidden">
            <div className="relative z-10 container mx-auto px-4">
                <p className="text-slctrips-gold font-sans font-bold uppercase tracking-widest">{destination.category}</p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">{destination.name}</h1>
                <p className="text-lg text-slctrips-mid mt-2">{destination.subtitle}</p>
                {destination.tags && destination.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {destination.tags.map(tag => (
                        <span key={tag} className="bg-white bg-opacity-10 text-white text-xs font-bold px-3 py-1 rounded-full border border-white border-opacity-30">
                        {tag}
                        </span>
                    ))}
                    </div>
                )}
            </div>
        </header>
        <nav className="bg-white text-sm p-3 text-center border-b border-slctrips-mid sticky top-[68px] z-40">
            <Link to="/destinations" className="text-slctrips-blue hover:text-slctrips-navy font-bold">🗺️ All Destinations</Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-slctrips-black font-semibold">{destination.name}</span>
        </nav>

        <div className="container mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <GeminiMissionBriefing key={`${destination.id}-briefing`} destination={destination} />

                    <FieldInvestigationKit key={`${destination.id}-kit`} destination={destination} />

                    <FieldReport key={`${destination.id}-report`} onPinEvidence={handlePinEvidence} />

                    <EvidenceBoard key={`${destination.id}-board`} destination={destination} evidenceItems={evidenceItems} />

                    <section className="bg-white p-6 rounded-lg mb-8 shadow-md">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 mb-4">The Story</h2>
                        {destination.story.map((p, i) => <p key={i} className="mb-4 text-gray-700 leading-relaxed">{p}</p>)}
                    </section>

                    <section className="bg-white p-6 rounded-lg mb-8 shadow-md">
                        <h3 className="font-heading text-2xl font-bold text-slctrips-navy mb-4">{destination.evidence.title}</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {destination.evidence.points.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                    </section>

                    <section className="bg-white p-6 rounded-lg mb-8 shadow-md">
                        <h3 className="font-heading text-2xl font-bold text-slctrips-navy mb-4">The Hook</h3>
                        <p className="text-gray-700 leading-relaxed">{destination.hook}</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-4">Media Evidence</h2>
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
                        <img src="./assets/dan-mascot-transparent-bg.png" alt="Dan the mascot" className="w-24 h-auto hidden sm:block" />
                        <div>
                            <h3 className="font-heading font-bold text-2xl mb-2">{destination.safety.title}</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {destination.safety.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    </div>

                    <OlympianInsightCard insight={destination.olympianInsight} />

                    {nextDestination && (
                        <div className="bg-slctrips-navy text-center p-8 rounded-lg mt-12">
                            <h3 className="font-heading text-2xl font-bold text-white">Next Stop on Your Journey</h3>
                            <p className="text-slctrips-mid my-4">Continue your investigation at...</p>
                            <Link to={`/destinations/${nextDestination.id}`} className="bg-slctrips-gold text-slctrips-navy font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transition-colors duration-300">
                                {nextDestination.name}
                            </Link>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-24 h-min">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Vitals</h3>
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
                        <h3 className="font-heading font-bold text-slctrips-navy mb-3">Danger Level</h3>
                        <DangerBadge level={destination.dangerLevel} description={destination.dangerDescription} />
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="font-mono text-xs text-center">
                            <p className="text-slctrips-black">📍 GPS: {destination.gps}</p>
                            <p className="text-gray-500 mt-1">/// What3Words: {destination.what3words}</p>
                        </div>
                         <div className="mt-4">
                            <MapComponent gps={destination.gps} name={destination.name} />
                        </div>
                    </div>

                     <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Essential Equipment</h3>
                        <ul className="space-y-2 text-sm">
                            {destination.equipment.map((item, i) => (
                                <li key={i}>
                                    <strong className="text-gray-800">{item.name}:</strong>
                                    <span className="text-gray-600"> {item.reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <BuddyLinks links={destination.buddyLinks} />
                </aside>
            </div>
        </div>
    </div>
  );
};

export default DestinationDetailPage;
