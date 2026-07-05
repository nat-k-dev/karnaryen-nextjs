import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { PagePlaceholder } from '@/components/page-placeholder';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ProjectsPage');
  return { title: t('selfStudy.memoji.caption') };
}

export default function MemojiPage() {
  const t = useTranslations('ProjectsPage');

  return <PagePlaceholder title={t('selfStudy.memoji.caption')} backHref="/projects" />;
}
