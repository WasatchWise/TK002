import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Destination } from '../types';

interface GeminiMissionBriefingProps {
  destination: Destination;
}

const GeminiMissionBriefing: React.FC<GeminiMissionBriefingProps> = ({ destination }) => {
  const [briefing, setBriefing] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const generateBriefing = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setBriefing('');
    setIsGenerated(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key not found.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const prompt = `
        You are an AI trip assistant for 'SLCTrips', a guide to Utah's adventures.
        Your tone is warm, curious, helpful, and family-first; practical over hype, like a friendly and knowledgeable park ranger.
        Generate a concise summary for the destination: "${destination.name}".

        Please include:
        1.  **Overview:** A one-sentence summary of what this place is.
        2.  **Why It's Special:** A short summary of what makes this destination unique or mysterious.
        3.  **Key Intel:** 2-3 bullet points of the most interesting facts or stories.
        4.  **Friendly Tip:** A concluding sentence of practical advice.

        Keep the entire summary under 150 words. Format with markdown for clarity.
        Destination data:
        - Name: ${destination.name}
        - Subtitle: ${destination.subtitle}
        - Story: ${destination.story.join(' ')}
        - Evidence: ${destination.evidence.points.join(', ')}
        - Danger Level: ${destination.dangerLevel}
      `;
      
      const stream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      let text = '';
      for await (const chunk of stream) {
        text += chunk.text;
        setBriefing(text);
      }
    } catch (e: any) {
      console.error(e);
      setError('Failed to generate summary. Our connection to the trail network seems to be down.');
    } finally {
      setIsLoading(false);
    }
  }, [destination]);

  return (
    <div className="bg-slctrips-navy border-2 border-slctrips-gold p-6 rounded-lg mb-8 shadow-lg text-white">
      <h2 className="font-heading text-3xl font-bold text-slctrips-gold mb-4">AI-Powered Briefing</h2>
      
      {!isGenerated && (
        <>
            <p className="text-slctrips-mid mb-4">Get a quick, AI-powered summary to help plan your visit to this amazing spot.</p>
            <button
                onClick={generateBriefing}
                disabled={isLoading}
                className="bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300 disabled:bg-slate-600 transition-colors duration-300"
            >
                {isLoading ? 'Thinking...' : 'Generate Summary'}
            </button>
        </>
      )}

      {isGenerated && (
        <div>
            {isLoading && !briefing && <p className="text-slctrips-mid animate-pulse">Gathering intel...</p>}
            
            <div className="prose prose-invert max-w-none text-slctrips-light whitespace-pre-wrap">
                {briefing.split('**').map((part, index) => 
                    index % 2 !== 0 ? <strong key={index} className="text-slctrips-gold">{part}</strong> : <span key={index}>{part}</span>
                )}
                 {isLoading && briefing && <span className="inline-block w-2 h-4 bg-slctrips-gold animate-pulse ml-1"></span>}
            </div>

            {error && <p className="text-red-400 mt-4">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default GeminiMissionBriefing;