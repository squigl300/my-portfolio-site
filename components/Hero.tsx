'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* --- text --- */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sean Quigley
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 space-y-2">
              <p>Graduate AI Engineer</p>
              <p>8 years Retail Management</p>
              <p>Passionate about digital transformation to build AI systems that matter.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a
                  href="/cv/sean-quigley-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  View CV
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="mailto:squigley2005@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>

          {/* --- portrait --- */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/profile-placeholder.JPG"       
              alt="Sean Quigley portrait"
              width={350}
              height={350}
              priority
              className="rounded-full object-cover shadow-lg border-4 border-primary/30"
            />
          </div>
        </motion.div>
      </div>

      {/* SEO schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sean Quigley',
            jobTitle: 'Graduate AI Engineer',
            url: 'https://seanquigley.tech',
            email: 'squigley2005@gmail.com',
            knowsAbout: [
              'Artificial Intelligence',
              'Machine Learning',
              'Cloud Computing',
              'DevOps',
              'Cybersecurity',
            ],
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Glasgow Caledonian University',
            },
          }),
        }}
      />
    </section>
  )
}
