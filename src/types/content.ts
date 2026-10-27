export type Photo = {
  /** URL dell'immagine; se assente viene mostrato un segnaposto. */
  src?: string
  alt: string
  /** Nome usato nel segnaposto per riconoscere la foto da fornire. */
  label: string
  /** Dimensioni consigliate in pixel. */
  width: number
  height: number
}
