/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * COAIR: em vez de aplicações, a seção mostra 4 compressores de marcas que a COAIR
 * mantém (atendimento multimarcas, sem vínculo com os fabricantes). Fotos enviadas
 * pelo cliente, centralizadas em fundo branco 4:3. O card inteiro é o CTA.
 */
import type { Photo } from '@data/types'
import type { IconName } from '@data/icons'
import { site } from '@data/site'

import coair from '@assets/aplicacoes/coair-hd75.jpg'
import ingersollRand from '@assets/aplicacoes/ingersoll-rand-rs160.jpg'
import atlasCopco from '@assets/aplicacoes/atlas-copco-ga.jpg'
import kaeser from '@assets/aplicacoes/kaeser-asd30.jpg'

export interface Application {
  id: string
  label: string
  description: string
  icon: IconName
  photo: Photo
}

export const applications = {
  eyebrow: 'Marcas atendidas',
  title: 'Manutenção multimarcas para compressores de parafuso',
  text: 'Também atendemos Schulz, Chicago\u00A0Pneumatic e outras marcas de compressores de parafuso.',
  items: [
    {
      id: 'atlas-copco',
      label: 'Atlas Copco',
      description: 'Manutenção preventiva e corretiva em compressores Atlas\u00A0Copco.',
      icon: 'cog',
      photo: { src: atlasCopco, alt: 'Compressor de parafuso Atlas Copco da linha GA' },
    },
    {
      id: 'ingersoll-rand',
      label: 'Ingersoll Rand',
      description: 'Manutenção preventiva e corretiva em compressores Ingersoll\u00A0Rand.',
      icon: 'cog',
      photo: { src: ingersollRand, alt: 'Compressor de parafuso Ingersoll Rand RS160ie' },
    },
    {
      id: 'kaeser',
      label: 'Kaeser',
      description: 'Manutenção preventiva e corretiva em compressores Kaeser.',
      icon: 'cog',
      photo: { src: kaeser, alt: 'Compressor de parafuso Kaeser ASD 30' },
    },
    {
      id: 'coair',
      label: site.brandShort,
      description: 'Manutenção da linha Heavy\u00A0Duty de compressores de parafuso.',
      icon: 'badge-check',
      photo: { src: coair, alt: `Compressor de parafuso ${site.brandShort} HD75 VSD Heavy Duty` },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
