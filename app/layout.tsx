import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = 'https://karnaryen.com';

export const metadata: Metadata = {
  title: {
    default: 'Natalia Karaseva — Frontend Developer',
    template: '%s | Natalia Karaseva',
  },
  description:
    'Portfolio of Natalia Karaseva — frontend developer specialising in React, Next.js, TypeScript, Angular, and Tailwind CSS.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Natalia Karaseva',
    title: 'Natalia Karaseva — Frontend Developer',
    description:
      'Frontend developer specialising in React, Next.js, TypeScript, Angular, and Tailwind CSS.',
    images: [
      {
        url: '/me.webp',
        width: 400,
        height: 400,
        alt: 'Natalia Karaseva',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Natalia Karaseva — Frontend Developer',
    description:
      'Frontend developer specialising in React, Next.js, TypeScript, Angular, and Tailwind CSS.',
    images: ['/me.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents flash of wrong theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if((t||p)==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <div className="pt-16">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
