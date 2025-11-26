import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface ProgramDetails {
  id: string;
  title: string;
  age: string;
  description: string;
  focus: string[];
  activities: string[];
  image: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}