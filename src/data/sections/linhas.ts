/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * COAIR — LP de serviço: os cards são os serviços de manutenção (os três planos e a
 * auditoria técnica), mais a reconstrução de unidades pedida pelo cliente em 10/10/2026.
 * São 5 cards, um a mais que o limite da biblioteca (desvio registrado no BRIEFING.md).
 * O card escuro é a auditoria, que olha o sistema inteiro.
 * Fotos provisórias, vindas das cenas da LP de locação; troque pelas fotos reais
 * de cada serviço (1200×900) quando chegarem.
 */
import type { Photo } from '@data/types'

import preventiva from '@assets/linhas/linha-preventiva.png'
import corretiva from '@assets/linhas/linha-corretiva.png'
import preditiva from '@assets/linhas/linha-preditiva.png'
import reconstrucao from '@assets/linhas/linha-reconstrucao.jpg'
import auditoria from '@assets/linhas/linha-auditoria.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Manutenção industrial',
  title: 'Planos de manutenção para compressores',
  text: 'Preventiva e corretiva para reduzir riscos de parada e aumentar a confiabilidade, com o plano adaptado à sua operação.',
  items: [
    {
      id: 'preventiva',
      tag: 'Preventiva',
      title: 'Manutenção preventiva',
      description: 'Intervenções programadas para prevenir falhas e aumentar a vida útil.',
      photo: { src: preventiva, alt: 'Compressor de ar de parafuso em planta industrial' },
      features: ['Prevenção de falhas', 'Maior vida útil', 'Plano sob medida'],
      dark: false,
    },
    {
      id: 'corretiva',
      tag: 'Corretiva',
      title: 'Manutenção corretiva',
      description: 'Diagnóstico e reparo do compressor de parafuso com falha ou parado.',
      photo: { src: corretiva, alt: 'Unidade compressora de parafuso aberta para reparo' },
      features: ['Diagnóstico técnico', 'Conserto multimarcas', 'Equipe técnica interna'],
      dark: false,
    },
    {
      id: 'preditiva',
      tag: 'Preditiva',
      title: 'Manutenção preditiva',
      description: 'Acompanhamento do equipamento para identificar sinais de falha antes da parada.',
      photo: { src: preditiva, alt: 'Painel de controle de compressor de ar industrial' },
      features: ['Identificação de sinais de falha', 'Desempenho otimizado', 'Laboratório interno'],
      dark: false,
    },
    {
      id: 'reconstrucao',
      tag: 'Rebuild',
      title: 'Reconstrução de unidades',
      description: 'Recuperação de unidades compressoras, com análise dos componentes internos.',
      photo: {
        src: reconstrucao,
        alt: 'Técnico ajustando os rotores de uma unidade compressora de parafuso aberta',
      },
      features: ['Análise dos componentes', 'Substituição de peças', 'Conforme o equipamento'],
      dark: false,
    },
    {
      id: 'auditoria',
      tag: 'Auditoria',
      title: 'Auditoria técnica',
      description: 'Avaliação técnica do sistema de ar comprimido, em todo o Brasil.',
      photo: {
        src: auditoria,
        alt: 'Sala de compressores com reservatórios e tubulação de ar comprimido',
      },
      features: ['Sistema completo', 'Diagnóstico técnico', 'Atendimento nacional'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine, ProductLine]
}
