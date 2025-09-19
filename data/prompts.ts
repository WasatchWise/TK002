
import { CrimeLocation, EvidenceItem } from '../types';
import { Part } from '@google/genai';

export const createCaseFilePrompt = (location: CrimeLocation): string => {
  return `
    You are an AI criminal profiler and historian for "Dark Tourism West," an app about true crime locations.
    Your tone is factual, respectful, and analytical, like a seasoned detective briefing a colleague.
    Generate a concise case briefing for the location: "${location.name}".

    Please include:
    1.  **Case Summary:** A one-sentence summary of the crime that occurred here.
    2.  **Historical Significance:** A short summary of why this case is notable in criminal history.
    3.  **Key Individuals:** 2-3 bullet points naming the primary perpetrator(s) and victim(s).
    4.  **Profiler's Note:** A concluding sentence of insight for someone visiting the site.

    Keep the entire summary under 150 words. Format with markdown for clarity (bold with **, lists with * or -).
    Location data:
    - Name: ${location.name}
    - Crime: ${location.crime}
    - Story: ${location.story.join(' ')}
    - Perpetrators: ${location.perpetrators?.join(', ') || 'N/A'}
    - Victims: ${location.victims?.join(', ') || 'N/A'}
  `;
};

export const createInvestigationPlanPrompt = (location: CrimeLocation, focus: string, duration: string): string => {
  return `
    You are an AI assistant for "Dark Tourism West".
    Your tone is that of a respectful and methodical investigator, planning a site visit.
    Generate a personalized, step-by-step visitation plan for a user visiting "${location.name}".

    **User's Plan:**
    - Visit Focus: ${focus}
    - Available Time: ${duration}

    **Case Dossier:**
    - Name: ${location.name}
    - Crime: ${location.crime}
    - Accessibility Notes: ${location.accessibility}

    **Your Task:**
    Create a practical, step-by-step itinerary based on the user's plan and the case dossier.
    - The plan must be respectful and realistic for the time allotted.
    - Emphasize practical considerations from the "Accessibility Notes".
    - Structure the output with clear, sequential steps. Use Markdown for formatting (bolding with **, lists with *).
    - Start with a professional intro, like "Here is a suggested investigation plan for your visit to ${location.name}."
    - Conclude with a respectful sign-off, like "Remember to be mindful of the location's history. Conclude your investigation safely."
    - Keep the entire response under 250 words.
  `;
};

export const createProfilerAnalysisPrompt = (location: CrimeLocation, evidenceItems: EvidenceItem[]): Part[] => {
  const promptParts: Part[] = [];
  const textPrompt = `
    You are an expert AI criminal profiler reviewing a field investigator's report for the location: "${location.name}".
    I am presenting you with a collection of on-site photos and notes.
    Your task is to synthesize this evidence into a cohesive psychological and geographical analysis.

    - Start with a professional opening, like "Reviewing the submitted field evidence for the ${location.name} case."
    - Analyze the investigator's notes and images. How do they reflect the atmosphere of the crime scene? What emotions or historical echoes do they capture?
    - Connect the evidence to the known facts of the case (e.g., "The photo of the overgrown fence line evokes the isolation the victim must have felt...").
    - Offer insights on the location's role in the crime itself (e.g., victim selection, escape routes, concealment). Maintain an analytical and insightful tone.
    - Conclude with a summary of the analysis, like "This on-site evidence provides valuable context for understanding the environmental factors of the crime."
    
    Here is the submitted evidence:
  `;
  promptParts.push({ text: textPrompt });

  evidenceItems.forEach((item, index) => {
    let evidenceText = `\n\n--- Evidence Log #${index + 1} ---\n`;
    if (item.note) {
      evidenceText += `Investigator's Notes: "${item.note}"\n`;
    }
    if (item.photo) {
      evidenceText += `See attached evidentiary photograph.\n`;
    }
    promptParts.push({ text: evidenceText });

    if (item.photo) {
      const base64Data = item.photo.split(',')[1];
      promptParts.push({ inlineData: { mimeType: 'image/jpeg', data: base64Data } });
    }
  });

  return promptParts;
};

export const createCaseSuggestionPrompt = (allLocationNames: string[]): string => {
    return `
      You are an AI guide for "Dark Tourism West," an app about true crime locations.
      Your task is to suggest one compelling case for a user to investigate.
  
      Here is a list of available case files:
      ${allLocationNames.join(', ')}
  
      **Instructions:**
      1.  Randomly select ONE case from the list.
      2.  Provide a one-sentence, intriguing reason why this case is a great starting point for an investigation. Your reason should be thematic and engaging (e.g., "because it represents the brutal reality of frontier justice" or "because it remains one of America's most baffling unsolved mysteries").
      3.  Format your response as a JSON object with two keys: "caseName" and "reason".
      
      Example Response:
      {
        "caseName": "JonBenét Ramsey House",
        "reason": "Because it remains one of America's most baffling and high-profile unsolved child murders."
      }
    `;
  };