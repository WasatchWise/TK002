import React,
{ useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { LearningObjectives } from '../types';
import GeminiMissionBriefing from '../components/GeminiMissionBriefing';
import MapComponent from '../components/MapComponent';
import GeminiTrivia from '../components/GeminiTrivia';

const subjectTitleMapping: { [key in keyof LearningObjectives]: string } = {
    social_studies: "Social Studies",
    science_seed: "Science (SEEd)",
    ela: "English Language Arts",
    mathematics: "Mathematics",
    health_education: "Health Education",
    fine_arts: "Fine Arts",
};


const CurriculumConnections: React.FC<{ objectives: LearningObjectives }> = ({ objectives }) => {
    const [openSubject, setOpenSubject] = useState<string>('social_studies');

    const toggleSubject = (subjectKey: string) => {
        setOpenSubject(openSubject === subjectKey ? '' : subjectKey);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Curriculum Connections</h3>
            <div className="space-y-2">
                {Object.entries(objectives).map(([key, details]) => {
                    const subjectKey = key as keyof LearningObjectives;
                    const topics = Object.entries(details);
                    if (topics.length === 0) return null;

                    const isOpen = openSubject === subjectKey;

                    return (
                        <div key={subjectKey}>
                            <button
                                onClick={() => toggleSubject(subjectKey)}
                                className="w-full flex justify-between items-center text-left font-heading font-bold text-slctrips-navy p-2 bg-slctrips-mid/50 hover:bg-slctrips-mid rounded-md"
                                aria-expanded={isOpen}
                            >
                                <span>{subjectTitleMapping[subjectKey]}</span>
                                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            {isOpen && (
                                <div className="p-3 bg-slctrips-light rounded-b-md text-sm space-y-3">
                                    {topics.map(([topic, points]) => (
                                        <div key={topic}>
                                            <p className="font-bold text-slctrips-red">{topic}</p>
                                            <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                                                {/* Fix: Add a type guard to ensure 'points' is an array before mapping. This resolves a TypeScript error where 'points' was inferred as 'unknown'. */}
                                                {Array.isArray(points) && points.map((point, i) => <li key={i}>{point}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-4xl font-bold text-slctrips-red">County Not Found</h1>
        <p className="text-gray-600 mt-4">The coordinates for this county are missing from our map.</p>
        <button onClick={() => navigate('/destinations')} className="mt-6 bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300">
          Return to Directory
        </button>
      </div>
    );
  }

  const relatedDestinations = destination.relatedDestinationIds
    .map(relatedId => destinations.find(d => d.id === relatedId))
    .filter((d): d is NonNullable<typeof d> => d !== undefined);

  return (
    <div className="bg-slctrips-light">
        <header className="bg-slctrips-navy text-white py-10 text-center relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-slctrips-gold font-sans font-bold uppercase tracking-widest">Guardian of {destination.name}</p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">{destination.guardian.name}</h1>
                <p className="text-lg text-slctrips-mid mt-2">The {destination.guardian.animal_form}</p>
            </div>
        </header>
        <nav className="bg-white text-sm p-3 text-center border-b border-slctrips-mid sticky top-[68px] z-40">
            <Link to="/destinations" className="text-slctrips-sky hover:text-slctrips-navy font-bold">🗺️ All Counties</Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-slctrips-black font-semibold">{destination.name}</span>
        </nav>

        <div className="container mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <GeminiMissionBriefing destination={destination} />

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-red pb-2 mb-4">County Dossier</h2>
                        {destination.story.map((p, i) => <p key={i} className="mb-4 text-gray-700 leading-relaxed">{p}</p>)}
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-4">Field Trip Stops</h2>
                        <div className="space-y-6">
                            {destination.field_trip_stops.map((stop, i) => (
                                <div key={i} className="border-b border-slctrips-mid pb-4 last:border-b-0">
                                    <h3 className="font-heading text-xl font-bold text-slctrips-sky">{stop.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">Focus: {stop.educational_focus}</p>
                                    <p className="text-gray-700 mb-3">{stop.guardian_connection}</p>
                                    <div className="bg-red-100 border-l-4 border-slctrips-red p-3 rounded-r-md">
                                        <h4 className="font-bold text-sm text-slctrips-red mb-1">Safety First!</h4>
                                        <ul className="list-disc list-inside text-sm text-red-900">
                                            {stop.safety_notes.map((note, n) => <li key={n}>{note}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-4">Learning Activities</h2>
                         <div className="space-y-4">
                            {destination.activities.map((activity, i) => (
                                <div key={i} className="bg-slctrips-light p-4 rounded-lg">
                                    <h3 className="font-heading text-xl font-bold text-slctrips-green">{activity.title} <span className="text-sm font-sans font-normal text-gray-500">({activity.type})</span></h3>
                                    <p className="text-gray-700 mt-1">{activity.prompt}</p>
                                    <p className="text-sm mt-2"><strong className="font-semibold">Materials:</strong> {activity.materials_needed.join(', ')}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <GeminiTrivia destination={destination} />

                    {relatedDestinations.length > 0 && (
                        <div className="bg-slctrips-navy text-white p-8 rounded-lg mt-4">
                            <h3 className="font-heading text-3xl font-bold text-center">Continue Your Expedition</h3>
                            <p className="text-slctrips-mid my-4 text-center">Explore these nearby counties to continue your adventure.</p>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                {relatedDestinations.map(dest => (
                                    <Link key={dest.id} to={`/destinations/${dest.id}`} className="block bg-slctrips-black p-4 rounded-lg text-center hover:bg-gray-800 transition-colors transform hover:scale-105">
                                        <p className="font-bold text-slctrips-gold">{dest.name}</p>
                                        <p className="text-xs text-slctrips-mid mt-1">Guardian: {dest.guardian.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-24 h-min">
                    <CurriculumConnections objectives={destination.learning_objectives} />

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
                </aside>
            </div>
        </div>
    </div>
  );
};

export default DestinationDetailPage;