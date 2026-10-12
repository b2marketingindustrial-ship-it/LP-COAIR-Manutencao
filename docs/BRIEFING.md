# Briefing da LP — registro da entrevista

> Status: `pendente` · `confirmado` · `default` · `pendência` · `extraído` / `inferido` / `conflito`

## Origem: documento do cliente

| Campo                          | Valor                                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Arquivo recebido               | `briefing-coair-manutencao.md` (organizador v2.7.1, 08/10/2026), colado no chat em 09/10/2026                                                 |
| Tipo                           | A (organizado no vocabulário do padrão)                                                                                                       |
| Base do projeto                | cópia da LP COAIR Peças (visual COAIR verde já aprovado); conteúdo, composição e assets trocados para Manutenção                              |
| Instrução do usuário           | "faça essa lp como no briefing" — decisões `inferido` do briefing aplicadas como opção 1, sem entrevista item a item                          |
| Dados não aplicados por padrão | telefone (19) 99354-4919 (só no botão de WhatsApp); dados de mídia (lance, orçamento R$ 30/dia, 7h–19h, públicos); CTAs literais dos anúncios |

## Campanha

| Campo                   | Valor                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Foco desta LP           | "SEARCH \| COAIR \| SERVIÇOS \| SP" — grupos Manutenção de Compressores e Manutenção Atlas Copco                                                |
| Fora desta execução     | campanhas Peças (LP própria) e Compressores                                                                                                     |
| Palavra-chave principal | `extraído` — manutenção compressor de ar industrial (no H1 e no title)                                                                          |
| Área atendida           | `pendência` — raio de 100 km de Indaiatuba/SP e de São Paulo/SP, no texto do hero e no 3º selo. O cliente ainda não confirmou campo nesse raio  |
| Negativas de oferta     | `extraído` — lista completa em `campaign.negatives` (site.ts)                                                                                   |
| Negativas de intenção   | emprego/vagas, curso/tcc, como fazer/caseiro, marketplaces, significado/wiki/foto (só registro)                                                 |
| Claims proibidos        | `extraído` — autorizado/a, assistência autorizada, autorização da marca, representante/ção, revenda/dor/dora, distribuidor/a/ção, até 42%, +42% |

### Comitê de compra

| Papel                             | Argumento                                     | Bloco que responde                                                  | Status                    |
| --------------------------------- | --------------------------------------------- | ------------------------------------------------------------------- | ------------------------- |
| Engenharia / Manutenção / Compras | ausente no briefing                           | —                                                                   | lacuna (pedir ao cliente) |
| Diretoria                         | eficiência, continuidade, melhor uso do CAPEX | `diferenciais` ("Evite paradas de produção") + `linhas` (vida útil) | coberto                   |

### Conteúdo futuro (fora da página)

| Grupo                              | O que oferece                         | Por que está pausado                              |
| ---------------------------------- | ------------------------------------- | ------------------------------------------------- |
| Rebuild / Unidade Compressora      | reconstrução de unidade compressora   | não informado; percentual 30–50% sem fonte        |
| Locação de Compressores (AIR PLAN) | emergência, backup, parada programada | validação operacional antes da mídia (LP própria) |

## Composição

Aplicada em: `09/10/2026` · comando: `npm run compose -- --library ../../LP-STARTER-B2/sections linhas processo aplicacoes diferenciais`

| Fase       | Seção          | Fundo     | Respiro     | Por que entrou                                                                                                    |
| ---------- | -------------- | --------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| oferta     | `linhas`       | branco    | pt-20 pb-10 | 4 serviços (preventiva, corretiva, preditiva, auditoria); "LP de serviço: os cards viram serviços"                |
| apoio      | `processo`     | branco    | pt-6 pb-16  | 4 etapas montadas no briefing; responde "conserto" e "contrato"; serviço → processo, não identificar              |
| prova      | `aplicacoes`   | cinza-100 | pt-4 pb-20  | 4 marcas mantidas com foto real (Atlas Copco, Ingersoll Rand, Kaeser, COAIR); responde as palavras-chave de marca |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | 5 diferenciais do briefing + frase "Evite paradas de produção"                                                    |

Desvio registrado: os componentes `ProductLines`, `ProcessSteps`, `ApplicationsGallery` e `WhyBrand` seguem o visual COAIR (verde) herdado da LP de Peças, e não a cópia da biblioteca. `ProductLines` não usa o carrossel de marcas (sem logos autorizadas) e mostra as fotos como cena (cover). Um `compose` novo sobrescreve esses arquivos — copie-os antes.

### Seções descartadas

| Seção            | Motivo                                                |
| ---------------- | ----------------------------------------------------- |
| `vitrine`        | 4 serviços; pede 6–24                                 |
| `especificacoes` | serviço não se distingue por medida                   |
| `identificar`    | só 4 de 6 dados; `processo` já é o navy do apoio      |
| `situacoes`      | nenhum gatilho listado pelo comercial                 |
| `segmentos`      | nenhum setor citado                                   |
| `clientes`       | sem logos autorizadas nem números com fonte           |
| `perguntas`      | sem lista real de perguntas (pedir 4–8 ao comercial)  |
| `escopo`         | argumentos são qualidades; `diferenciais` já é o navy |

## Entradas do núcleo

| #   | Entrada                 | Status    | Valor                                                                                                    |
| --- | ----------------------- | --------- | -------------------------------------------------------------------------------------------------------- |
| 1   | MARCA                   | extraído  | COAIR Compressores de Ar                                                                                 |
| 2   | MARCA_CURTA             | extraído  | COAIR                                                                                                    |
| 3   | PRODUTO_PRINCIPAL       | inferido  | Manutenção de compressores de ar industriais                                                             |
| 4   | CONTEXTO_DE_USO         | inferido  | evitar paradas (title: "… para evitar paradas \| COAIR")                                                 |
| 5   | PUBLICO                 | extraído  | Engenharia, Manutenção/Utilidades, Compras/Suprimentos, Diretoria                                        |
| 6   | HERO                    | inferido  | Manutenção / multimarcas · Equipe técnica e / laboratório internos · Preventiva, corretiva / e preditiva |
| 7   | MARCAS_ATENDIDAS        | inferido  | Atlas Copco, Ingersoll Rand, Kaeser, Schulz, Chicago Pneumatic — só o nome, sem logos                    |
| 8   | SELOS_DE_CONFIANCA      | inferido  | Atendimento B2B industrial · Resposta técnica em campo · 100 km de Indaiatuba e São Paulo                |
| 9   | ENDERECO                | extraído  | Alameda Mercúrio, 164 - American Park Empresarial Nr, Indaiatuba - SP, 13347-662                         |
| 10  | URL_FINAL + PRIVACIDADE | pendência | provisório https://www.coair.com.br/manutencao/industrial (caminho dos anúncios); sem política           |
| 11  | SHORTCODES              | default   | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                               |
| 12  | WHATSAPP                | pendência | 5519993544919 (mantido da LP de Peças; confirmar)                                                        |
| 13  | STACK + PUBLICACAO      | default   | Astro + Tailwind 4 · main → wp-build                                                                     |
| 14  | TOKENS_DE_COR + FONTE   | default   | visual COAIR da LP de Peças (navy + verde da logo, Manrope)                                              |
| 15  | CAMPANHA                | extraído  | manutenção compressor de ar industrial                                                                   |

## Copy da estrutura fixa

| Campo       | Valor                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| H1          | Manutenção de compressor de ar industrial com diagnóstico técnico e equipe interna.                                                                          |
| Botões hero | "Solicite uma avaliação técnica" (coerente com o anúncio) · "Fale com um especialista"                                                                       |
| Cotação     | "Fale com a COAIR e solicite uma avaliação técnica do seu compressor." + dados do plano (modal, uso, regime)                                                 |
| Meta        | Manutenção preventiva, corretiva e preditiva de compressores de ar industriais Atlas Copco, Ingersoll Rand, Kaeser e outras marcas, com diagnóstico técnico. |

## Assets

| Asset                    | Arquivo                               | Status    | Observação                                                                                                                                       |
| ------------------------ | ------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Logo                     | `src/assets/LOGO.png`                 | ok        | da LP de Peças                                                                                                                                   |
| Banner do hero           | `src/assets/heroBg.jpg`               | pendência | provisório: técnico COAIR com compressores multimarca (cenário da LP de Peças), 1600×900. O briefing cita "técnico de capacete apertando flange" |
| Fotos dos 4 serviços     | `src/assets/linhas/linha-*.png`       | pendência | provisórias: cenas da LP de Locação. Pedir 1200×900 de cada serviço                                                                              |
| Marcas atendidas         | `src/assets/aplicacoes/*.jpg`         | ok        | fotos da LP de Peças                                                                                                                             |
| Cenário dos diferenciais | `src/assets/diferenciais/cenario.jpg` | pendência | provisório: sala de compressores da LP de Locação                                                                                                |

## Pendências para o cliente

1. Confirmar atendimento em campo no raio de 100 km de Indaiatuba e de São Paulo (hero e selo).
2. Validar as 4 etapas e o texto do laboratório interno; prazos, se houver.
3. Fotos reais dos serviços e do hero; URL final, política de privacidade e WhatsApp.
4. Argumentos de Engenharia, Manutenção e Compras; 4–8 perguntas reais (para `perguntas`).

## Ajustes do cliente — 10/10/2026

Recebidos por WhatsApp (referências em docs/briefing-cliente/ajustes-2026-10-10/, fora do git). Decisões do usuário em 12/10/2026.

| Pedido                           | O que foi feito                                                                                                                                           | Desvio do padrão                                                                                                                                                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero: título, subtítulo e imagem | H1 "Sua indústria precisa de manutenção especializada em compressores de parafuso?", subtítulo com as 5 marcas, banner da sala de compressores multimarca | **exceção aprovada:** o H1 não contém a palavra-chave (faltam "ar" e "industrial"); o check:lp falha nesse ponto e o CI do GitHub (wp-build) não publica até isso mudar. O title da aba segue com a palavra-chave |
| Novo módulo depois dos serviços  | seção `situacoes` ("Problemas atendidos em compressores industriais multimarcas"), 6 cards com o texto exato do cliente                                   | texto exato aprovado: a introdução e 4 descrições passam dos limites (170/90 caracteres) — só aviso no check                                                                                                      |
| Mais uma coluna nos serviços     | card "Reconstrução de unidades" (Rebuild), grid de 5 no desktop; descrição resumida para 90 caracteres a partir do texto do cliente                       | **aprovado:** 5 cards (biblioteca aceita 4); itemsMax ajustado no lp.manifest.json. Rebuild deixa de ser conteúdo futuro por pedido do cliente. Foto 450×301, pedir versão maior                                  |
| Diferenciais: imagem e título    | "Conte com uma equipe técnica / especializada em sistemas de ar comprimido" e foto do técnico COAIR                                                       | frase com 11 palavras (regra: 3–6)                                                                                                                                                                                |
| Cotação: tirar o selo de área    | selo "100 km de Indaiatuba e São Paulo" removido; ficam 2 selos                                                                                           | padrão pede 3 selos; a área atendida deixa de aparecer na página (o anúncio insere a cidade)                                                                                                                      |

Composição nova: `npm run compose -- linhas situacoes processo aplicacoes diferenciais`. Os componentes no visual COAIR foram restaurados depois do compose; SituationCards foi redesenhado pela referência do cliente.

## Aprovação

- [ ] Composição e copy aprovadas pelo usuário (construído direto do briefing em 09/10/2026, a pedido)
- [x] Padrão B2 versão: `2.7.1`
