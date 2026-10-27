import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation, site } from '@/content/home'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="font-serif text-2xl text-ivory sm:text-3xl">
          {site.name}
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu-principale"
          className="rounded-md p-2 text-ivory focus-visible:outline-2 focus-visible:outline-ivory"
        >
          <Menu aria-hidden className="size-8" />
          <span className="sr-only">Apri il menu</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-principale"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-forest text-ivory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
              <span className="font-serif text-2xl sm:text-3xl">{site.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                autoFocus
                className="rounded-md p-2 focus-visible:outline-2 focus-visible:outline-ivory"
              >
                <X aria-hidden className="size-8" />
                <span className="sr-only">Chiudi il menu</span>
              </button>
            </div>
            <nav className="flex flex-1 items-center justify-center">
              <ul className="space-y-6 text-center">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index + 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-4xl transition-colors hover:text-sage-light sm:text-5xl"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
