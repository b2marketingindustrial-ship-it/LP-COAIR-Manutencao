/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * COAIR: 4 etapas montadas a partir do material e dos anúncios (briefing de
 * 08/10/2026). Sem prazo confirmado pelo cliente, `when` fica de fora.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

export const process = {
  eyebrow: 'Como funciona',
  title: 'Do diagnóstico à manutenção em campo',
  /** Trecho do título destacado em verde (precisa existir dentro de `title`). */
  highlight: 'manutenção em campo',
  text: 'Um caminho definido do primeiro contato à execução, com o plano adaptado à operação de cada cliente.',
  microcopy: 'Equipe técnica interna',
  steps: [
    {
      id: 'solicitacao',
      icon: 'chat',
      title: 'Solicitação',
      description: 'Você descreve o compressor e a operação e pede a avaliação técnica.',
    },
    {
      id: 'diagnostico',
      icon: 'search',
      title: 'Diagnóstico técnico',
      description: 'A equipe técnica avalia o equipamento e o sistema de ar comprimido.',
    },
    {
      id: 'plano',
      icon: 'clipboard-check',
      title: 'Plano sob medida',
      description: 'O plano considera modal de operação, intensidade de uso e regime de trabalho.',
    },
    {
      id: 'execucao',
      icon: 'wrench',
      title: 'Manutenção em campo',
      description: 'Execução da manutenção corretiva, preventiva ou preditiva no local.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  microcopy: string
  steps: readonly ProcessStep[]
}
