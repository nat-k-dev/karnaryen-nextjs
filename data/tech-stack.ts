export interface TechInfo {
  name: string;
  icon: string;
}

/**
 * Registry of technologies. Add or remove entries here — the About page
 * renders them in insertion order. Reference individual items by id
 * (e.g. for project descriptions): <TechStack ids={['angular', 'tailwind']} />
 */
export const tech = {
  html: { name: 'HTML', icon: '/tech/html.svg' },
  css: { name: 'CSS', icon: '/tech/css3.svg' },
  javascript: { name: 'JavaScript', icon: '/tech/js.svg' },
  tailwind: { name: 'Tailwind', icon: '/tech/tailwind-css.svg' },
  typescript: { name: 'TypeScript', icon: '/tech/typescript.svg' },
  angular: { name: 'Angular', icon: '/tech/angular.svg' },
  react: { name: 'React', icon: '/tech/react.svg' },
} as const satisfies Record<string, TechInfo>;

export type TechId = keyof typeof tech;

export const techStackIds = Object.keys(tech) as TechId[];
