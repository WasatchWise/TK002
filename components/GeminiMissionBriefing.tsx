import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CrimeLocation } from '../types';
import { createCaseFilePrompt } from '../data/prompts';

interface GeminiCaseBriefingProps {
  destination: CrimeLocation;
}

const GeminiCaseBriefing: React.FC<GeminiCaseBriefingProps> = ({ destination }) => {
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
      const prompt = createCaseFilePrompt(destination);
      
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
      setError('Failed to generate summary. The case file appears to be corrupted.');
    } finally {
      setIsLoading(false);
    }
  }, [destination]);
  
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
        const trimmedLine = line.trim();
        if (trimmedLine === '') return null;

        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            const content = trimmedLine.substring(2);
            const parts = content.split('**');
            return (
                <li key={i} className="ml-5 list-disc text-slctrips-mid">
                    {parts.map((part, index) =>
                        index % 2 === 1 ? <strong key={index} className="text-slctrips-gold font-semibold">{part}</strong> : part
                    )}
                </li>
            );
        }

        const parts = line.split('**');
        return (
            <p key={i} className="mb-2 text-slctrips-light">
                {parts.map((part, index) =>
                    index % 2 === 1 ? <strong key={index} className="text-slctrips-gold font-semibold">{part}</strong> : part
                )}
            </p>
        );
    });
};


  return (
    <div className="bg-slctrips-navy border-2 border-slctrips-gold p-6 rounded-lg mb-8 shadow-lg text-white">
      <h2 className="font-heading text-3xl font-bold text-slctrips-gold mb-4">AI Case Briefing</h2>
      
      {!isGenerated && (
        <>
            <p className="text-slctrips-mid mb-4">Get a quick, AI-powered profiler's summary of this case and its historical significance.</p>
            <button
                onClick={generateBriefing}
                disabled={isLoading}
                className="bg-slctrips-gold text-slctrips-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300 disabled:bg-slate-600 transition-colors duration-300"
            >
                {isLoading ? 'Analyzing...' : 'Generate Briefing'}
            </button>
        </>
      )}

      {isGenerated && (
        <div>
            {isLoading && !briefing && <p className="text-slctrips-mid animate-pulse">Accessing criminal archives...</p>}
            
            <div className="prose prose-invert max-w-none whitespace-pre-wrap">
                {renderFormattedText(briefing)}
                 {isLoading && briefing && <span className="inline-block w-2 h-4 bg-slctrips-gold animate-pulse ml-1"></span>}
            </div>

            {error && <p className="text-red-400 mt-4">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default GeminiCaseBriefing;