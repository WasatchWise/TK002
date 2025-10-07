
export interface BuddyLink {
  category: string;
  text: string;
  url: string;
}

export interface EvidenceItem {
    note: string;
    photo?: string;
    id: string;
}

export enum Category {
  UTAH = "Utah",
  COLORADO = "Colorado",
  NEVADA = "Nevada",
  ARIZONA = "Arizona",
  WYOMING = "Wyoming",
  MONTANA = "Montana",
  IDAHO = "Idaho",
  NEW_MEXICO = "New Mexico",
  WEIRD = "Cult & Weird Cinema",
}

export enum FameLevel {
    INDIE = 'INDIE GEM',
    BLOCKBUSTER = 'BLOCKBUSTER',
    ICONIC = 'ICONIC',
    LEGENDARY = 'LEGENDARY'
}

export type ARData = {
  overlays: Array<{
    assetUrl: string; // PNG/SVG
    alt: string;
    anchor: { x: number; y: number }; // screen-relative 0..1
  }>;
  triggerRadiusM: number; // GPS proximity
  captions?: string[];
};

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  location: string;
  driveTime: string;
  visitDuration: string;
  cost: string;
  groupSize: string;
  bestTime: string;
  fameLevel: FameLevel;
  fameDescriptor: string;
  gps: string;
  what3words: string;
  story: string[];
  moviesFilmed: {
    title: string;
    movies: {
      title: string;
      posterUrl: string;
    }[];
  };
  hook: string;
  media: {
    youtubeId: string;
    title: string;
  }[];
  visitorTips: {
    title: string;
    points: string[];
  };
  behindTheScenes: {
    title: string;
    quote: string;
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
  ar_data?: ARData;
}
