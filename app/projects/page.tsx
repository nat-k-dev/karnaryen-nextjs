import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { ProjectSection } from '@/components/project-section';
import { projects } from '@/data/projects';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ProjectsPage');
  return { title: t('title') };
}

export default function ProjectsPage() {
  const t = useTranslations('ProjectsPage');

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <h1 className="text-3xl font-semibold text-foreground">{t('title')}</h1>
      <div className="mt-10 flex flex-col gap-16 lg:mt-14 lg:gap-24">
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} imageLeft={index % 2 === 0} />
        ))}
      </div>
    </main>
  );
}
