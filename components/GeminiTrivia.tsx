import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Destination } from '../types';
import { createTriviaPrompt } from '../data/prompts';

interface TriviaQuestion {
    question: string;
    choices: string[];
    answerIndex: number;
    explanation: string;
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
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    const generateTrivia = useCallback(async () => {
        setIsLoading(true);
        setError('');
        setQuestions([]);
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);

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
            setError('Failed to generate trivia. The library of secrets is currently closed.');
            setIsGenerated(false);
        } finally {
            setIsLoading(false);
        }
    }, [destination]);
    
    const handleAnswerSelect = (index: number) => {
        if (showResult) return;
        setSelectedAnswer(index);
        setShowResult(true);
    }
    
    const handleNextQuestion = () => {
        setShowResult(false);
        setSelectedAnswer(null);
        setCurrentIndex(prev => prev + 1);
    };
    
    const handleReset = () => {
        setIsGenerated(false);
        setQuestions([]);
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setError('');
    };

    const getButtonClass = (index: number) => {
        if (!showResult) {
            return 'bg-white hover:bg-slctrips-mid';
        }
        if (index === questions[currentIndex].answerIndex) {
            return 'bg-green-200 border-slctrips-green';
        }
        if (index === selectedAnswer) {
            return 'bg-red-200 border-slctrips-red';
        }
        return 'bg-white opacity-60';
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slctrips-green">
            <h2 className="font-heading text-3xl font-bold text-slctrips-navy mb-2">Guardian's Trivia Challenge</h2>
            
            {!isGenerated ? (
                <>
                    <p className="text-gray-600 mb-6">Think you know this county's secrets? Test your knowledge with some AI-generated trivia!</p>
                    <button
                        onClick={generateTrivia}
                        disabled={isLoading}
                        className="w-full bg-slctrips-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-slate-400 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        {isLoading ? 'Consulting the ancient scrolls...' : '📜 Start Trivia'}
                    </button>
                    {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
                </>
            ) : (
                <div className="bg-slctrips-light p-4 rounded-md border border-slctrips-mid">
                    <p className="text-sm font-bold text-slctrips-navy mb-2">Question {currentIndex + 1} of {questions.length}</p>
                    <p className="text-lg text-slctrips-black font-semibold mb-4">{questions[currentIndex].question}</p>
                    
                    <div className="space-y-2 mb-4">
                        {questions[currentIndex].choices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                disabled={showResult}
                                className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${getButtonClass(index)}`}
                            >
                                {choice}
                            </button>
                        ))}
                    </div>

                    {showResult && (
                        <div className="p-3 bg-blue-100 border-l-4 border-slctrips-sky rounded-r-md">
                            <p className="font-bold text-slctrips-navy">Did you know?</p>
                            <p className="text-gray-800">{questions[currentIndex].explanation}</p>
                        </div>
                    )}
                    
                    <div className="mt-4 flex gap-4">
                        {showResult && (
                           currentIndex < questions.length - 1 ? (
                            <button onClick={handleNextQuestion} className="flex-grow bg-slctrips-sky text-white font-bold py-2 px-4 rounded-lg hover:bg-slctrips-navy">
                                Next Question &rarr;
                            </button>
                        ) : (
                             <button onClick={handleReset} className="flex-grow bg-slctrips-red text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
                                Finish Challenge
                            </button>
                        )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GeminiTrivia;