export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  icon: string;
  date: string;
  points: string[];
}

export interface Project {
  key: string;
  caption: string;
  link: string;
  image: string;
}

export interface Contact {
  type: 'link' | 'mail';
  href: string;
  icon: 'github' | 'email' | 'linkedin';
  caption: string;
}

export interface EducationItem {
  year: string;
  institution: string;
  credential: string;
  credentialHref?: string;
  logo: string;
  logoAlt: string;
  logoRounded?: boolean;
}
