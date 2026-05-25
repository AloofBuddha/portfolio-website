export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  icon?: string;
  demo?: string;
  video?: string;
  image?: string | null;
  download?: string;
  /** Open TODOs — surfaced as a small list on each card so they can't be forgotten. */
  todos?: string[];
}

