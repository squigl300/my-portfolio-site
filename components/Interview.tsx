'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Interview() {
  return (
    <section id="interview" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mock Storm ID Interview
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A practice interview session demonstrating my technical knowledge and communication skills for the Graduate AI Engineer position.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Technical Interview Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Mock Storm ID Interview - Sean Quigley"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  This unlisted video showcases my approach to technical problem-solving and my understanding of AI engineering principles.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}