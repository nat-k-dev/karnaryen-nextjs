import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { PagePlaceholder } from '@/components/page-placeholder';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactsPage');
  return { title: t('title') };
}

export default function ContactsPage() {
  const t = useTranslations('ContactsPage');

  return <PagePlaceholder title={t('title')} />;
}
