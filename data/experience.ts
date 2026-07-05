import type { StaticImageData } from 'next/image';

import abbyy from '@/public/experience/abbyy.webp';
import infoAccountant from '@/public/experience/infoaccountant.webp';
import juniorEinsteinSvg from '@/public/experience/junior-einstein.svg';
import neolook from '@/public/experience/neolook.webp';
import selfStudy from '@/public/experience/self-study.webp';

// Next.js types .svg static imports as `any`, unlike bitmap formats.
const juniorEinstein = juniorEinsteinSvg as StaticImageData;

/**
 * How to add an experience entry:
 * 1. Drop the logo in `public/experience/` and import it above.
 * 2. Append an entry below (newest first).
 * 3. Add texts under `ExperiencePage.timeline.<id>` in `messages/en.json`
 *    and `messages/nl.json`: `title`, `period`, and `description`
 *    (one bullet per line, separated with `\n`).
 */
export interface ExperienceItemInfo {
  id: string;
  /** Language-neutral company name; omit for entries without one. */
  company?: string;
  icon: StaticImageData;
}

export const experienceItems = [
  { id: 'juniorEinstein', company: 'Junior Einstein', icon: juniorEinstein },
  { id: 'neolook', company: 'Neolook Solutions', icon: neolook },
  { id: 'skillsDevelopment', icon: selfStudy },
  { id: 'infoAccountant', company: 'InfoAccountant', icon: infoAccountant },
  { id: 'abbyy', company: 'ABBYY', icon: abbyy },
] as const satisfies readonly ExperienceItemInfo[];

export type ExperienceItemId = (typeof experienceItems)[number]['id'];
