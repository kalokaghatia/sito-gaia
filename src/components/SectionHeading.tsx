import type { ReactNode } from 'react'

type SectionHeadingProps = {
  children: ReactNode
  as?: 'h2' | 'h3'
}

export function SectionHeading({ children, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <Tag
        className={`font-serif text-forest ${Tag === 'h2' ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}
      >
        {children}
      </Tag>
      <span aria-hidden className="mx-auto mt-5 block h-0.5 w-12 rounded-full bg-terracotta" />
    </div>
  )
}
