import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Destination } from '../types';
import { EvidenceItem } from '../pages/DestinationDetailPage';

interface EvidenceBoardProps {
  destination: Destination;
  evidenceItems: EvidenceItem[];
}

const EvidenceBoard: React.FC<EvidenceBoardProps> = ({ destination, evidenceItems }) => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const generateSummary = useCallback(async () => {
    if (evidenceItems.length === 0) {
      setError("Pin some evidence first before I can analyze it!");
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

      const promptParts: any[] = [];
      let textPrompt = `
        You are Dan, the Wasatch Sasquatch, a friendly and knowledgeable senior field investigator for SLCTrips.
        I am presenting you with a case file for an investigation at "${destination.name}".
        Your task is to synthesize all the evidence provided (field notes and images) into a single, cohesive case summary.

        - Start with a strong opening, like "Alright, let's look at the evidence from your investigation at ${destination.name}."
        - Analyze how the user's findings might connect to the known lore and phenomena of the location.
        - Speculate on what the evidence could imply, but maintain a tone of curious inquiry, not definitive fact.
        - Keep your analysis encouraging, insightful, and in your character as a wise, slightly mysterious sasquatch guide.
        - Conclude with a thoughtful summary and a sign-off, like "Great work out there. Keep investigating! - Dan".
        
        Here is the evidence:
      `;
      promptParts.push({ text: textPrompt });

      evidenceItems.forEach((item, index) => {
        let evidenceText = `\n\n--- Evidence Item ${index + 1} ---\n`;
        if (item.note) {
          evidenceText += `Field Notes: "${item.note}"\n`;
        }
        if (item.photo) {
          evidenceText += `See attached image for this item.\n`;
        }
        promptParts.push({ text: evidenceText });

        if (item.photo) {
          const base64Data = item.photo.split(',')[1];
          promptParts.push({ inlineData: { mimeType: 'image/jpeg', data: base64Data } });
        }
      });
      
      const stream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: { parts: promptParts },
      });

      let text = '';
      for await (const chunk of stream) {
        text += chunk.text;
        setSummary(text);
      }
    } catch (e: any) {
      console.error(e);
      setError('Failed to generate summary. The connection seems to be lost in the woods.');
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
    <div className="bg-[#e3dcd3] p-6 rounded-lg mb-8 shadow-lg border-2 border-[#c2b8a7] relative overflow-hidden" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/notebook-dark.png')"}}>
        <div className="absolute top-2 right-2 bg-red-700 text-white font-mono text-xs px-2 py-1 z-20 transform rotate-3 shadow-md">TOP SECRET</div>
      <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2 relative z-10">Evidence Board</h2>
      <p className="text-gray-700 mb-6 relative z-10">All your pinned evidence appears here. When you're ready, I'll help you connect the dots.</p>

      {/* Evidence Grid */}
      <div className="bg-yellow-50/50 border border-yellow-200/50 p-4 rounded-md min-h-[150px]">
        {evidenceItems.length === 0 ? (
          <p className="text-center text-gray-500 italic py-10">Your board is clear. Use the Field Data Entry form to start pinning evidence!</p>
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
        <h3 className="font-heading text-2xl font-bold text-slctrips-red mb-4">Case Summary</h3>
        {!isGenerated ? (
             <button
                onClick={generateSummary}
                disabled={isLoading || evidenceItems.length === 0}
                className="w-full bg-slctrips-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-black disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300"
            >
                Generate Case Summary
            </button>
        ) : (
            <div className="bg-white/70 p-4 rounded-md border border-slctrips-mid min-h-[150px]">
                 {isLoading && !summary && <p className="text-slctrips-navy animate-pulse">Analyzing clues...</p>}
                 <div className="prose prose-sm max-w-none text-slctrips-black">
                    {renderFormattedText(summary)}
                    {isLoading && summary && <span className="inline-block w-2 h-4 bg-slctrips-navy animate-pulse ml-1"></span>}
                 </div>
                 {!isLoading && (
                    <button onClick={() => setIsGenerated(false)} className="text-xs text-slctrips-blue hover:underline mt-4">
                        Generate New Summary
                    </button>
                 )}
            </div>
        )}
         {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default EvidenceBoard;