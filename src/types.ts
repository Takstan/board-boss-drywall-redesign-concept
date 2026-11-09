export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  idealFor: string;
  badge: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: 'multi-unit' | 'custom-home' | 'commercial';
  categoryLabel: string;
  sqft: string;
  finishLevel: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  client: string;
  completedYear: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  projectType: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  credentials: string[];
}
