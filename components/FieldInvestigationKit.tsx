
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CrimeLocation } from '../types';
import { createInvestigationPlanPrompt } from '../data/prompts';

interface InvestigationPlannerProps {
  destination: CrimeLocation;
}

const SkeletonLoader = () => (
    <div className="space-y-3 animate-pulse-slow">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-full ml-4"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6 ml-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full ml-4"></div>
    </div>
);

const ErrorDisplay = ({ message }: { message: string }) => (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
        <p className="font-bold">Planning Error</p>
        <p className="text-sm">{message}</p>
    </div>
);

const InvestigationPlanner: React.FC<InvestigationPlannerProps> = ({ destination }) => {
  const [focus, setFocus] = useState('Historical Context');
  const [duration, setDuration] = useState('1-2 hours');
  const [itinerary, setItinerary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const investigationFocusOptions = [
    'Historical Context',
    'Memorial Photography',
    'Geographical Profiling',
    'Paranormal Investigation',
  ];

  const durationOptions = [
    '< 1 hour',
    '1-2 hours',
    '2-3 hours',
    'Half-day (4 hours)',
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
      const prompt = createInvestigationPlanPrompt(destination, focus, duration);

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
      setError('Could not generate plan. Intelligence seems to be unavailable. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [destination, focus, duration]);

  const handleRetry = useCallback(() => {
    setItinerary('');
    setError('');
    setIsGenerated(false);
    generateItinerary();
  }, [generateItinerary]);
  
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
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-sky">
      <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2">Investigation Planner</h2>
      <p className="text-gray-600 mb-6">Create a custom plan for your visit. Select your focus and available time to generate a respectful and efficient itinerary.</p>

      {!isGenerated ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="focus" className="block text-sm font-bold text-slctrips-navy mb-1">Investigative Focus</label>
            <select
              id="focus"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-slctrips-gold focus:border-slctrips-gold"
              aria-label="Select Investigative Focus"
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
            {isLoading ? 'Consulting Case Files...' : 'Generate Investigation Plan'}
          </button>
        </div>
      ) : (
        <div className="bg-slctrips-light p-4 rounded-md border border-slctrips-mid min-h-[200px]">
          {isLoading && !itinerary && <SkeletonLoader />}
          
          <div className="prose max-w-none text-slctrips-black">
            {renderFormattedText(itinerary)}
            {isLoading && itinerary && <span className="inline-block w-2 h-4 bg-slctrips-sky animate-pulse ml-1"></span>}
          </div>

          {error && (
            <div className="space-y-3">
              <ErrorDisplay message={error} />
              {!isLoading && (
                <button
                  onClick={handleRetry}
                  disabled={isLoading}
                  className="w-full bg-slctrips-sky text-white font-bold py-2 px-4 rounded-lg hover:bg-slctrips-navy disabled:bg-slate-400 transition-colors duration-300"
                >
                  Try Again
                </button>
              )}
            </div>
          )}
          
          {!isLoading && !error && (
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

export default InvestigationPlanner;