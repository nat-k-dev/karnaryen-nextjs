import { AboutMe } from '@/components/sections/AboutMe';
import { Contacts } from '@/components/sections/Contacts';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Contacts />
    </main>
  );
}
