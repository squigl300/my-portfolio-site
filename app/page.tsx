import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { CurrentProject } from '@/components/CurrentProject'
import { ProjectGrid } from '@/components/ProjectGrid'
import { Skills } from '@/components/Skills'
import { Certifications } from '@/components/Certifications'
import { Reading } from '@/components/Reading'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CurrentProject />
      <ProjectGrid />
      <Skills />
      <Certifications />
      <Reading />
      <About />
      <Contact />
    </main>
  )
}