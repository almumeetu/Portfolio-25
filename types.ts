// FIX: Import `ReactNode` from 'react' to resolve 'Cannot find namespace React' error.
import type { ReactNode, FC } from 'react';

export interface Skill {
  name: string;
  icon: FC; 
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[]; // Changed to string array for bullet points
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
}

export interface OnlineCourseItem {
    title: string;
    platform: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}