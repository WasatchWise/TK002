// Fix: Add FameLevel enum for FameBadge component.
export enum FameLevel {
  INDIE = 'Indie',
  BLOCKBUSTER = 'Blockbuster',
  ICONIC = 'Iconic',
  LEGENDARY = 'Legendary',
}

export interface Guardian {
  name: string;
  animal_form: string;
  archetype: string;
  teaching_moment: string;
  signature_line: string;
  voice: {
    tone: string;
    vocabulary: string;
    signature_phrase: string;
    teaching_style: string;
  };
}

export interface FieldTripStop {
  name: string;
  gps: string;
  duration: string;
  educational_focus: string;
  guardian_connection: string;
  safety_notes: string[];
}

export interface Activity {
  title: string;
  type: 'Observation' | 'Hands-On' | 'Storytelling';
  prompt: string;
  materials_needed: string[];
}

export interface CurriculumDetails {
    [topic: string]: string[];
}

export interface LearningObjectives {
  social_studies: CurriculumDetails;
  science_seed: CurriculumDetails;
  ela: CurriculumDetails;
  mathematics: CurriculumDetails;
  health_education: CurriculumDetails;
  fine_arts: CurriculumDetails;
}

// Fix: Add EvidenceItem type for Field Journal component.
export interface EvidenceItem {
  id: string;
  note: string;
  photo?: string; // base64 encoded image
}

// Re-purposing the Destination interface to represent a County module.
export interface Destination {
  id: string;
  name: string; // County Name
  guardian: Guardian;
  learning_objectives: LearningObjectives;
  story: string[]; // Intro story about the county/guardian
  field_trip_stops: FieldTripStop[];
  activities: Activity[];
  relatedDestinationIds: string[]; // Related counties
  gps: string; // Central point of county for map
  what3words: string;
  // Fix: Add optional ar_data for ARViewPage component.
  ar_data?: {
    title: string;
    overlayImageUrl: string;
    instructions: string;
  };
}
