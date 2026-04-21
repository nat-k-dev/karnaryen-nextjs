'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { href: '#aboutme', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contacts', label: 'Contacts' },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-header-bg"
      style={{ boxShadow: 'var(--header-shadow)' }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-semibold text-xl text-foreground no-underline"
        >
          <Image
            src="/logo192.webp"
            alt="Natalia Karaseva"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          Natalia Karaseva
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-xl text-foreground hover:bg-nav-hover transition-colors text-base font-medium no-underline"
            >
              {label}
            </a>
          ))}
          <div className="w-px h-6 bg-border mx-3" />
          <ThemeToggle theme={theme} toggle={toggle} />
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-xl text-foreground hover:bg-nav-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="26"
              height="26"
              aria-hidden="true"
            >
              <path d="M3 6.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Zm0 4.5h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Zm0 4.5h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <>
          <nav className="md:hidden bg-surface border-t border-border px-4 py-3 flex flex-col gap-1 rounded-b-3xl shadow-lg">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-foreground hover:bg-nav-hover transition-colors text-base font-medium no-underline"
              >
                {label}
              </a>
            ))}
          </nav>
          <div
            className="fixed inset-0 top-16 bg-black/50 z-[-1]"
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}
    </header>
  );
}

function ThemeToggle({ theme, toggle }: { theme: 'light' | 'dark'; toggle: () => void }) {
  return (
    <button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggle}
      className="p-2 rounded-xl text-foreground hover:bg-nav-hover transition-colors"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.166 17.834a.75.75 0 0 0-1.06 1.06l1.59 1.591a.75.75 0 1 0 1.061-1.06l-1.591-1.591ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.166 6.166a.75.75 0 0 0 1.06 1.06l1.591-1.59a.75.75 0 1 0-1.06-1.061l-1.591 1.59Z" />
    </svg>
  );
}
