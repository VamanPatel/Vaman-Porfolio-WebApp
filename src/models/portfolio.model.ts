
export interface Skill {
  name: string;
  level: number; // Percentage 0-100
}

export interface Experience {
  company: string;
  duration: string;
  role: string;
  description: string[];
  technologies: string[];
  domain: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}
