export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  video?: string;
  image?: string | null;
  icon: string;
  featured?: boolean;
  stars?: number;
}

export interface Experience {
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[] | null;
}
