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
  'HND Software Development & Emerging Technologies · Distinction (2023)',
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
  // add / trim as you like — shown in the accordion
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

const competencies = [
  // — Languages & Paradigms
  'Python', 'TypeScript', 'Scala', 'C++', 'Java',
  // — AI / Data
  'Scikit-learn', 'TensorFlow', 'PyTorch', 'LangChain',
  // — Web & Frameworks
  'React', 'Next.js', 'FastAPI', 'Streamlit',
  // — Cloud & DevOps
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions',
  // — Data Stores
  'PostgreSQL', 'MongoDB', 'DynamoDB', 'FAISS',
  // — Tooling
  'Git', 'CI/CD', 'Terraform', 'Ansible',
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
            Skills &amp; Qualifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong software foundation with a keen focus on AI, cloud and secure delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          {/* ---------- Core Competencies ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Foundational Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
