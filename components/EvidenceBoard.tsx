
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CrimeLocation, EvidenceItem } from '../types';
import { createProfilerAnalysisPrompt } from '../data/prompts';

interface CaseBoardProps {
  destination: CrimeLocation;
  evidenceItems: EvidenceItem[];
}

const CaseBoard: React.FC<CaseBoardProps> = ({ destination, evidenceItems }) => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const generateSummary = useCallback(async () => {
    if (evidenceItems.length === 0) {
      setError("Add some field notes or photos to the case board before requesting an analysis!");
      return;
    }
    setIsLoading(true);
    setError('');
    setSummary('');
    setIsGenerated(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key not found.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const promptParts = createProfilerAnalysisPrompt(destination, evidenceItems);
      
      const stream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: [{ parts: promptParts }],
      });

      let text = '';
      for await (const chunk of stream) {
        text += chunk.text;
        setSummary(text);
      }
    } catch (e: any) {
      console.error(e);
      setError('Failed to generate analysis. The connection to the lab is down.');
    } finally {
      setIsLoading(false);
    }
  }, [destination, evidenceItems]);

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
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
    <div className="bg-yellow-100 p-6 rounded-lg mb-8 shadow-lg border-2 border-yellow-300 relative overflow-hidden">
        <div className="absolute top-2 right-2 text-yellow-400 font-mono text-xs z-0">CASE-FILE-{destination.id.toUpperCase()}</div>
      <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2 relative z-10">Case Board</h2>
      <p className="text-gray-700 mb-6 relative z-10">Your field logs appear here. When ready, submit them for a psychological and geographical profile of the location.</p>

      {/* Evidence Grid */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md min-h-[150px]">
        {evidenceItems.length === 0 ? (
          <p className="text-center text-gray-500 italic py-10">Your case board is empty. Use the Field Log to pin your first piece of evidence.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {evidenceItems.map((item, index) => (
              <div key={item.id} className="bg-white p-2 rounded shadow-md transform -rotate-2 hover:rotate-0 hover:scale-105 transition-transform duration-300">
                {item.photo && <img src={item.photo} alt={`Evidence ${index + 1}`} className="rounded-sm w-full h-auto" />}
                {item.note && <p className={`text-xs text-gray-800 p-1 ${item.photo ? 'mt-1 border-t' : ''}`}>{item.note}</p>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Analysis Section */}
      <div className="mt-6">
        <h3 className="font-heading text-2xl font-bold text-slctrips-red mb-4">Profiler's Analysis</h3>
        {!isGenerated ? (
             <button
                onClick={generateSummary}
                disabled={isLoading || evidenceItems.length === 0}
                className="w-full bg-slctrips-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-slctrips-black disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300"
            >
                Generate Profiler's Analysis
            </button>
        ) : (
            <div className="bg-white p-4 rounded-md border border-slctrips-mid min-h-[150px]">
                 {isLoading && !summary && <p className="text-slctrips-navy animate-pulse">Running psychological profile...</p>}
                 <div className="prose prose-sm max-w-none text-slctrips-black">
                    {renderFormattedText(summary)}
                    {isLoading && summary && <span className="inline-block w-2 h-4 bg-slctrips-navy animate-pulse ml-1"></span>}
                 </div>
                 {!isLoading && (
                    <button onClick={() => setIsGenerated(false)} className="text-xs text-slctrips-sky hover:underline mt-4">
                        Request Re-Analysis
                    </button>
                 )}
            </div>
        )}
         {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default CaseBoard;