# site-gaia

Setup di base per un sito vetrina: React + TypeScript (strict) + Vite, con Tailwind CSS,
Motion, Lucide React, ESLint, Prettier e Vitest + React Testing Library.

## Requisiti

- Node.js `^22.22.2 || ^24.15.0 || >=26` (vedi `.nvmrc`)
- npm

## Script

| Comando                | Descrizione                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Server di sviluppo Vite                     |
| `npm run build`        | Type check + build di produzione in `dist/` |
| `npm run preview`      | Anteprima locale della build                |
| `npm run lint`         | ESLint                                      |
| `npm run format`       | Formatta i file con Prettier                |
| `npm run format:check` | Verifica la formattazione                   |
| `npm run typecheck`    | Controllo TypeScript                        |
| `npm test`             | Vitest in modalità watch                    |
| `npm run test:run`     | Vitest, esecuzione singola                  |

## Struttura

```
src/
  App.tsx          componente radice
  main.tsx         entry point
  styles/          CSS globale (import di Tailwind)
  test/            setup di Vitest / Testing Library
```

Le cartelle `assets/`, `components/`, `sections/`, `layouts/`, `hooks/`, `lib/`, `types/` e
`utils/` vanno create sotto `src/` quando servono. Importa con l'alias `@/` (es. `@/components/Button`).

I test vanno affiancati al codice con suffisso `.test.ts(x)` o `.spec.ts(x)`.

## Variabili d'ambiente

Copia `.env.example` in `.env.local`. Solo le variabili con prefisso `VITE_` arrivano al client:
non inserirvi segreti.

## Deploy (Netlify / Vercel)

Build standard, rilevata automaticamente da entrambe le piattaforme:

- Build command: `npm run build`
- Output directory: `dist`
- Versione Node: da `.nvmrc` / `engines` in `package.json`
