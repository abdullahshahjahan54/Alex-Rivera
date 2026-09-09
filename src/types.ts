export type ProjectCategory = 
  | 'All' 
  | 'Business' 
  | 'Restaurant' 
  | 'Automotive' 
  | 'Real Estate' 
  | 'E-Commerce' 
  | 'Portfolio' 
  | 'Web Apps';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  client: string;
  year: string;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  technologies: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  benefits: string[];
  iconName: string;
  deliveryTime: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & Cloud';
  level: number;
  experience: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  avatar: string;
  rating: number;
  review: string;
  projectType: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  budget: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface SiteSettings {
  brandName: string;
  profession: string;
  mainTagline: string;
  secondaryTagline: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
  availableForWork: boolean;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  aboutBio: string;
  websitesBuilt: number;
  happyClients: number;
  yearsExperience: number;
}
