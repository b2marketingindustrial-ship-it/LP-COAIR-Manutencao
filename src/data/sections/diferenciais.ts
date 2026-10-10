/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e o cenário, e 5 cards
 * sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). */
  titleLines: ['Evite paradas', 'de produção.'],
  text: `Manutenção multimarcas com equipe técnica e laboratório internos, planos adaptados à sua operação e peças integradas ao serviço. A ${site.brandShort} cuida da continuidade do seu ar comprimido.`,
  scene: {
    src: cenario,
    alt: 'Sala de compressores industriais com reservatórios azuis e tubulações',
  },
  reasons: [
    {
      icon: 'layers',
      title: 'Atendimento multimarcas',
      description: 'Manutenção em Atlas Copco, Ingersoll Rand, Kaeser, Schulz e outras.',
    },
    {
      icon: 'users',
      title: 'Equipe técnica interna',
      description: 'Técnicos próprios no diagnóstico e na manutenção em campo.',
    },
    {
      icon: 'gauge',
      title: 'Laboratório interno',
      description: 'Laboratório próprio de apoio ao diagnóstico técnico.',
    },
    {
      icon: 'sliders',
      title: 'Planos sob medida',
      description: 'Plano adaptado ao modal de operação, uso e regime de trabalho.',
    },
    {
      icon: 'cog',
      title: 'Peças e serviço integrados',
      description: 'Linha HPP® de componentes para manutenção multimarca.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
