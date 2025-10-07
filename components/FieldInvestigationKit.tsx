import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Destination } from '../types';
import { createItineraryPrompt } from '../data/prompts';

interface FieldInvestigationKitProps {
  destination: Destination;
}

const FieldInvestigationKit: React.FC<FieldInvestigationKitProps> = ({ destination }) => {
  const [focus, setFocus] = useState('Recreate a Scene');
  const [duration, setDuration] = useState('2-3 hours');
  const [itinerary, setItinerary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const investigationFocusOptions = [
    'Recreate a Scene',
    'Landscape Photography',
    'Historical Film Tour',
    'Behind-the-Scenes Vlogging',
  ];

  const durationOptions = [
    '1-2 hours',
    '2-3 hours',
    'Half-day (4-5 hours)',
    'Full-day (6-8 hours)',
  ];

  const generateItinerary = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setItinerary('');
    setIsGenerated(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key not found.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = createItineraryPrompt(destination, focus, duration);

      const stream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      let text = '';
      for await (const chunk of stream) {
        text += chunk.text;
        setItinerary(text);
      }
    } catch (e: any) {
      console.error(e);
      setError('Could not generate itinerary. The script seems to have a few pages missing. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [destination, focus, duration]);
  
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
        const trimmedLine = line.trim();
        if (trimmedLine === '') return null;

        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            const content = trimmedLine.substring(2);
            const parts = content.split('**');
            return (
                <li key={i} className="ml-5 list-disc">
                    {parts.map((part, index) =>
                        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                    )}
                </li>
            );
        }

        const parts = line.split('**');
        return (
            <p key={i} className="mb-2">
                {parts.map((part, index) =>
                    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                )}
            </p>
        );
    });
};


  return (
    <div className="bg-white p-6 rounded-lg mb-8 shadow-md border-t-4 border-slctrips-sky">
      <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2">Scouting Itinerary Planner</h2>
      <p className="text-gray-600 mb-6">Let's build a custom shot list for your visit. Tell me your creative focus, and I'll generate a personalized shooting schedule.</p>

      {!isGenerated ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="focus" className="block text-sm font-bold text-slctrips-navy mb-1">Scouting Focus</label>
            <select
              id="focus"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-slctrips-gold focus:border-slctrips-gold"
              aria-label="Select Scouting Focus"
            >
              {investigationFocusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-bold text-slctrips-navy mb-1">Available Time</label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-slctrips-gold focus:border-slctrips-gold"
              aria-label="Select Available Time"
            >
              {durationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <button
            onClick={generateItinerary}
            disabled={isLoading}
            className="w-full bg-slctrips-sky text-white font-bold py-3 px-6 rounded-lg hover:bg-slctrips-navy disabled:bg-slate-400 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {isLoading ? 'Setting the Scene...' : 'Generate My Itinerary'}
          </button>
        </div>
      ) : (
        <div className="bg-slctrips-light p-4 rounded-md border border-slctrips-mid min-h-[200px]">
          {isLoading && !itinerary && <p className="text-slctrips-navy animate-pulse">Consulting my location notes...</p>}
          
          <div className="prose max-w-none text-slctrips-black">
            {renderFormattedText(itinerary)}
            {isLoading && itinerary && <span className="inline-block w-2 h-4 bg-slctrips-sky animate-pulse ml-1"></span>}
          </div>

          {error && <p className="text-red-600 mt-4">{error}</p>}
          
          {!isLoading && (
            <button
                onClick={() => setIsGenerated(false)}
                className="mt-4 bg-slctrips-mid text-slctrips-navy font-bold py-2 px-4 rounded-full hover:bg-gray-300 text-sm"
            >
                Create a New Plan
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FieldInvestigationKit;
