import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 bg-background">
        <h1 className="text-4xl font-semibold text-foreground">Natalia Karaseva</h1>
        <p className="text-muted-foreground">Frontend developer</p>
        <ThemeToggle />
      </section>

      <section className="flex min-h-[40vh] flex-col items-center justify-center gap-4 bg-surface-soft p-8">
        <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
        <p className="text-muted-foreground">
          This section uses bg-surface-soft (mint-100 in light mode)
        </p>
      </section>
    </main>
  );
}
