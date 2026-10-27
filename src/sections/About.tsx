import { PhotoFrame } from '@/components/PhotoFrame'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { about } from '@/content/home'

export function About() {
  return (
    <section id="chi-sono" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full">
            <PhotoFrame photo={about.portrait} className="rounded-full" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <SectionHeading>{about.title}</SectionHeading>
          <ul className="mt-8 space-y-3 text-lg">
            {about.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
