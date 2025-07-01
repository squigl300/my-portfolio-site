'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, FileText } from 'lucide-react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
}

const categoryColors: Record<string, string> = {
  'AI/ML':      'before:bg-violet-500',
  Cloud:        'before:bg-teal-500',
  DevOps:       'before:bg-orange-500',
  Security:     'before:bg-red-500',
  Data:         'before:bg-blue-500',
  Mobile:       'before:bg-emerald-500',
  Desktop:      'before:bg-slate-500',
  Database:     'before:bg-amber-500',
  Architecture: 'before:bg-indigo-500',
} as const

export function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryCategory = project.categories[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          'group hover:shadow-lg transition-all duration-300 relative overflow-hidden',
          categoryColors[primaryCategory] ?? 'before:bg-primary'
        )}
      >
        {/* ---------- Hero + Hover image ---------- */}
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            {/* base */}
            <Image
              src={project.hero}
              alt={project.title}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain w-full h-full transition-transform duration-300 group-hover:opacity-0"
            />
            {/* hover */}
            {project.images[1] && (
              <Image
                src={project.images[1]}
                alt={`${project.title} alt`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="absolute inset-0 object-contain w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
              />
            )}
          </div>
        </CardHeader>

        {/* ---------- Body ---------- */}
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.categories.map(cat => (
              <Badge key={cat} variant={cat.toLowerCase() as any}>
                {cat}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-3">{project.tagline}</p>
          <p className="text-sm font-medium text-primary mb-4">
            {project.metrics}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.tech.map(tech => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* ---------- Footer links ---------- */}
        <CardFooter className="p-6 pt-0 flex gap-2">
          {project.links.github && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}

          {project.links.demo && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}

          {project.links.pdf && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.links.pdf}
                target="_blank"
                rel="noopener noreferrer"
               >
                <FileText className="h-4 w-4 mr-1" />
                {project.links.pdf.toLowerCase().endsWith('.pdf') ? 'Report' : 'Image'}
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
