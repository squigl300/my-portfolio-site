'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const techStack = [
  'Python', 'TypeScript', 'React', 'Next.js',
  'AWS', 'Azure', 'Docker', 'Kubernetes',
  'TensorFlow', 'PyTorch', 'FastAPI', 'PostgreSQL'
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p>
                    I&apos;m a passionate Graduate AI Engineer with a strong foundation in computer science and a deep interest in building intelligent systems that solve real-world problems. My journey combines academic excellence with hands-on experience in machine learning, cloud infrastructure, and software development.
                  </p>
                  <p>
                    With a BSc in Computer Science from University College Dublin and specialized training in AI and cloud technologies, I bring both theoretical knowledge and practical skills to every project. I&apos;m particularly excited about the intersection of AI and scalable cloud architectures.
                  </p>
                  <p>
                    When I&apos;m not coding or studying the latest AI research papers, you&apos;ll find me exploring new technologies, contributing to open-source projects, or working on personal projects that push the boundaries of what&apos;s possible with modern AI tools.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Current Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}