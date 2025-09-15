import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Destination } from '../types';

interface FieldInvestigationKitProps {
  destination: Destination;
}

const FieldInvestigationKit: React.FC<FieldInvestigationKitProps> = ({ destination }) => {
  const [focus, setFocus] = useState('Paranormal Activity');
  const [duration, setDuration] = useState('2-3 hours');
  const [itinerary, setItinerary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const investigationFocusOptions = [
    'Paranormal Activity',
    'Historical Context',
    'UFO Skywatching',
    'Cryptid Hunting',
    'Photography & Documentation',
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

      const prompt = `
        You are an AI trip planning assistant for 'SLCTrips', a guide to mysterious adventures.
        Your tone is that of Dan, the Wasatch Sasquatch: friendly, knowledgeable, safety-conscious, and encouraging.
        Generate a personalized, step-by-step field investigation itinerary for a user visiting "${destination.name}".

        **User's Plan:**
        - Investigation Focus: ${focus}
        - Available Time: ${duration}

        **Destination Intel:**
        - Name: ${destination.name}
        - Location: ${destination.location}
        - Best Time to Visit: ${destination.bestTime}
        - Key Story Points: ${destination.story.join(' ')}
        - Reported Evidence: ${destination.evidence.points.join(', ')}
        - Dangers: ${destination.dangerLevel} - ${destination.dangerDescription}
        - Dan's Safety Advice: ${destination.safety.points.join(' ')}

        **Your Task:**
        Create a practical, step-by-step itinerary based on the user's plan and the destination intel.
        - The itinerary must be safe and realistic for the time allotted.
        - Emphasize safety rules from "Dan's Safety Advice" throughout the plan.
        - Structure the output with clear time-stamped or sequential steps. Use Markdown for formatting (bolding with **, lists with *).
        - Start with a friendly intro, like "Alright, let's get you ready for your investigation at [Destination Name]!"
        - Conclude with an encouraging sign-off, like "Stay safe, keep your eyes open, and let me know what you find! - Dan".
        - Keep the entire response under 250 words.
      `;

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
      setError('Could not generate itinerary. The trail seems to have gone cold. Please try again later.');
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
    <div className="bg-white p-6 rounded-lg mb-8 shadow-md border-t-4 border-slctrips-blue">
      <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2">Field Investigation Kit</h2>
      <p className="text-gray-600 mb-6">Let's build a custom plan for your adventure. Tell me what you're looking for, and I'll whip up a personalized itinerary.</p>

      {!isGenerated ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="focus" className="block text-sm font-bold text-slctrips-navy mb-1">Investigation Focus</label>
            <select
              id="focus"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-slctrips-gold focus:border-slctrips-gold"
              aria-label="Select Investigation Focus"
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
            className="w-full bg-slctrips-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-slctrips-navy disabled:bg-slate-400 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {isLoading ? 'Plotting Coordinates...' : 'Generate My Itinerary'}
          </button>
        </div>
      ) : (
        <div className="bg-slctrips-light p-4 rounded-md border border-slctrips-mid min-h-[200px]">
          {isLoading && !itinerary && <p className="text-slctrips-navy animate-pulse">Consulting my field notes...</p>}
          
          <div className="prose max-w-none text-slctrips-black">
            {renderFormattedText(itinerary)}
            {isLoading && itinerary && <span className="inline-block w-2 h-4 bg-slctrips-blue animate-pulse ml-1"></span>}
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