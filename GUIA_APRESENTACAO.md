# Guia de apresentação — Semana Acadêmica de Tecnologia

## Visão geral

O projeto é uma landing page estática para apresentar a Semana Acadêmica de Tecnologia 2026. Foi implementado com HTML semântico, CSS e JavaScript nativos, sem frameworks ou dependências de build. A referência visual é o [protótipo no Figma](https://www.figma.com/design/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041).

## Como executar e demonstrar

Abra `index.html` em um navegador. Para demonstrar em sala, percorra as seções Início, Sobre, Programação, Palestrantes e Contato; reduza a largura da janela para mostrar o menu mobile; alterne os dias da agenda com mouse e teclado; e use “Baixar programação” para gerar o arquivo de texto.

O botão de inscrição apresenta um aviso explicando que o link oficial ainda não foi fornecido. A localização, os palestrantes, o contato e a programação de 24 a 27 de novembro também estão marcados como pendentes no conteúdo.

## Como os arquivos se relacionam

- `index.html` contém o conteúdo, a hierarquia das seções e os controles acessíveis.
- `style.css` define cores, tipografia, espaçamento, cartões e os layouts responsivos.
- `script.js` ativa o menu mobile, o diálogo informativo, as abas de programação e o download em texto.
- `assets/laboratorio-ilustrativo.webp` é a imagem provisória da seção Sobre, identificada como ilustrativa na página.
- `README.md` explica o projeto e suas pendências; `PROMPTS.md` registra instruções usadas com IA.

## HTML

O documento usa `header`, `nav`, `main`, `section` e `footer` para separar áreas. Os títulos descrevem cada seção e `aria-labelledby` associa a seção ao título. A agenda usa listas ordenadas para as atividades, elementos `time` para horários e datas, botões para as abas e um elemento `dialog` para avisos. Links permitem chegar às seções por âncora.

## CSS e responsividade

As variáveis no começo de `style.css` centralizam cores e valores recorrentes. Grid e Flexbox organizam as seções; gradientes e formas CSS desenham a composição decorativa do hero. Media queries em 900px e 680px reorganizam cabeçalho, cartões, agenda e rodapé para telas menores. `:hover` e `:focus-visible` fornecem estados de interação.

## JavaScript

- `setMenu(open)` atualiza o menu mobile e seus atributos `aria-expanded` e `aria-label`.
- `selectDay(index)` seleciona uma aba e mostra o painel correspondente. As setas, Home e End movem o foco pelas abas.
- `getScheduleText()` lê a agenda já existente no HTML e compõe seu texto de exportação.
- O botão de download cria um arquivo `.txt` com `Blob` e libera a URL temporária depois do download.
- Os links marcados com `data-message` abrem o diálogo para informar destinos ainda não fornecidos.

## Decisões e limites conhecidos

HTML, CSS e JavaScript puros mantêm o trabalho próximo das tecnologias da disciplina e fácil de explicar. Os cinco dias existem na interface, mas só há quatro atividades disponíveis no material consultado para 23 de novembro; os demais dias mostram placeholders. Os nomes, cargos e fotos dos quatro palestrantes, nome do campus, contato e URL de inscrição precisam ser confirmados pelos responsáveis pelo evento. A imagem de estudantes é provisória. O link do Figma abre o canvas, mas o inspetor de camadas e medidas não ficou acessível nesta sessão, então não se afirma correspondência pixel a pixel.

## Perguntas que podem aparecer

**Por que não foi usado React?**  
O escopo é uma página estática e a disciplina trabalha HTML, CSS, JavaScript e Git; não há necessidade demonstrada de adicionar um framework.

**Como a página se adapta a celular?**  
As media queries reorganizam os layouts em pontos de quebra. O JavaScript controla o menu recolhível quando a tela está no breakpoint mobile.

**Como a programação muda sem recarregar a página?**  
`selectDay` alterna o atributo `hidden` dos painéis e atualiza os estados acessíveis dos botões.

**Por que há campos “a confirmar”?**  
Para evitar apresentar como oficiais dados que não vieram do protótipo ou da organização do evento.

**Como a programação é baixada?**  
`getScheduleText` lê títulos, horários, categorias e dados de cada atividade do HTML; o evento do botão empacota o texto em um `Blob` e inicia o download.

## Informações a completar antes da entrega final

- Substituir `[Nome completo a informar]` no README pelo(s) nome(s) real(is) da equipe.
- Confirmar com a organização os dados do evento marcados como pendentes e atualizar a página.
- Comparar dimensões, cores e tipografia com o inspetor do Figma ou com as capturas originais desktop/mobile quando estiverem disponíveis.
- Conferir o repositório público e o link que será enviado ao professor.
