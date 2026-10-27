import { ImageIcon } from 'lucide-react'
import type { Photo } from '@/types/content'

type PhotoFrameProps = {
  photo: Photo
  className?: string
  priority?: boolean
  /** Colore del segnaposto: scegliere quello che contrasta con lo sfondo della sezione. */
  tone?: 'sage' | 'ivory'
}

const tones = {
  sage: 'bg-sage-light',
  ivory: 'bg-ivory',
}

export function PhotoFrame({
  photo,
  className = '',
  priority = false,
  tone = 'sage',
}: PhotoFrameProps) {
  if (photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Segnaposto: ${photo.label}`}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-sage text-center text-forest ${tones[tone]} ${className}`}
    >
      <ImageIcon aria-hidden className="size-8" strokeWidth={1.25} />
      <span className="px-4 text-sm font-medium">{photo.label}</span>
      <span className="text-xs tabular-nums">
        {photo.width} × {photo.height} px
      </span>
    </div>
  )
}
