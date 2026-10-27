import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'light' | 'primary'
}

const variants = {
  light: 'bg-ivory text-forest hover:bg-sage-light focus-visible:outline-ivory',
  primary: 'bg-forest text-ivory hover:bg-forest/90 focus-visible:outline-forest',
}

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]}`}
    >
      {children}
    </a>
  )
}
