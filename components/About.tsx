'use client'

import * as React from 'react'           // ensures JSX types are in scope
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Volleyball,
  Waves,
  Globe,
  Wrench,
  Router,
  Keyboard,
  Film,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

/* ---------- data ---------- */

const techStack = [
  'Python', 'TypeScript', 'React', 'Next.js',
  'AWS', 'Azure', 'Docker', 'Kubernetes',
  'TensorFlow', 'PyTorch', 'FastAPI', 'PostgreSQL',
]

const hobbyList = [
  { icon: Volleyball, text: 'Five-a-side goalkeeper – fast trust & teamwork.' },
  { icon: Waves,    text: '6 a.m. lane swimmer – meditative full-body wake-up.' },
  { icon: Globe,    text: 'Geopolitics “what-if” fan – future-proof systems thinking.' },
  { icon: Wrench,   text: 'Hands-on fixer – BIOS bricks & joystick drift revived.' },
  { icon: Router,   text: 'Home-lab tinkerer – Proxmox + Home Assistant automations.' },
  { icon: Keyboard, text: 'Ergo workspace – split ZSA Voyager + macro layers.' },
  { icon: Film,     text: 'Ambient film scores & cerebral sci-fi cinema.' },
]

const images = [
  { src: '/images/about/about-football.webp', alt: 'Five-a-side football action' },
  { src: '/images/about/about-workbench.webp', alt: 'Soldering a game-pad PCB' },
  { src: '/images/about/about-setup.webp',     alt: 'Ultrawide + vertical dev setup' },
]

/* ---------- component ---------- */

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* heading */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* card wrapper */}
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p>
                Healthy body → healthy mind → better code. Outside of building AI solutions
                I stay sharp with sport, repair projects and a home-lab full of experiments.
              </p>

              <ul className="list-none pl-0 space-y-3">
                {hobbyList.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <h3>Current Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map(t => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              {images.map(img => (
                <div key={img.src} className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
