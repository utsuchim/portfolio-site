export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  role: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}
