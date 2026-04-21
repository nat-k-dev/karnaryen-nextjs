import { PROJECTS } from '@/lib/data';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Projects</SectionHeading>
        <p className="text-center text-muted text-sm mb-10 -mt-6">Self-study projects</p>
        <ProjectsGrid projects={PROJECTS} />
      </div>
    </section>
  );
}
