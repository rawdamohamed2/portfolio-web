import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional classNames (clsx) and resolves Tailwind
 * conflicts (twMerge) so the last conflicting class wins, e.g.
 * cn('px-2', condition && 'px-4') -> 'px-4', not both.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
