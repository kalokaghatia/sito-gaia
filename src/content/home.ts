import coupleImage from '@/assets/images/coppia-cortile.webp'
import heroImage from '@/assets/images/hero-torino.webp'
import type { Photo } from '@/types/content'

// Testi segnaposto: sostituirli con i contenuti reali.
// Le foto restano `src: undefined` finché non vengono fornite; nel frattempo
// il sito mostra un riquadro con il nome e le dimensioni consigliate.

export const site = {
  name: 'Nome Cognome',
  role: 'Sessuologa',
}

export const navigation = [
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Media', href: '#media' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Contatti', href: '#contatti' },
]

export const hero = {
  title: `${site.name} è sessuologa: uno spazio riservato e senza giudizio per parlare di sessualità, desiderio e relazioni.`,
  cta: { label: 'Prenota un primo colloquio', href: '#contatti' },
  image: {
    src: heroImage,
    alt: '',
    label: 'Hero, sfondo',
    width: 735,
    height: 490,
  } satisfies Photo,
}

export const about = {
  portrait: {
    src: undefined,
    alt: `Ritratto di ${site.name}`,
    label: 'Ritratto',
    width: 1200,
    height: 1200,
  } satisfies Photo,
  title: 'Aree di intervento',
  areas: [
    'Calo del desiderio',
    'Difficoltà sessuali maschili e femminili',
    'Dolore durante i rapporti',
    'Intimità e comunicazione nella coppia',
    'Identità di genere e orientamento sessuale',
    'E molto altro',
  ],
}

export const media = {
  title: 'In evidenza',
  featured: [
    {
      title: 'Programma o progetto in evidenza 1',
      href: '#',
      image: {
        src: undefined,
        alt: '',
        label: 'In evidenza 1',
        width: 1600,
        height: 900,
      } satisfies Photo,
    },
    {
      title: 'Programma o progetto in evidenza 2',
      href: '#',
      image: {
        src: undefined,
        alt: '',
        label: 'In evidenza 2',
        width: 1600,
        height: 900,
      } satisfies Photo,
    },
  ],
  appearancesTitle: 'Altre apparizioni nei media',
  appearances: [1, 2, 3, 4].map((n) => ({
    title: `Titolo dell'intervista o dell'articolo ${n}`,
    href: '#',
    image: {
      src: undefined,
      alt: '',
      label: `Media ${n}`,
      width: 1200,
      height: 675,
    } satisfies Photo,
  })),
  cta: { label: 'Tutte le apparizioni', href: '#' },
}

export const services = [
  {
    title: 'Educazione sessuale e affettiva',
    text: 'Incontri per scuole, aziende ed eventi su affettività, consenso e benessere sessuale.',
    href: '#contatti',
    image: {
      src: undefined,
      alt: '',
      label: 'Educazione sessuale',
      width: 1200,
      height: 1200,
    } satisfies Photo,
  },
  {
    title: 'Benessere di coppia',
    text: 'Consigli pratici per coltivare intimità, dialogo e complicità, a ogni età.',
    href: '#',
    image: {
      src: coupleImage,
      alt: 'Una coppia di anziani cammina sottobraccio in un cortile, sorridendosi',
      label: 'Benessere di coppia',
      width: 1200,
      height: 1200,
    } satisfies Photo,
  },
]

export const instagram = {
  title: 'Seguimi su Instagram',
  handle: '@nomecognome',
  href: '#',
  posts: [1, 2, 3, 4, 5, 6].map((n) => ({
    caption: `Didascalia del post ${n}`,
    image: {
      src: undefined,
      alt: '',
      label: `Instagram ${n}`,
      width: 1080,
      height: 1080,
    } satisfies Photo,
  })),
}

export const quote =
  'Parlare di sessualità senza imbarazzo è il primo passo per viverla con più serenità.'

export const footerColumns = [
  {
    title: 'Consulenze',
    links: [
      { label: 'Prenota un colloquio', href: '#contatti' },
      { label: 'Individuali e di coppia', href: '#chi-sono' },
    ],
  },
  {
    title: 'Collaborazioni',
    links: [
      { label: 'Media', href: '#media' },
      { label: 'Educazione sessuale', href: '#servizi' },
    ],
  },
  {
    title: 'Contenuti',
    links: [
      { label: 'Apparizioni nei media', href: '#media' },
      { label: 'Benessere di coppia', href: '#servizi' },
    ],
  },
  {
    title: 'Chi sono',
    links: [
      { label: 'Biografia', href: '#chi-sono' },
      { label: 'Lo studio', href: '#' },
    ],
  },
]
