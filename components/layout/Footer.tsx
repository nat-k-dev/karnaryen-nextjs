export function Footer() {
  return (
    <footer className="bg-surface border-t border-border text-muted text-sm text-center py-4 px-4">
      &copy;{' '}
      <a href="/" className="text-foreground hover:text-primary transition-colors">
        karnaryen.com
      </a>{' '}
      {new Date().getFullYear()}
    </footer>
  );
}
