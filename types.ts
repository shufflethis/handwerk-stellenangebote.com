export enum View {
  HOME = 'HOME',
  JOBS = 'JOBS',
  EMPLOYERS = 'EMPLOYERS',
  SECTORS = 'SECTORS',
  IMPRESSUM = 'IMPRESSUM'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung' | 'Meisterstelle';
  salaryRange: string;
  datePosted: string;
  category: string;
  isPromoted?: boolean;
}

export interface TradeSector {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  imageUrl: string;
  averageSalary: string;
  futureOutlook: string;
}

export interface GenerateJobDescriptionParams {
  jobTitle: string;
  companyName: string;
  location: string;
  skills: string;
}