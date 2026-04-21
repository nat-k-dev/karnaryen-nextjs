import Image from 'next/image';
import type { Project } from '@/types';

export function ProjectCard({ caption, link, image }: Project) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden no-underline border border-border"
    >
      <div className="relative h-36 w-full overflow-hidden bg-background">
        <Image
          src={image}
          alt={caption}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="px-4 py-3 flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-foreground leading-snug">{caption}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          className="shrink-0 mt-0.5 text-muted group-hover:text-primary transition-colors"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  );
}
