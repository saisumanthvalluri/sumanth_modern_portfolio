export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  codeUrl?: string;
  image: string;
  gradient: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "portfolio" | "email" | "phone";
}
