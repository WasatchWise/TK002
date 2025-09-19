
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleGenAI, Type } from '@google/genai';
import { unverifiedLocations } from '../data/unverified_destinations';
import { CrimeLocation, NotorietyLevel } from '../types';

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        crime: { type: Type.STRING, description: "A concise description of the primary crime or reason for notoriety." },
        region: { type: Type.STRING, description: "The geographical region, e.g., 'Salt Lake City Metropolitan Area'." },
        address: { type: Type.STRING, description: "The street address, if public. Otherwise, the general area." },
        driveTime: { type: Type.STRING, description: "Estimated drive time from the nearest major airport." },
        story: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A 2-3 paragraph narrative of the crime and events." },
        accessibility: { type: Type.STRING, description: "Information on public accessibility and visiting guidelines." },
        gps: { type: Type.STRING, description: "Approximate GPS coordinates as a 'lat, long' string." },
        notorietyLevel: { type: Type.STRING, description: `One of: ${Object.values(NotorietyLevel).join(', ')}` },
        perpetrators: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Names of main perpetrators. Use an empty array if not applicable." },
        victims: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Names of main victims or groups. Use an empty array if not applicable." },
        dates: { type: Type.STRING, description: "The key date or date range of the event." },
        tags: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A few relevant keywords for categorization." },
        paranormal: { type: Type.STRING, description: "Any paranormal stories or claims. Use an empty string if none." },
        status: { type: Type.STRING, description: "The current status of the location, e.g., 'Private Residence', 'Museum'." },
    },
    required: ["crime", "region", "story", "accessibility", "gps", "notorietyLevel", "dates", "status", "tags", "driveTime"]
};


const CreateCaseFilePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [statusText, setStatusText] = useState('Initializing investigation...');
    
    const location = unverifiedLocations.find(l => l.id === id);

    useEffect(() => {
        if (!location) {
            setError('Case file not found in the unverified archives.');
            return;
        }

        const generateCaseFile = async () => {
            try {
                if (!process.env.API_KEY) {
                    throw new Error("API key not configured.");
                }
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                
                setStatusText('Consulting historical archives and profiler database...');
                const prompt = `Generate a complete case file for the dark tourism location: "${location.name}" in ${location.state}. Provide details for all fields in the provided JSON schema. Be factual, respectful, and comprehensive. If some information like perpetrators or victims is not applicable or unknown, use an empty array or string.`;

                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                    config: {
                        responseMimeType: 'application/json',
                        responseSchema: responseSchema,
                    },
                });

                setStatusText('Compiling dossier...');
                const generatedData = JSON.parse(response.text);

                // Combine generated data with existing data to create a full CrimeLocation object
                const newCaseFile: CrimeLocation = {
                    ...generatedData,
                    id: location.id,
                    name: location.name,
                    state: location.state,
                    relatedLocationIds: [], // Keep this empty for generated files
                };

                // Validate notoriety level
                if (!Object.values(NotorietyLevel).includes(newCaseFile.notorietyLevel)) {
                    newCaseFile.notorietyLevel = NotorietyLevel.LOCAL; // Default fallback
                }

                setStatusText('Case file complete. Redirecting...');
                setTimeout(() => {
                    navigate(`/destinations/${location.id}`, { state: { location: newCaseFile } });
                }, 1000);

            } catch (e: any) {
                console.error("Error generating case file:", e);
                setError('Failed to generate case file. The AI profiler encountered a dead end. Please try another case or check back later.');
            }
        };

        generateCaseFile();

    }, [id, location, navigate]);

    if (!location && !error) {
        return <div>Loading...</div>; // Should be brief
    }
    
    return (
        <div className="flex items-center justify-center min-h-[60vh] text-center p-4">
            <div>
                {error ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md">
                        <h2 className="font-heading text-2xl font-bold mb-2">Investigation Failed</h2>
                        <p className="mb-4">{error}</p>
                        <button onClick={() => navigate('/destinations')} className="bg-slctrips-navy text-white font-bold py-2 px-6 rounded-full hover:bg-slctrips-black">
                            Return to Catalog
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="animate-pulse-slow text-5xl mb-4">🗂️</div>
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-slctrips-navy">
                            Building Case File For:
                            <br />
                            <span className="text-slctrips-red">{location?.name}</span>
                        </h1>
                        <p className="text-gray-600 mt-4">{statusText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateCaseFilePage;