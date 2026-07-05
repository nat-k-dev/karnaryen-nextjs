import { useTranslations } from 'next-intl';

export function PagePlaceholder({ title }: { title: string }) {
  const t = useTranslations('Common');

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
      <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
      <p className="mt-4 text-muted-foreground">{t('comingSoon')}</p>
    </main>
  );
}
