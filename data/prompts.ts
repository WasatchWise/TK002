import { Part, Type } from '@google/genai';
import { Destination, EvidenceItem } from '../types';

/**
 * Creates a prompt for generating a custom field trip itinerary.
 */
export const createItineraryPrompt = (destination: Destination, focus: string, duration: string): string => {
  const { name, guardian, field_trip_stops, activities } = destination;

  const stopsInfo = field_trip_stops.map(stop => `- ${stop.name}: ${stop.educational_focus}`).join('\n');
  const activitiesInfo = activities.map(activity => `- ${activity.title}: ${activity.prompt}`).join('\n');

  return `You are a creative curriculum designer for 4th-grade students exploring Utah. Your goal is to create a short, engaging, hands-on learning itinerary for a field trip to ${name}.
The guardian of this county is ${guardian.name}, the ${guardian.animal_form}, who teaches that "${guardian.teaching_moment}".

The itinerary should have an educational focus on: **${focus}**.
The total duration for this activity plan should be approximately **${duration}**.

The output should be a fun, mission-style briefing for a 4th grader. Use markdown for formatting, like using '*' for list items and '**' for bolding. Address the student as "Pathfinder".
Start with a catchy mission title.

Base your itinerary on the following information about ${name}:
**Available Field Trip Stops:**
${stopsInfo}

**Example Activities:**
${activitiesInfo}

Generate a creative, step-by-step mission plan that a student and their parent or teacher can follow.`;
};

/**
 * Creates prompt parts for generating guardian feedback on student evidence.
 */
export const createDirectorCutPrompt = (destination: Destination, evidenceItems: EvidenceItem[]): Part[] => {
  const { name, guardian } = destination;

  const intro = `You are ${guardian.name}, the ${guardian.animal_form} and guardian of ${name}.
Your voice is ${guardian.voice.tone} and you speak with a ${guardian.voice.vocabulary} vocabulary. Your signature phrase is "${guardian.signature_line}".
A 4th-grade student, a "Junior Guardian", has shared their field journal with you. They have collected the following notes and photos during their visit to your county.
Your task is to provide positive and encouraging feedback on their observations. Connect their findings back to your main teaching moment, which is: "${guardian.teaching_moment}".
Keep your feedback concise, under 150 words. Address the student directly. Use markdown for formatting, like using '**' for bold text.
Here is what the student collected:`;

  const promptParts: Part[] = [{ text: intro }];

  evidenceItems.forEach(item => {
    if (item.photo) {
      const base64Data = item.photo.split(',')[1];
      if (base64Data) {
        promptParts.push({
          inlineData: {
            mimeType: 'image/jpeg',
            data: base64Data,
          },
        });
      }
    }
    if (item.note) {
      promptParts.push({ text: `Student's note: "${item.note}"` });
    }
  });

  return promptParts;
};


/**
 * Creates a prompt and schema for generating trivia questions.
 */
export const createTriviaPrompt = (destination: Destination): { prompt: string, schema: any } => {
  const { name, story, field_trip_stops, learning_objectives } = destination;

  const prompt = `You are an expert on Utah history, geography, and culture, specializing in ${name}. Your task is to generate 3 unique and engaging trivia questions suitable for a 4th grader.
The questions should be based on the provided information about ${name}. Use the story, field trip stops, and learning objectives to create the questions.
For each question, provide four multiple-choice options (one correct, three plausible but incorrect). The correct answer should not be obvious. Also provide a brief, fun explanation for the correct answer.

Return the result as a single JSON object that matches the provided schema. Do not include any other text or markdown formatting in your response.

Here is the information about ${name}:
Story: ${story.join(' ')}
Field Trip Stops: ${JSON.stringify(field_trip_stops)}
Learning Objectives: ${JSON.stringify(learning_objectives)}
`;

  const schema = {
    type: Type.OBJECT,
    properties: {
      questions: {
        type: Type.ARRAY,
        description: 'A list of trivia questions.',
        items: {
          type: Type.OBJECT,
          properties: {
            question: {
              type: Type.STRING,
              description: 'The trivia question.',
            },
            choices: {
              type: Type.ARRAY,
              description: 'A list of four multiple-choice answers.',
              items: {
                type: Type.STRING,
              },
            },
            answerIndex: {
              type: Type.INTEGER,
              description: 'The 0-based index of the correct answer in the choices array.',
            },
            explanation: {
              type: Type.STRING,
              description: 'A brief explanation for the correct answer.',
            },
          },
          required: ['question', 'choices', 'answerIndex', 'explanation'],
        },
      },
    },
    required: ['questions'],
  };

  return { prompt, schema };
};