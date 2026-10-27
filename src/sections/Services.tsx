import { ArrowRight } from 'lucide-react'
import { PhotoFrame } from '@/components/PhotoFrame'
import { Reveal } from '@/components/Reveal'
import { services } from '@/content/home'

export function Services() {
  return (
    <section id="servizi" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-5xl space-y-8 px-5 sm:px-8">
        {services.map((service) => (
          <Reveal key={service.title}>
            <a
              href={service.href}
              className="group grid overflow-hidden rounded-xl bg-sage-light md:grid-cols-2"
            >
              <div className="aspect-square overflow-hidden">
                <PhotoFrame photo={service.image} tone="ivory" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <h2 className="max-w-[12ch] font-serif text-4xl">{service.title}</h2>
                <span aria-hidden className="mt-5 block h-0.5 w-12 rounded-full bg-terracotta" />
                <p className="mt-6 max-w-sm text-lg">{service.text}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-terracotta-dark">
                  Scopri di più
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
