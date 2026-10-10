/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * COAIR — Manutenção de compressores industriais (briefing de 08/10/2026).
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.jpg'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Solicite um diagnóstico',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Manutenção multimarcas',
  title: 'Manutenção de compressor de ar industrial com diagnóstico técnico e equipe interna.',
  /** Trecho do título destacado em verde (precisa existir dentro de `title`). */
  highlight: 'diagnóstico técnico',
  text: 'Preventiva, corretiva e preditiva para compressores de parafuso Atlas Copco, Ingersoll Rand, Kaeser, Schulz, Chicago Pneumatic e outras marcas. Atendimento B2B em até 100 km de Indaiatuba e de São Paulo.',
  /** Rótulos dos botões do hero (o vocabulário `cta` continua valendo no resto da página). */
  ctaPrimary: 'Solicite uma avaliação técnica',
  ctaSecondary: 'Fale com um especialista',
  banner: {
    src: heroBg,
    alt: `Técnico da ${site.brandShort} ao lado de compressores de parafuso de várias marcas`,
  },
  points: [
    { icon: 'cog', line1: 'Manutenção', line2: 'multimarcas' },
    { icon: 'users', line1: 'Equipe técnica e', line2: 'laboratório internos' },
    { icon: 'wrench', line1: 'Preventiva, corretiva', line2: 'e preditiva' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  ctaPrimary: string
  ctaSecondary: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: `Fale com a ${site.brandShort} e solicite uma avaliação técnica do seu compressor.`,
  text: 'Informe a marca do compressor, o modal de operação, a intensidade de uso e o regime de trabalho: nossa equipe técnica avalia e indica o plano de manutenção. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** O `\n` marca a quebra de linha de cada destaque. */
  trust: [
    { icon: 'factory', label: 'Atendimento B2B\nindustrial' },
    { icon: 'wrench', label: 'Resposta técnica\nem campo' },
    { icon: 'map-pin', label: '100 km de Indaiatuba\ne São Paulo' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  /** Frase da marca ao lado da logo. */
  tagline: 'Manutenção, peças e suporte técnico para a máxima performance do seu ar comprimido',
  contactLabel: 'Atendimento',
  quoteLabel: 'Solicite sua cotação',
  quoteButton: 'Solicitar cotação',
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
