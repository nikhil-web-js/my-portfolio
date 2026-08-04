import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

type HomeProps = {
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

export default function Home({ searchParams }: HomeProps) {
  const showPresent = searchParams?.s === '1' || searchParams?.s === 'true'

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience showPresent={showPresent} />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
