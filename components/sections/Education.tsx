import Image from 'next/image';
import { EDUCATION } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Education() {
  const degree = EDUCATION[0];
  const courses = EDUCATION.slice(1);

  return (
    <section id="education" className="py-20 px-4 bg-surface">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>Education</SectionHeading>

        {/* Degree */}
        <EducationRow item={degree} />

        <div className="border-t border-border my-10" />

        <h3 className="text-xl font-semibold text-foreground text-center mb-8">
          Courses &amp; Certificates
        </h3>

        <div className="flex flex-col gap-6">
          {courses.map((item, i) => (
            <div key={i}>
              <EducationRow item={item} />
              {i < courses.length - 1 && <div className="border-t border-border mt-6" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationRow({ item }: { item: (typeof EDUCATION)[number] }) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2 shrink-0 w-20 text-center">
        <span className="text-xs text-muted font-medium">{item.year}</span>
        <div className="relative w-12 h-12">
          <Image
            src={item.logo}
            alt={item.logoAlt}
            fill
            className={`object-contain${item.logoRounded ? ' rounded-full' : ''}`}
            sizes="48px"
          />
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-muted">{item.institution}</p>
        {item.credentialHref ? (
          <a
            href={item.credentialHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
          >
            {item.credential}
          </a>
        ) : (
          <p className="text-base font-medium text-foreground">{item.credential}</p>
        )}
      </div>
    </div>
  );
}
