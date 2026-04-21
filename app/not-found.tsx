import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-8xl font-bold text-primary opacity-40">404</p>
      <h1 className="text-2xl font-semibold text-foreground">Page not found</h1>
      <p className="text-muted max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90 transition-opacity no-underline"
      >
        Back to home
      </Link>
    </div>
  );
}
