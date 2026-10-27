import { footerColumns, site } from '@/content/home'

export function Footer() {
  return (
    <footer id="contatti" className="bg-forest text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-sage-light uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-sage-light">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 border-t border-ivory/15 pt-8 text-xs text-sage-light">
          © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
