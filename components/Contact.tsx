'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Phone, Mail, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const contactMethods = [
  {
    name: 'MS Teams',
    icon: MessageSquare,
    href: 'https://teams.microsoft.com/l/chat/0/0?users=squigl300@caledonian.ac.uk',
    description: 'Quick chat or video call',
  },
  {
    name: 'WhatsApp',
    icon: Phone,
    href: 'https://wa.me/447746301312',
    description: 'Text or voice message',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:squigley2005@gmail.com',
    description: 'squigley2005@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/sq95',
    description: 'Professional network',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/squigl300',
    description: 'Code repositories',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and AI.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <CardTitle className="text-lg">{method.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Connect
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}