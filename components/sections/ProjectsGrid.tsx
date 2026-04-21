'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ui/ProjectCard';
import type { Project } from '@/types';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {projects.map(({ key, ...project }) => (
        <motion.div key={key} variants={item}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
