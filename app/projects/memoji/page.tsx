import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { MemojiGame } from '@/components/memoji-game';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ProjectsPage');
  return { title: t('selfStudy.memoji.caption') };
}

export default function MemojiPage() {
  const t = useTranslations('ProjectsPage');
  const tCommon = useTranslations('Common');

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <h1 className="text-center text-3xl font-semibold text-foreground">
        {t('selfStudy.memoji.caption')}
      </h1>
      <MemojiGame />
      <div className="mt-12 text-center">
        <Link href="/projects" className={cn(buttonVariants({ variant: 'outline' }))}>
          <ArrowLeft data-icon="inline-start" className="size-4" />
          {tCommon('goBack')}
        </Link>
      </div>
    </main>
  );
}
