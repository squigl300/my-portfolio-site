'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { Badge } from '@/components/ui/badge'

const categories = ['All', 'AI', 'Cloud', 'DevOps', 'Security'] as const
type Category = (typeof categories)[number]

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')

  const filtered = projects
    .filter(p => !p.featured)
    .filter(p => activeFilter === 'All' || p.categories.includes(activeFilter as any))

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of work spanning ML, Cloud Platform, DevOps, OOP & Functional, Database Design, Web & Mobile, Security.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveFilter(cat)}>
                <Badge
                  variant={activeFilter === cat ? 'default' : 'outline'}
                  className="cursor-pointer hover:scale-105 transition-all"
                >
                  {cat}
                </Badge>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
