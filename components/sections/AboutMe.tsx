import Image from 'next/image';
import { ABOUT_ME, TECHNOLOGIES } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AboutMe() {
  return (
    <section id="aboutme" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>About me</SectionHeading>

        <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
          {/* Photo */}
          <div className="flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0">
            <Image
              src="/me.webp"
              alt="Natalia Karaseva"
              width={180}
              height={180}
              className="rounded-full object-cover shadow-md"
              priority
            />
            <p className="text-foreground font-semibold text-lg">Natalia Karaseva</p>
            <p className="text-primary-text text-sm font-medium">Frontend Developer</p>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-4 text-foreground leading-relaxed text-base">
            <p>{ABOUT_ME.paragraph1}</p>
            <p>{ABOUT_ME.paragraph2}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-6">
          {TECHNOLOGIES.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 relative">
                <Image
                  src={icon}
                  alt={name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                  sizes="56px"
                />
              </div>
              <span className="text-xs text-muted">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
