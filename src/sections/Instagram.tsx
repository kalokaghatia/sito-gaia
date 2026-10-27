import { ArrowUpRight } from 'lucide-react'
import { PhotoFrame } from '@/components/PhotoFrame'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { instagram } from '@/content/home'

export function Instagram() {
  return (
    <section id="instagram" className="bg-sage-light py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center">
          <SectionHeading>{instagram.title}</SectionHeading>
          <a
            href={instagram.href}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-dark hover:text-forest"
          >
            {instagram.handle}
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {instagram.posts.map((post, index) => (
            <li key={post.caption}>
              <Reveal delay={(index % 3) * 0.08}>
                <a
                  href={instagram.href}
                  className="group relative block aspect-square overflow-hidden rounded-lg"
                >
                  <PhotoFrame photo={post.image} tone="ivory" />
                  <span className="absolute inset-0 flex items-end bg-forest/85 p-4 text-left text-sm text-ivory opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {post.caption}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
