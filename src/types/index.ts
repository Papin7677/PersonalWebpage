// TypeScript type definitions for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
