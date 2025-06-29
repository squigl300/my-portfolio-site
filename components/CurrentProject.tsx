'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/projects'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Github, ExternalLink } from 'lucide-react'

export function CurrentProject() {
  const featured = projects.find(p => p.featured)
  if (!featured) return null

  return (
    <section id="current-project" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* ── heading ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Honours Project
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A privacy-first LLM pipeline that infers MBTI traits from chat.
          </p>
        </motion.div>

        {/* ── hero card ─────────────────────────────────────────── */}
        <Card className="max-w-3xl mx-auto overflow-hidden group">
          <CardHeader className="p-0 relative">
            {/* base image sets the height */}
            <Image
              src={featured.hero}
              alt={featured.title}
              width={1280}
              height={720}
              priority
              className="
                w-full h-auto object-contain
                transition-opacity duration-300
                bg-black/[0.04] dark:bg-white/[0.04]
                group-hover:opacity-0
              "
            />

            {/* hover overlay (only if a second image exists) */}
            {featured.images[1] && (
              <Image
                src={featured.images[1]}
                alt={`${featured.title} – alternate view`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="
                  absolute inset-0 object-contain
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                "
              />
            )}
          </CardHeader>

          <CardContent className="p-6">
            {/* categories */}
            <div className="flex flex-wrap gap-1 mb-3">
              {featured.categories.map(cat => (
                <Badge key={cat} variant={cat.toLowerCase() as any}>
                  {cat}
                </Badge>
              ))}
            </div>

            <CardTitle className="mb-2">{featured.title}</CardTitle>
            <p className="text-muted-foreground mb-3">{featured.tagline}</p>
            <p className="text-sm font-medium text-primary mb-4">
              {featured.metrics}
            </p>

            {/* tech pills */}
            <div className="flex flex-wrap gap-1 mb-6">
              {featured.tech.map(t => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>

            {/* links */}
            <div className="flex gap-2">
              {featured.links.github && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={featured.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
              )}

              {featured.links.demo && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={featured.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                </Button>
              )}

              {featured.links.pdf && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={featured.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    Report
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
