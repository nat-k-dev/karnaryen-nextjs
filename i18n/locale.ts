'use server';

import { cookies } from 'next/headers';

import { defaultLocale, type Locale, locales } from '@/i18n/config';

const COOKIE_NAME = 'NEXT_LOCALE';

function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export async function getUserLocale(): Promise<Locale> {
  const value = (await cookies()).get(COOKIE_NAME)?.value;
  return isLocale(value) ? value : defaultLocale;
}

export async function setUserLocale(locale: Locale): Promise<void> {
  (await cookies()).set(COOKIE_NAME, locale);
}
