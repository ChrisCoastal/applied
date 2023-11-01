import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncString(str: string, max: number) {
  return str.length <= max ? str : str.slice(0, max) + '...';
}

export function parseDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString();
}
