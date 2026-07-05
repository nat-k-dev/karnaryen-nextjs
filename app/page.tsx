import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 bg-background">
        <h1 className="text-4xl font-semibold text-foreground">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </section>

      <section
        id="projects"
        className="flex min-h-[40vh] flex-col items-center justify-center gap-4 bg-surface-soft p-8"
      >
        <h2 className="text-2xl font-semibold text-foreground">{t('projects.title')}</h2>
        <p className="text-muted-foreground">{t('projects.note')}</p>
      </section>
    </main>
  );
}
