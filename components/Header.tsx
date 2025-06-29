'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { scrollToSection } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: 'hero' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
]

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl"
        >
          SQ
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </motion.header>
  )
}