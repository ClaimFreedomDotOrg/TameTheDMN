import { LucideIcon } from 'lucide-react';

export interface Spoke {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  cta: string;
  icon: LucideIcon;
  variant: 'cyan' | 'amber' | 'purple';
  thumbnail?: string;
}

export interface NavItem {
  label: string;
  href: string;
}