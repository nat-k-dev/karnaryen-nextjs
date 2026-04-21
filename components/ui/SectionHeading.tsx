interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-bold text-foreground text-center mb-12">{children}</h2>;
}
