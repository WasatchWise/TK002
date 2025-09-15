
export interface BuddyLink {
  category: string;
  text: string;
  url: string;
}

export enum Category {
  UTAH = "UTAH - The Paranormal Epicenter",
  COLORADO = "COLORADO - Mile High Mysteries",
  NEVADA = "NEVADA - The Extraterrestrial State",
  ARIZONA = "ARIZONA - Desert of the Damned",
  WYOMING = "WYOMING - The Frontier Void",
  MONTANA = "MONTANA - Big Sky Darkness",
  IDAHO = "IDAHO - The Forgotten Realm",
  NEW_MEXICO = "NEW MEXICO - Land of Enchantment",
  BONUS = "BONUS ZONES",
  CRYPTID = "Cryptid Territories",
}

export enum DangerLevel {
    MODERATE = 'MODERATE',
    HIGH = 'HIGH',
    EXTREME = 'EXTREME',
    LETHAL = 'LETHAL'
}

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  location: string;
  driveTime: string;
  visitDuration:string;
  cost: string;
  groupSize: string;
  bestTime: string;
  dangerLevel: DangerLevel;
  dangerDescription: string;
  gps: string;
  what3words: string;
  story: string[]; // array of paragraphs
  evidence: { title: string; points: string[] };
  hook: string;
  media: {
    youtubeId: string;
    title: string;
  }[];
  safety: {
    title: string;
    points: string[];
  };
  olympianInsight: {
    character: string;
    quote: string;
    characterImage?: string;
  };
  equipment: { name: string; reason: string }[];
  gettingThere?: {
    from: string;
    steps: string[];
  };
  parking?: string;
  permits?: string;
  whenToVisit?: {
    bestTime: string;
    seasonality: string;
    peakActivity: string;
  };
  whatToExpect?: {
    phenomena: string[];
    encounters: string[];
  };
  relatedDestinationIds: string[];
  buddyLinks?: BuddyLink[];
  tags?: string[];
}