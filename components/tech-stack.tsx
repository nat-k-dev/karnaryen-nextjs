import Image from 'next/image';

import { tech, type TechId, techStackIds } from '@/data/tech-stack';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  id: TechId;
  size?: 'sm' | 'md';
  className?: string;
}

export function TechBadge({ id, size = 'md', className }: TechBadgeProps) {
  const { name, icon } = tech[id];

  return (
    <span
      className={cn(
        'flex items-center text-foreground',
        size === 'md' ? 'flex-col gap-3 text-base sm:text-lg' : 'gap-2 text-sm',
        className,
      )}
    >
      <Image
        src={icon}
        alt=""
        width={64}
        height={64}
        className={cn('w-auto', size === 'md' ? 'h-12 sm:h-16' : 'h-6')}
      />
      {name}
    </span>
  );
}

interface TechStackProps {
  ids?: readonly TechId[];
  size?: 'sm' | 'md';
  className?: string;
}

export function TechStack({ ids = techStackIds, size = 'md', className }: TechStackProps) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-end justify-center',
        size === 'md' ? 'gap-x-8 gap-y-6 sm:gap-x-12' : 'gap-x-4 gap-y-2',
        className,
      )}
    >
      {ids.map((id) => (
        <li key={id}>
          <TechBadge id={id} size={size} />
        </li>
      ))}
    </ul>
  );
}
