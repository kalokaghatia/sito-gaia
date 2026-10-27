import { Reveal } from '@/components/Reveal'
import { quote } from '@/content/home'

export function Quote() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span aria-hidden className="block font-serif text-7xl leading-none text-terracotta">
          “
        </span>
        <blockquote className="mt-2 font-serif text-3xl leading-snug text-balance sm:text-4xl">
          {quote}
        </blockquote>
      </Reveal>
    </section>
  )
}
