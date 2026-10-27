import { ButtonLink } from '@/components/ButtonLink'
import { PhotoFrame } from '@/components/PhotoFrame'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { media } from '@/content/home'

export function Media() {
  return (
    <section id="media" className="bg-sage-light py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading>{media.title}</SectionHeading>
        </Reveal>

        <div className="mt-12 space-y-6">
          {media.featured.map((item) => (
            <Reveal key={item.title}>
              <a
                href={item.href}
                aria-label={item.title}
                className="group block aspect-video overflow-hidden rounded-xl"
              >
                <div className="h-full transition-transform duration-500 group-hover:scale-[1.02]">
                  <PhotoFrame photo={item.image} tone="ivory" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <SectionHeading as="h3">{media.appearancesTitle}</SectionHeading>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {media.appearances.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(index % 2) * 0.1} className="h-full">
                <a
                  href={item.href}
                  className="flex h-full flex-col overflow-hidden rounded-xl bg-ivory shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <PhotoFrame photo={item.image} />
                  </div>
                  <p className="p-6 text-base">{item.title}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <ButtonLink href={media.cta.href}>{media.cta.label}</ButtonLink>
        </div>
      </div>
    </section>
  )
}
