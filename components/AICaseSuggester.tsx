
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Link } from 'react-router-dom';
import { locations } from '../data/destinations';
import { createCaseSuggestionPrompt } from '../data/prompts';

const AICaseSuggester: React.FC = () => {
  const [suggestion, setSuggestion] = useState<{ caseName: string; reason: string; id: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getSuggestion = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setSuggestion(null);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key not found.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const locationNames = locations.map(l => l.name);
      const prompt = createCaseSuggestionPrompt(locationNames);
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      const jsonText = response.text.trim();
      const parsed = JSON.parse(jsonText);
      const suggestedLocation = locations.find(l => l.name === parsed.caseName);

      if (suggestedLocation) {
        setSuggestion({ ...parsed, id: suggestedLocation.id });
      } else {
        throw new Error("AI suggested a case that doesn't exist in our files.");
      }

    } catch (e: any) {
      console.error(e);
      setError('Could not get a suggestion. The AI profiler is currently unavailable.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="bg-slctrips-navy text-white p-8 rounded-lg shadow-2xl text-center max-w-4xl mx-auto border-4 border-slctrips-sky/30">
        <h2 className="font-heading text-4xl font-bold text-white mb-2">Don't Know Where to Start?</h2>
        <p className="text-slctrips-mid mb-6">Let our AI Profiler suggest a compelling case file to begin your investigation.</p>

        {!suggestion && (
            <button
                onClick={getSuggestion}
                disabled={isLoading}
                className="bg-slctrips-sky text-white font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-sky-500 disabled:bg-slate-600 transition-colors duration-300"
            >
                {isLoading ? 'Consulting Profiler...' : 'Suggest a Case'}
            </button>
        )}

        {isLoading && (
            <div className="animate-pulse-slow">
                <div className="h-6 bg-slctrips-light/10 rounded-md w-1/2 mx-auto mt-4"></div>
                <div className="h-4 bg-slctrips-light/10 rounded-md w-3/4 mx-auto mt-2"></div>
            </div>
        )}
        
        {error && <p className="text-red-400 mt-4">{error}</p>}

        {suggestion && !isLoading && (
            <div className="bg-slctrips-black/50 border border-slctrips-sky/50 p-6 rounded-lg mt-4">
                <p className="text-lg text-slctrips-mid italic">"{suggestion.reason}"</p>
                <Link
                    to={`/destinations/${suggestion.id}`}
                    className="mt-4 inline-block bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors duration-300"
                >
                    Investigate: {suggestion.caseName}
                </Link>
            </div>
        )}
    </div>
  );
};

export default AICaseSuggester;