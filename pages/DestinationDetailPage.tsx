
import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { locations } from '../data/destinations';
import { EvidenceItem, CrimeLocation } from '../types';
import NotorietyBadge from '../components/FameBadge';
import GeminiCaseBriefing from '../components/GeminiMissionBriefing';
import MapComponent from '../components/MapComponent';
import InvestigationPlanner from '../components/FieldInvestigationKit';
import FieldLog from '../components/FieldReport';
import CaseBoard from '../components/EvidenceBoard';
import Tabs from '../components/ui/Tabs';

const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const routerLocation = useLocation();

  // If location data is passed via state, use it. Otherwise, find it in the static list.
  const locationFromState = routerLocation.state?.location as CrimeLocation | undefined;
  const location = locationFromState || locations.find(d => d.id === id);

  const [evidenceItems, setEvidenceItems] = useState<EvidenceItem[]>([]);

  if (!location) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-4xl font-bold text-slctrips-red">Case File Not Found</h1>
        <p className="text-gray-600 mt-4">The records for this location appear to be missing or sealed.</p>
        <button onClick={() => navigate('/destinations')} className="mt-6 bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300">
          Return to Catalog
        </button>
      </div>
    );
  }

  const handlePinEvidence = (item: Omit<EvidenceItem, 'id'>) => {
    setEvidenceItems(prev => [...prev, { ...item, id: `evidence-${Date.now()}` }]);
  };

  const nextLocationId = location.relatedLocationIds?.[0];
  const nextLocation = locations.find(d => d.id === nextLocationId);

  const TABS = [
    {
      label: 'AI Briefing',
      content: <GeminiCaseBriefing destination={location} />
    },
    {
      label: 'Plan Visit',
      content: <InvestigationPlanner destination={location} />
    },
    {
      label: 'Field Investigation',
      content: (
        <>
          <FieldLog onPinEvidence={handlePinEvidence} />
          <CaseBoard destination={location} evidenceItems={evidenceItems} />
        </>
      )
    },
    {
        label: 'Historical Narrative',
        content: (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 mb-4">Case Details</h2>
                {location.story.map((p, i) => <p key={i} className="mb-4 text-gray-700 leading-relaxed">{p}</p>)}
            </div>
        )
    }
  ];

  return (
    <div className="bg-slctrips-light">
        <header className="bg-slctrips-black text-white py-10 text-center relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-slctrips-red font-sans font-bold uppercase tracking-widest">{location.state} // {location.region}</p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">{location.name}</h1>
                <p className="text-lg text-slctrips-mid mt-2">{location.crime}</p>
            </div>
        </header>
        <nav className="bg-white text-sm p-3 text-center border-b border-slctrips-mid sticky top-[68px] z-40">
            <Link to="/destinations" className="text-slctrips-sky hover:text-slctrips-navy font-bold">🗂️ All Locations</Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-slctrips-black font-semibold">{location.name}</span>
        </nav>

        <div className="container mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <Tabs tabs={TABS} />
                    {nextLocation && (
                        <div className="bg-slctrips-navy text-center p-8 rounded-lg mt-12">
                            <h3 className="font-heading text-2xl font-bold text-white">Next Location in Dossier</h3>
                            <p className="text-slctrips-mid my-4">Continue your investigation at...</p>
                            <Link to={`/destinations/${nextLocation.id}`} className="bg-slctrips-gold text-slctrips-navy font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transition-colors duration-300">
                                {nextLocation.name}
                            </Link>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-24 h-min">
                    <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-slctrips-navy">
                        <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Case Vitals</h3>
                        <div className="space-y-3 text-sm">
                            <p><strong className="text-slctrips-red w-28 inline-block">Dates:</strong> {location.dates}</p>
                            <p><strong className="text-slctrips-red w-28 inline-block">Location:</strong> {location.address || location.region}</p>
                            <p><strong className="text-slctrips-red w-28 inline-block">Status:</strong> {location.status}</p>
                            {location.perpetrators && location.perpetrators.length > 0 && <p><strong className="text-slctrips-red w-28 inline-block">Perpetrator(s):</strong> {location.perpetrators.join(', ')}</p>}
                            {location.victims && location.victims.length > 0 && <p><strong className="text-slctrips-red w-28 inline-block">Victim(s):</strong> {location.victims.join(', ')}</p>}
                        </div>
                    </div>

                     <div className="bg-white p-4 rounded-lg text-center shadow-md">
                        <h3 className="font-heading font-bold text-slctrips-navy mb-3">Case Notoriety</h3>
                        <NotorietyBadge level={location.notorietyLevel} description={location.notorietyLevel} />
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-md">
                         <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Accessibility</h3>
                         <p className="text-sm text-gray-700">{location.accessibility}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="font-mono text-xs text-center">
                            <p className="text-slctrips-black">📍 GPS: {location.gps}</p>
                        </div>
                         <div className="mt-4">
                            <MapComponent gps={location.gps} name={location.name} />
                        </div>
                        <div className="mt-4">
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${location.gps}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-slctrips-gold text-slctrips-navy font-bold py-2 px-4 rounded-full text-sm uppercase hover:bg-yellow-300 transition-colors duration-300"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {location.paranormal && (
                      <div className="bg-slctrips-navy text-white p-4 rounded-lg shadow-md">
                          <h3 className="font-heading font-bold text-slctrips-sky border-b border-slctrips-sky/50 pb-2 mb-4">Paranormal Notes</h3>
                          <p className="text-sm text-slctrips-mid italic">"{location.paranormal}"</p>
                      </div>
                    )}

                </aside>
            </div>
        </div>
    </div>
  );
};

export default DestinationDetailPage;