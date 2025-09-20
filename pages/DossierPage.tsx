
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { dossiers } from '../data/dossiers';
import { locations } from '../data/destinations';
import Accordion from '../components/ui/Accordion';
import { MediaLink } from '../types';

const DossierPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const dossier = dossiers.find(d => d.id === id);

    if (!dossier) {
        return (
            <div className="text-center py-20">
                <h1 className="font-heading text-4xl font-bold text-slctrips-red">Dossier Not Found</h1>
                <p className="text-gray-600 mt-4">The records for this individual could not be located.</p>
                <button onClick={() => navigate('/destinations')} className="mt-6 bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300">
                    Return to Catalog
                </button>
            </div>
        );
    }

    const relatedLocations = locations.filter(loc => loc.dossierIds?.includes(dossier.id));

    const groupedMedia = dossier.mediaArchive?.reduce((acc, link) => {
        if (!acc[link.type]) {
            acc[link.type] = [];
        }
        acc[link.type].push(link);
        return acc;
    }, {} as Record<MediaLink['type'], MediaLink[]>);


    return (
        <div className="bg-slctrips-light">
            <header className="bg-slctrips-black text-white py-10 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-slctrips-red font-sans font-bold uppercase tracking-widest">Perpetrator Dossier</p>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">{dossier.name}</h1>
                </div>
            </header>
            <nav className="bg-white text-sm p-3 text-center border-b border-slctrips-mid sticky top-[68px] z-40">
                <Link to="/destinations" className="text-slctrips-sky hover:text-slctrips-navy font-bold">🗂️ All Locations</Link>
                <span className="mx-2 text-gray-400">&gt;</span>
                <span className="text-slctrips-black font-semibold">Dossier: {dossier.name}</span>
            </nav>

            <div className="container mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-4">Full Briefing</h2>
                        {dossier.sections.map((section, index) => (
                            <Accordion key={index} title={section.title} defaultOpen={index === 0}>
                                {section.content}
                            </Accordion>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6 lg:sticky lg:top-24 h-min">
                        <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-slctrips-navy">
                            <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Subject Vitals</h3>
                            <div className="space-y-3 text-sm">
                                {dossier.summary.map(item => (
                                    <div key={item.label}>
                                        <strong className="text-slctrips-red w-28 inline-block">{item.label}:</strong>
                                        {Array.isArray(item.value) ? item.value.join(', ') : item.value}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {groupedMedia && Object.keys(groupedMedia).length > 0 && (
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Media Archive</h3>
                                <div className="space-y-4">
                                    {Object.entries(groupedMedia).map(([type, links]) => (
                                        <div key={type}>
                                            <h4 className="text-sm font-bold text-slctrips-red uppercase tracking-wider mb-2">{type}</h4>
                                            <ul className="space-y-1">
                                                {links.map(link => (
                                                    <li key={link.url}>
                                                        <a 
                                                            href={link.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-slctrips-sky hover:underline"
                                                        >
                                                            {link.title} &rarr;
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {relatedLocations.length > 0 && (
                             <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-heading font-bold text-slctrips-navy border-b border-slctrips-mid pb-2 mb-4">Linked Locations</h3>
                                <div className="space-y-2">
                                    {relatedLocations.map(loc => (
                                        <Link
                                            key={loc.id}
                                            to={`/destinations/${loc.id}`}
                                            className="block p-2 bg-slctrips-light hover:bg-slctrips-mid rounded-md transition-colors"
                                        >
                                            <p className="font-bold text-sm text-slctrips-navy">{loc.name}</p>
                                            <p className="text-xs text-gray-600">{loc.crime}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default DossierPage;