import { Skill } from "@/types";

export const skills: Skill[] = [
  //programming language
  { name: "C#", level: 85, category: "Language" },
  { name: "Java", level: 80, category: "Language" },
  {name: "JavaScript", level: 80, category: "Language" },
  {name: "TypeScript", level: 75, category: "Language" },
  {name:"Android", level: 70, category: "Language" },
  { name: "Python", level: 60, category: "Language" },
  { name: "HTML/CSS", level: 90, category: "Language" },
  { name: "React", level: 85, category: "Language" },
  { name: "Next.js", level: 80, category: "Language" },
  { name: "Tailwind CSS", level: 70, category: "Language" },

  // framework & library
  { name: "ASP.NET", level: 80, category: "Framework & Library" },
  { name: "Spring Boot", level: 65, category: "Framework & Library" },
  { name: "Django", level: 60, category: "Framework & Library" },
  { name: "React", level: 85, category: "Framework & Library" },

  // Database
  { name: "MySQL", level: 80, category: "Database" },
  { name: "PostgreSQL", level: 50, category: "Database" },
  
  // Tools & Others
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Unity", level: 75, category: "Tools" },
  { name: "Blender", level: 70, category: "Tools" },
  {name: "Visual Studio Code", level: 90, category: "Tools" },
  {name:"IntelliJ IDEA", level: 80, category: "Tools" },
  {name:"Android Studio", level: 70, category: "Tools" },
  { name: "Vercel", level: 80, category: "Tools" },
  { name: "Figma", level: 50, category: "Tools" },
];

export const skillCategories = [
  "Language",
  "Framework & Library",
  "Database",
  "Tools",
];
