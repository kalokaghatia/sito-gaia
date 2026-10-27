import { MotionConfig } from 'motion/react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/sections/About'
import { Hero } from '@/sections/Hero'
import { Instagram } from '@/sections/Instagram'
import { Media } from '@/sections/Media'
import { Quote } from '@/sections/Quote'
import { Services } from '@/sections/Services'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <About />
        <Media />
        <Services />
        <Instagram />
        <Quote />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
