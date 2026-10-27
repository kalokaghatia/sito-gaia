import { motion } from 'motion/react'
import { ButtonLink } from '@/components/ButtonLink'
import { PhotoFrame } from '@/components/PhotoFrame'
import { hero } from '@/content/home'

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh items-center bg-forest">
      <div className="absolute inset-0 -z-10">
        <PhotoFrame photo={hero.image} priority />
        {/* Velo al 70%: garantisce almeno 3.87:1 al titolo avorio anche sui punti più chiari. */}
        <div className="absolute inset-0 bg-forest/70" />
      </div>
      <motion.div
        className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="font-serif text-3xl leading-snug text-balance text-ivory sm:text-5xl md:text-6xl md:leading-tight">
          {hero.title}
        </h1>
        <div className="mt-10">
          <ButtonLink href={hero.cta.href} variant="light">
            {hero.cta.label}
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  )
}
