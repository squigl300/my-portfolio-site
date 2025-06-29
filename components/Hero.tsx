'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sean Quigley
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Graduate AI Engineer | Building intelligent systems that solve real-world problems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/cv/sean-quigley-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:sean@seanquigley.tech">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sean Quigley',
            jobTitle: 'Graduate AI Engineer',
            url: 'https://seanquigley.tech',
            email: 'sean@seanquigley.tech',
            knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'DevOps', 'Cybersecurity'],
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'University College Dublin'
            }
          })
        }}
      />
    </section>
  )
}