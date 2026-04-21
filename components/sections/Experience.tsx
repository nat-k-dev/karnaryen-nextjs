import Image from 'next/image';
import { EXPERIENCES } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="flex gap-6 relative">
                {/* Timeline dot + logo */}
                <div className="flex flex-col items-center shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-surface border-2 border-border relative overflow-hidden shadow-sm">
                    <Image
                      src={exp.icon}
                      alt={exp.company}
                      fill
                      className="object-contain p-1.5"
                      sizes="48px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg leading-tight">
                        {exp.title}
                      </h3>
                      {exp.company && (
                        <p className="text-primary-text text-sm font-medium">{exp.company}</p>
                      )}
                    </div>
                    <span className="text-muted text-sm whitespace-nowrap">{exp.date}</span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-foreground leading-relaxed">
                        <span className="text-primary-text mt-1.5 shrink-0" aria-hidden="true">
                          ▸
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
