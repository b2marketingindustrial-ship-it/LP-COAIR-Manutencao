/**
 * Dados da seção "Situações" (biblioteca B2, fase: apoio).
 *
 * COAIR: "Problemas atendidos", módulo pedido pelo cliente em 10/10/2026, com o texto
 * exato da referência enviada. A introdução e 4 descrições passam dos limites da
 * seção (170 e 90 caracteres) por decisão registrada no BRIEFING.md.
 */
import type { IconName } from '@data/icons'

export interface Situation {
  id: string
  icon: IconName
  /** O momento, na palavra de quem vive o problema. 1–3 palavras. */
  title: string
  /** O que a empresa faz nesse momento. 1 frase, até 90 caracteres. */
  outcome: string
}

export const situations = {
  eyebrow: 'Diagnóstico técnico',
  /** `\n` = quebra de linha no desktop (pedido de 13/10/2026). */
  title: 'Problemas atendidos em compressores\nindustriais multimarcas',
  text: 'Atendemos diferentes marcas e modelos de compressores industriais, considerando o tipo de equipamento,\no regime de uso, os sintomas apresentados e a criticidade do processo produtivo.',
  items: [
    {
      id: 'queda-pressao',
      icon: 'check',
      title: 'Queda de pressão',
      outcome:
        'Perda de rendimento, oscilação na linha e dificuldade para manter a pressão adequada na produção.',
    },
    {
      id: 'vazamentos',
      icon: 'check',
      title: 'Vazamentos',
      outcome:
        'Identificação de perdas que podem aumentar o consumo de energia e reduzir a eficiência.',
    },
    {
      id: 'superaquecimento',
      icon: 'check',
      title: 'Superaquecimento',
      outcome:
        'Avaliação de temperatura, ventilação, refrigeração e condições que podem comprometer o compressor.',
    },
    {
      id: 'falhas-eletricas',
      icon: 'check',
      title: 'Falhas elétricas',
      outcome:
        'Checagem de sensores, proteções e demais peças ligadas ao funcionamento do equipamento.',
    },
    {
      id: 'troca-pecas',
      icon: 'check',
      title: 'Troca de peças',
      outcome:
        'Reposição de componentes conforme a necessidade técnica do compressor e a condição de operação.',
    },
    {
      id: 'paradas-inesperadas',
      icon: 'check',
      title: 'Paradas inesperadas',
      outcome:
        'Suporte para diagnóstico e correção de falhas que interrompem ou colocam em risco a produção.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly Situation[]
}
