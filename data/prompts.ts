
import { Destination, EvidenceItem } from '../types';
import { Part, Type } from '@google/genai';

export const createBriefingPrompt = (destination: Destination): string => {
  return `
    You are an AI location scout assistant for 'SLCTrips', a guide to Hollywood's hidden backlot.
    Your tone is that of a seasoned film historian: knowledgeable, insightful, and full of interesting trivia.
    Generate a concise cinematic briefing for the location: "${destination.name}".

    Please include:
    1.  **Logline:** A one-sentence summary of this location's cinematic identity.
    2.  **Why It's Famous:** A short summary of what makes this location significant in film history.
    3.  **Key Scenes:** 2-3 bullet points of the most iconic movie moments filmed here.
    4.  **Director's Tip:** A concluding sentence of practical advice for a visiting film fan.

    Keep the entire summary under 150 words. Format with markdown for clarity (bold with **, lists with * or -).
    Destination data:
    - Name: ${destination.name}
    - Subtitle: ${destination.subtitle}
    - Story: ${destination.story.join(' ')}
    - Movies Filmed: ${destination.moviesFilmed.movies.map(m => m.title).join(', ')}
  `;
};

export const createItineraryPrompt = (destination: Destination, focus: string, duration: string): string => {
  return `
    You are an AI trip planning assistant for 'SLCTrips', a guide to movie locations.
    Your tone is that of Dan, the Wasatch Sasquatch, a friendly, expert location scout.
    Generate a personalized, step-by-step shooting itinerary for a user visiting "${destination.name}".

    **User's Plan:**
    - Scouting Focus: ${focus}
    - Available Time: ${duration}

    **Location Dossier:**
    - Name: ${destination.name}
    - Key Movies: ${destination.moviesFilmed.movies.map(m => m.title).join(', ')}
    - Visitor Tips: ${destination.visitorTips.points.join(' ')}

    **Your Task:**
    Create a practical, step-by-step itinerary based on the user's plan and the location dossier.
    - The itinerary must be realistic for the time allotted.
    - Emphasize practical tips from the "Visitor Tips".
    - Structure the output with clear, sequential steps for a successful photo/video shoot. Use Markdown for formatting (bolding with **, lists with *).
    - Start with a friendly intro, like "Alright, let's get you set up for the perfect shot at [Destination Name]!"
    - Conclude with an encouraging sign-off, like "That's a wrap! Have fun and capture some Hollywood magic. - Dan".
    - Keep the entire response under 250 words.
  `;
};

export const createDirectorCutPrompt = (destination: Destination, evidenceItems: EvidenceItem[]): Part[] => {
  const promptParts: Part[] = [];
  const textPrompt = `
    You are Dan, the Wasatch Sasquatch, but you're also an acclaimed film director reviewing a location scout's report.
    I am presenting you with a shot list for a scene at "${destination.name}".
    Your task is to synthesize the scout's notes and photos into a cohesive director's summary.

    - Start with an encouraging opening, like "Okay, let's review the dailies from your scout at ${destination.name}."
    - Analyze how the scout's findings (notes and images) could be used to film a great scene, connecting them to the location's cinematic history.
    - Speculate on shot composition, lighting, and mood. Offer creative suggestions. Maintain a tone of an experienced, insightful, and slightly quirky director.
    - Conclude with a confident summary and a classic director's sign-off, like "This is great stuff. I think we've found our shot. - Dan".
    
    Here is the shot list:
  `;
  promptParts.push({ text: textPrompt });

  evidenceItems.forEach((item, index) => {
    let evidenceText = `\n\n--- Shot ${index + 1} ---\n`;
    if (item.note) {
      evidenceText += `Scout's Notes: "${item.note}"\n`;
    }
    if (item.photo) {
      evidenceText += `See attached image for this shot.\n`;
    }
    promptParts.push({ text: evidenceText });

    if (item.photo) {
      const base64Data = item.photo.split(',')[1];
      promptParts.push({ inlineData: { mimeType: 'image/jpeg', data: base64Data } });
    }
  });

  return promptParts;
};

export const createTriviaPrompt = (destination: Destination) => {
  return {
    prompt: `
      You are an AI assistant for a movie tourism app.
      Your task is to generate exactly 3 fun, engaging trivia questions about the movies filmed at "${destination.name}".
      The questions should be based on behind-the-scenes facts or specific scenes from key movies like: ${destination.moviesFilmed.movies.map(m => m.title).join(', ')}.
      Return the response as a JSON object that strictly adheres to the provided schema.
    `,
    schema: {
        type: Type.OBJECT,
        properties: {
            questions: {
                type: Type.ARRAY,
                description: "A list of 3 trivia questions.",
                items: {
                    type: Type.OBJECT,
                    properties: {
                        question: { type: Type.STRING, description: 'The trivia question.' },
                        answer: { type: Type.STRING, description: 'The answer to the question.' }
                    },
                    required: ["question", "answer"]
                }
            }
        },
        required: ["questions"]
    }
  };
};
