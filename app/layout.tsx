import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Natalia Karaseva — Frontend Developer',
  description: 'Portfolio of Natalia Karaseva.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
