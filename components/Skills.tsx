'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/* ---------- data ---------- */

const education = [
  'BSc (Hons) Computer Science · 1st Class · Glasgow Caledonian University (2025)',
  'HND Software Development & Emerging Technologies (2023)',
  'NC Art & Animation (2017)'
]

const keyModules = [
  'Machine Learning & Data Analytics (Anaconda, Scikit-learn, Pandas)',
  'Cloud Platform Development (AWS, Lambda, S3, DynamoDB)',
  'DevOps (Docker · Kubernetes · Jenkins)',
  'Application Architecture & Design Patterns (UML, Business Process Modeling)',
  'Secure Software Development (OWASP, Burp Suite)',
  'Programming Paradigms (C++ & Scala)',
  'Database Systems Design (Oracle, MySQL, ER modelling)',
]

const allModules = [
  'Web Application Development 2',
  'Integrated Project 3',
  'Introduction to Data Science',
  'Research Skills & Professional Issues',
  'Relational Database Management Systems',
  'Data Structures',
  'Object-Oriented Analysis & Design',
  'User-Centred Design',
  'Team Working & Project Management',
]

/* ---------- component ---------- */

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Qualifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong software foundation with a keen focus on AI & cloud - I am very drawn to systems thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ---------- Education ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {education.map((item) => (
                    <li key={item} className="text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* ---------- Key Modules ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Key Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {keyModules.map((m) => (
                    <li key={m} className="text-sm leading-relaxed">
                      • {m}
                    </li>
                  ))}
                </ul>

                {/* accordion for full list */}
                {allModules.length > 0 && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-xs underline">
                      See full module list
                    </summary>
                    <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                      {allModules.map((m) => (
                        <li key={m}>• {m}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
