
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Destination } from '../types';
import { createTriviaPrompt } from '../data/prompts';

interface TriviaQuestion {
    question: string;
    answer: string;
}

interface GeminiTriviaProps {
    destination: Destination;
}

const GeminiTrivia: React.FC<GeminiTriviaProps> = ({ destination }) => {
    const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const generateTrivia = useCallback(async () => {
        setIsLoading(true);
        setError('');
        setQuestions([]);
        setCurrentIndex(0);
        setShowAnswer(false);

        try {
            if (!process.env.API_KEY) {
                throw new Error("API key not found.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const { prompt, schema } = createTriviaPrompt(destination);
            
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: schema,
                },
            });
            
            const jsonText = response.text.trim();
            const result = JSON.parse(jsonText);

            if (result.questions && result.questions.length > 0) {
                setQuestions(result.questions);
                setIsGenerated(true);
            } else {
                throw new Error("Couldn't find any trivia questions in the response.");
            }

        } catch (e: any) {
            console.error(e);
            setError('Failed to generate trivia. The film archives are currently locked.');
            setIsGenerated(false);
        } finally {
            setIsLoading(false);
        }
    }, [destination]);
    
    const handleShowAnswer = () => setShowAnswer(true);
    const handleNextQuestion = () => {
        setShowAnswer(false);
        setCurrentIndex(prev => prev + 1);
    };
    const handleReset = () => {
        setIsGenerated(false);
        setQuestions([]);
        setCurrentIndex(0);
        setShowAnswer(false);
        setError('');
    };

    return (
        <div className="bg-white p-6 rounded-lg mb-8 shadow-md border-t-4 border-slctrips-green">
            <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2">Film Buff Trivia</h2>
            
            {!isGenerated ? (
                <>
                    <p className="text-gray-600 mb-6">Think you know this location's film history? Test your knowledge with some AI-generated trivia!</p>
                    <button
                        onClick={generateTrivia}
                        disabled={isLoading}
                        className="w-full bg-slctrips-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-slate-400 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        {isLoading ? 'Consulting the Hollywood archives...' : '🎬 Start Trivia'}
                    </button>
                    {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
                </>
            ) : (
                <div className="bg-slctrips-light p-4 rounded-md border border-slctrips-mid">
                    <p className="text-sm font-bold text-slctrips-navy mb-2">Question {currentIndex + 1} of {questions.length}</p>
                    <p className="text-lg text-slctrips-black font-semibold mb-4">{questions[currentIndex].question}</p>
                    
                    {showAnswer && (
                        <div className="p-3 bg-green-100 border-l-4 border-slctrips-green rounded-r-md">
                            <p className="font-bold text-slctrips-navy">Answer:</p>
                            <p className="text-gray-800">{questions[currentIndex].answer}</p>
                        </div>
                    )}
                    
                    <div className="mt-4 flex gap-4">
                        {!showAnswer ? (
                            <button onClick={handleShowAnswer} className="flex-grow bg-slctrips-gold text-slctrips-navy font-bold py-2 px-4 rounded-lg hover:bg-yellow-300">
                                Reveal Answer
                            </button>
                        ) : currentIndex < questions.length - 1 ? (
                            <button onClick={handleNextQuestion} className="flex-grow bg-slctrips-sky text-white font-bold py-2 px-4 rounded-lg hover:bg-slctrips-navy">
                                Next Question &rarr;
                            </button>
                        ) : (
                             <button onClick={handleReset} className="flex-grow bg-slctrips-red text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
                                Finish Trivia
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GeminiTrivia;
