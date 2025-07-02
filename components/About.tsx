'use client'

import * as React from 'react'           // ensures JSX types are in scope
import { motion } from 'framer-motion'
import {
  Volleyball,
  Waves,
  Globe,
  Wrench,
  Router,
  Keyboard,
  Film,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

/* ---------- data ---------- */

const hobbyList = [
  { icon: Volleyball, text: 'Five-a-side football – teamwork building.' },
  { icon: Waves,    text: '7 a.m. lane swimmer – meditative full-body wake-up.' },
  { icon: Globe,    text: 'Geopolitics enthusiast with a sharp eye on global trends.' },
  { icon: Wrench,   text: 'Hands-on hardware & electronics repair – love learning DIY' },
  { icon: Router,   text: 'Home-lab tinkerer – Proxmox + Home Assistant automations.' },
  { icon: Keyboard, text: 'Ergo workspace – split keyboard + e-ink devices' },
  { icon: Film,     text: 'Ambient film scores & cerebral cinema.' },
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
          <CardContent className="p-8">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p>
                Healthy body → healthy mind → better code. 
              </p>
              <p>
                Outside of building software I stay sharp with sport, creative activities and a home-lab full of experiments.
              </p>

              <ul className="list-none pl-0 space-y-3">
                {hobbyList.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              
            </motion.div>
            
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
