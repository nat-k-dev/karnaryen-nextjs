import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { PagePlaceholder } from '@/components/page-placeholder';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ExperiencePage');
  return { title: t('title') };
}

export default function ExperiencePage() {
  const t = useTranslations('ExperiencePage');

  return <PagePlaceholder title={t('title')} />;
}
