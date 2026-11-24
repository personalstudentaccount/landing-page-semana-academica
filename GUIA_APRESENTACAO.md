# Guia de apresentação — Semana Acadêmica de Tecnologia

## Visão geral

A página apresenta a Semana Acadêmica de Tecnologia da FEPI • Centro Universitário de Itajubá, de 23 a 27 de novembro de 2026. O projeto usa HTML semântico, CSS e JavaScript nativos.

## Demonstração

Percorra as seções Início, Sobre, Programação, Palestrantes e Contato. Reduza a janela para demonstrar o menu mobile. Na programação, alterne os cinco dias com os botões e com as setas do teclado; depois use “Baixar programação”. Na área de inscrição, abra o formulário e demonstre a confirmação.

## Arquivos

- `index.html`: seções da página, conteúdo, programação e formulário.
- `style.css`: paleta, tipografia, layout em Grid/Flexbox, breakpoints e estados de foco/hover.
- `script.js`: menu responsivo, formulário, abas acessíveis e exportação da agenda.
- `assets/`: imagem da seção Sobre e retratos vetoriais dos quatro palestrantes.

## Interações em JavaScript

- `setMenu(open)` abre ou fecha a navegação mobile e atualiza atributos ARIA.
- `selectDay(index)` seleciona uma aba, atualiza o estado dos botões e exibe o painel do dia.
- As teclas ←, →, Home e End navegam pelas abas.
- `getScheduleText()` reúne títulos, horários, categorias, responsáveis e locais para montar o arquivo `.txt`.
- O formulário de inscrição valida nome e e-mail e exibe a confirmação na própria página.

## Decisões técnicas

HTML, CSS e JavaScript puros mantêm o projeto próximo das tecnologias da disciplina. Grid e Flexbox organizam o conteúdo; media queries em 900px e 680px reorganizam o layout em telas menores. As atividades estão marcadas com `time`, a programação usa listas ordenadas, e os controles possuem rótulos e estados acessíveis.

## Perguntas possíveis

**Por que a programação não recarrega a página?**
`selectDay` altera o atributo `hidden` dos painéis e os atributos ARIA das abas diretamente no documento.

**Como a agenda é exportada?**
`getScheduleText()` lê as atividades do HTML; o botão cria um `Blob` de texto e inicia o download.

**Como funciona a inscrição?**
O diálogo apresenta campos obrigatórios de nome e e-mail. O JavaScript valida o formulário no navegador e mostra uma confirmação visual.

**Como a página se adapta ao celular?**
As media queries reorganizam cabeçalho, hero, cartões, agenda e rodapé; o JavaScript controla o menu recolhível.
