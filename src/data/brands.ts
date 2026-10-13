/**
 * Logos do carrossel de marcas — primitivo opcional, declarado pela seção `linhas`.
 *
 * COAIR (13/10/2026): logos enviados pelo usuário, das marcas que a COAIR atende. Cada
 * arquivo em `src/assets/brands/` vem recortado no tamanho do logo, sem margem, todos com
 * a mesma área (para nenhum pesar mais que os outros) e em 2x da exibição: o carrossel
 * mostra cada um com metade da largura do arquivo.
 *
 * Com menos de 4 logos o carrossel não renderiza. A lista é anotada com `readonly
 * Brand[]`, e não `as const`, para aceitar a lista vazia.
 */
import type { ImageMetadata } from 'astro'

import atlasCopco from '@assets/brands/atlas-copco.webp'
import ingersollRand from '@assets/brands/ingersoll-rand.webp'
import kaeser from '@assets/brands/kaeser.webp'
import schulz from '@assets/brands/schulz.webp'
import coair from '@assets/brands/coair.webp'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = [
  { name: 'Atlas Copco', src: atlasCopco },
  { name: 'Ingersoll Rand', src: ingersollRand },
  { name: 'Kaeser', src: kaeser },
  { name: 'Schulz', src: schulz },
  { name: 'COAIR', src: coair },
]
