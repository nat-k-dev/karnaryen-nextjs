import type { Contact, EducationItem, Experience, Project, Technology } from '@/types';

export const TECHNOLOGIES: Technology[] = [
  { name: 'HTML 5', icon: '/tech/html.webp' },
  { name: 'CSS 3', icon: '/tech/css.webp' },
  { name: 'JavaScript', icon: '/tech/javascript.webp' },
  { name: 'TypeScript', icon: '/tech/typescript.webp' },
  { name: 'React JS', icon: '/tech/reactjs.webp' },
  { name: 'Tailwind CSS', icon: '/tech/tailwind.webp' },
  { name: 'Three JS', icon: '/tech/threejs.svg' },
  { name: 'Git', icon: '/tech/git.webp' },
  { name: 'Figma', icon: '/tech/figma.webp' },
  { name: 'Docker', icon: '/tech/docker.webp' },
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'Junior Einstein',
    icon: '/company/junior-einstein.svg',
    date: 'Nov 2025 — Present',
    points: [
      'Developed UI components and product features for an internal e-commerce platform using React, Next.js, TypeScript, and Tailwind CSS.',
      'Built reusable components for a shared design system using shadcn/ui and Storybook (Button, Checkbox, Switch, Alert).',
      'Implemented product UI elements such as product cards and filtering interfaces.',
      'Contributed to code reviews and wrote unit tests (Vitest) and end-to-end tests (Cypress) to improve code quality.',
      'Researched internationalization approaches and implemented multilingual support for the application.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Neolook Solutions',
    icon: '/company/neolook.webp',
    date: 'Oct 2022 — Sep 2025',
    points: [
      'Led the development of frontend interfaces for healthcare platforms used in neonatal and pediatric intensive care units (NICU/PICU).',
      'Designed and implemented the frontend architecture for several Angular applications, translating Figma designs into scalable, responsive interfaces using TypeScript and Tailwind CSS.',
      'Developed complex UI features including patient and camera monitoring dashboards, data tables, filtering interfaces, and multi-step forms/modals.',
      'Implemented real-time functionality such as camera status updates using Server-Sent Events and video communication using WebRTC.',
      'Built core application infrastructure including routing refactoring, dark/light mode, Dutch–English localisation, and API integration (REST, Strapi).',
      'Collaborated closely with backend developers and designers in an Agile environment to deliver reliable healthcare interfaces.',
      'Solutions were deployed in hospitals including Máxima MC (Eindhoven), UMC Utrecht, and UMC Groningen.',
    ],
  },
  {
    title: 'Frontend Skills Development',
    company: 'Self-study',
    icon: '/company/self-study.webp',
    date: 'Sep 2018 — Sep 2022',
    points: [
      'Created projects using ReactJS, styled-components, Bootstrap: personal webpage, multi-language webpage about piano lessons, and frontend for online shop.',
      'Created tech blog using VueJS and Intersection Observer API.',
      'Created delivery company website using Angular and Tailwind CSS.',
      '"Yandex School of Web Interfaces Development" — 6-month on-site program: built frontend for an internal web application (git, webpack, Figma to responsive CSS/HTML, JavaScript, ReactJS, testing, ESLint, BEM, TypeScript).',
      'Completed two online specialisations in web interfaces development (Coursera and freeCodeCamp): responsive web design, semantic HTML, CSS animations, JavaScript.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'InfoAccountant',
    icon: '/company/info-buhgalter.webp',
    date: 'Sep 2017 — Aug 2018',
    points: [
      'Participating in development of the new version of accounting software in C++ for Windows, improving the program interface in accordance with a new design, writing tests (gtest), code review.',
    ],
  },
  {
    title: 'Software Test Engineer',
    company: 'ABBYY',
    icon: '/company/abbyy.webp',
    date: 'Apr 2012 — Aug 2017',
    points: [
      'Testing of SDK for optical character recognition (Windows, C++).',
      'Full cycle of SDK applications release testing: test plan development and prioritisation, test data and test environment preparation, tests implementation, results analysis and bug reporting, test automation and regression testing.',
      'Functional, exploratory and load testing; test utilities development and support, code review.',
      'Release management, communication with developers and analysts, working in accordance with Agile methodologies.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    key: 'cacaoBu',
    caption: 'Online Store on React',
    link: 'https://cacao-bu.netlify.app/',
    image: '/projects/project__cacao-bu.webp',
  },
  {
    key: 'pianoles',
    caption: 'Multi-language React page',
    link: 'https://pianoles.netlify.app/',
    image: '/projects/project__pianoles.webp',
  },
  {
    key: 'angularCargo',
    caption: 'Delivery company website on Angular and Tailwind',
    link: 'https://angular-cargo.netlify.app/',
    image: '/projects/project__angular-cargo.webp',
  },
  {
    key: 'techBlogVue',
    caption: 'Tech blog on Vue.JS',
    link: 'https://tech-blog-vue.netlify.app/',
    image: '/projects/project__tech-blog-vue.webp',
  },
  {
    key: 'biebOudersApp',
    caption: 'Password protected school library app — Angular, Firebase',
    link: 'https://biebouders.netlify.app/',
    image: '/projects/project__biebouders.webp',
  },
  {
    key: 'parallaxTailwind',
    caption: 'Parallax effect on Tailwind',
    link: 'https://play.tailwindcss.com/cdMTD7LkOb?layout=preview',
    image: '/projects/project__parallax-tailwind.webp',
  },
  {
    key: 'wordpressBlog',
    caption: 'Travel blog on WordPress',
    link: 'https://natkdevtravel.wordpress.com/',
    image: '/projects/project__wordpress-blog.webp',
  },
  {
    key: 'smartphone',
    caption: 'Smartphone rotation (CSS)',
    link: 'https://codepen.io/appalse/full/LvPvbg',
    image: '/projects/project__smartphone.webp',
  },
  {
    key: 'tributePage',
    caption: 'Tenzing Norgay tribute page',
    link: 'https://codepen.io/appalse/full/MRmoNg',
    image: '/projects/project__tribute-page.webp',
  },
];

export const CONTACTS: Contact[] = [
  {
    type: 'link',
    href: 'https://github.com/nat-k-dev',
    icon: 'github',
    caption: 'GitHub',
  },
  {
    type: 'mail',
    href: 'mailto:natalia.kutina13@gmail.com',
    icon: 'email',
    caption: 'Email',
  },
  {
    type: 'link',
    href: 'https://www.linkedin.com/in/nataliakutina',
    icon: 'linkedin',
    caption: 'LinkedIn',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    year: '2006 – 2012',
    institution: 'Moscow Aviation Institute (State University of Aerospace Technologies)',
    credential: "Engineer's degree, Computer Science",
    logo: '/education/mai.svg',
    logoAlt: 'MAI logo',
  },
  {
    year: '2026',
    institution: 'Udemy',
    credential: 'Claude Code — The Practical Guide',
    credentialHref: 'https://www.udemy.com/certificate/UC-976b46bd-e0dc-4ad5-9efd-3e25437854ba/',
    logo: '/education/claude-code-udemy.webp',
    logoAlt: 'Udemy logo',
    logoRounded: true,
  },
  {
    year: '2025',
    institution: 'Udemy',
    credential: 'Angular — The Complete Guide (2025 Edition)',
    credentialHref: 'https://www.udemy.com/certificate/UC-daae9ae8-71aa-4c12-90cb-d195c81c7700/',
    logo: '/education/angular-udemy.webp',
    logoAlt: 'Udemy logo',
    logoRounded: true,
  },
  {
    year: '2025',
    institution: 'Dienst Uitvoering Onderwijs (DUO)',
    credential: 'Inburgeringsdiploma A2',
    credentialHref: '/inburgering-a2.pdf',
    logo: '/education/duo.webp',
    logoAlt: 'DUO logo',
    logoRounded: true,
  },
  {
    year: '2019',
    institution: 'Yandex School of Web Interfaces Development',
    credential: '6-month on-site programme of web application development',
    logo: '/education/yandex.webp',
    logoAlt: 'Yandex logo',
    logoRounded: true,
  },
  {
    year: '2019',
    institution: 'freeCodeCamp',
    credential: 'Responsive Web Design Certification Programme',
    credentialHref: 'https://www.freecodecamp.org/fcc3ad6e5ae-7fed-4b67-ad44-2c42570b0bc3',
    logo: '/education/freecodecamp.webp',
    logoAlt: 'freeCodeCamp logo',
  },
  {
    year: '2018',
    institution: 'Moscow Institute of Physics and Technology, Yandex, E-Learning Development Fund',
    credential: 'Web Interfaces Development: HTML, CSS and JavaScript Specialisation',
    credentialHref:
      'https://www.coursera.org/account/accomplishments/specialization/certificate/PWMDB5J9ESS8',
    logo: '/education/coursera.webp',
    logoAlt: 'Coursera logo',
  },
  {
    year: '2017',
    institution: 'GASQ Service GmbH',
    credential: 'ISTQB Certified Tester (Foundation Level)',
    credentialHref: '/ISTQB_certificate.pdf',
    logo: '/education/istqb.webp',
    logoAlt: 'ISTQB logo',
    logoRounded: true,
  },
];

export const ABOUT_ME = {
  paragraph1:
    "Hello, my name is Natalia. I'm a frontend developer passionate about creating clean, user-friendly, and responsive web interfaces. I work with HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Angular, and React. I enjoy building web applications that people find easy to use, and I value being part of projects that have a meaningful impact. My recent experience includes developing web applications for the healthcare sector — helping medical staff, children in intensive care units and families stay connected through intuitive, modern interfaces.",
  paragraph2:
    'I find the most inspiration in creating and refining intuitive web interfaces while continually developing my frontend skills. Feel free to check out my projects below!',
};
