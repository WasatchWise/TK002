
export interface EvidenceItem {
    note: string;
    photo?: string;
    id: string;
}

export enum State {
  UTAH = "Utah",
  COLORADO = "Colorado",
  NEVADA = "Nevada",
  ARIZONA = "Arizona",
  WYOMING = "Wyoming",
  MONTANA = "Montana",
  IDAHO = "Idaho",
  NEW_MEXICO = "New Mexico",
  CALIFORNIA = "California",
  OREGON = "Oregon",
}

export enum NotorietyLevel {
    LOCAL = 'LOCAL INFAMY',
    NATIONAL = 'NATIONAL ATTENTION',
    ICONIC = 'ICONIC CASE',
    LEGENDARY = 'CRIMINAL LEGEND'
}

export interface UnverifiedCrimeLocation {
  id: string;
  name: string;
  state: State;
}

export interface CrimeLocation {
  id: string;
  name: string;
  crime: string;
  state: State;
  region: string;
  address?: string;
  driveTime: string;
  story: string[];
  accessibility: string;
  gps: string;
  notorietyLevel: NotorietyLevel;
  perpetrators?: string[];
  victims?: string[];
  dates: string;
  relatedLocationIds?: string[];
  tags?: string[];
  paranormal?: string;
  status: string;
}