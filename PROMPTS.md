# Prompts utilizados com Codex

## 1. Pedido mestre


# CONTEXTO MESTRE - PROJETO ACADÊMICO DE PROGRAMAÇÃO FRONT-END

Você é um engenheiro de software responsável por analisar, organizar, desenvolver e preparar a entrega de duas atividades acadêmicas da disciplina de Programação Front-end do curso de Análise e Desenvolvimento de Sistemas.

Não comece escrevendo código imediatamente. Primeiro compreenda o contexto, investigue os repositórios, identifique o estado atual dos projetos e determine o que realmente precisa ser feito.

Seu objetivo é **executar as atividades até que estejam tecnicamente prontas para entrega**, além de preparar documentação que permita ao aluno compreender e apresentar o trabalho.

## 1. Contexto acadêmico

### Landing Page da Semana Acadêmica de Tecnologia

O objetivo é desenvolver uma landing page baseada em um protótipo criado no Figma.
O protótipo possui versões desktop e mobile. As imagens de referência serão fornecidas a você.

**Critérios de avaliação:**

- Apresentação: 10 pontos.
- Capacidade de explicar o código: 10 pontos.
- Qualidade da página desenvolvida: 5 pontos.
- Total: 25 pontos.

**Exigências de entrega:**

- Link do repositório GitHub contendo o código desenvolvido.
- Identificação dos nomes dos integrantes da equipe.
- Caso seja utilizada inteligência artificial para programação, entregar um arquivo Markdown (`.md`) contendo os prompts utilizados.

## 2. Investigação obrigatória

Antes de modificar qualquer arquivo:

1. Inspecione o diretório de trabalho atual e determine quais projetos estão disponíveis localmente.
2. Analise os três repositórios informados, usando acesso Git/GitHub quando disponível.
3. Examine README, arquivos, pastas, branches, remotes e histórico de commits.
4. Compare o repositório `frontend` com o repositório do professor.
5. Identifique quais exercícios, estruturas e alterações estão presentes ou faltando.
6. Verifique se existe uma landing page já implementada em algum diretório ou branch.
7. Identifique possíveis alterações locais não commitadas.

Não trate a simples diferença na quantidade de commits como prova de exercício faltante. Compare conteúdo e histórico efetivos.

Não crie commits retroativos, não altere timestamps artificialmente e não fabrique histórico acadêmico.

Se os repositórios remotos estiverem inacessíveis, utilize os arquivos locais disponíveis e documente exatamente o que não pôde ser verificado.

## 3. Desenvolvimento da landing page

O protótipo foi desenvolvido no Figma e representa uma página institucional para uma Semana Acadêmica de Tecnologia.

Use as imagens anexadas como principal referência visual. Caso um link ou arquivo original do Figma seja disponibilizado, examine-o também.

### Estrutura identificada no protótipo

**Cabeçalho**
- Logo da Semana Acadêmica.
- Links de navegação.
- Botão de inscrição.
- Menu adaptado para dispositivos móveis.

**Hero**
- Título "Semana Acadêmica de Tecnologia".
- Informações sobre data e localização.
- Botões de participação e programação.
- Composição visual tecnológica com elementos geométricos e efeitos luminosos.

**Indicadores**
- 12+ palestras.
- 08 workshops.
- 500+ conexões de networking.

**Sobre o evento**
- Imagem ilustrativa.
- Descrição da Semana Acadêmica.
- Destaques sobre conteúdo e conexões profissionais.

**Programação**
- Cinco dias, de 23 a 27 de novembro de 2026.
- Navegação entre dias por abas.
- Cards de atividades contendo horários, títulos, descrições, responsáveis e categorias.

**Palestrantes**
- Cards com imagens, nomes, cargos e especialidades.
- Quatro palestrantes visíveis na referência.

**Inscrição**
- Banner com gradiente azul e roxo.
- Chamada para participar.
- Botão de inscrição.

**Rodapé**
- Identidade do evento.
- Navegação.
- Informações institucionais e contato.

Os detalhes visuais e textos devem ser conferidos diretamente nas imagens. Não invente dados como fatos oficiais. Quando alguma informação estiver ilegível ou indisponível, utilize um placeholder claramente identificado.

### Diretrizes tecnológicas

Dê preferência às tecnologias compatíveis com o conteúdo da disciplina:

- HTML5 semântico.
- CSS3.
- JavaScript.
- Git e GitHub.

Antes de escolher bibliotecas ou frameworks, investigue as tecnologias ensinadas pelo professor e utilizadas no repositório da disciplina.

Não introduza React, Next.js, TypeScript ou dependências complexas sem justificativa objetiva.

Priorize código organizado, legível e fácil de explicar em uma apresentação acadêmica.

### Fidelidade visual

Reproduza com alta fidelidade:

- Fundo azul-marinho escuro.
- Cores de destaque azul, ciano e roxo.
- Tipografia e hierarquia visual.
- Cards com bordas discretas.
- Ícones e elementos decorativos.
- Espaçamentos, alinhamentos e proporções.
- Gradientes e efeitos visuais.
- Layout desktop e mobile.

Use as referências reais do Figma como base para dimensões e cores. Valores aproximados obtidos anteriormente foram:

- Fundo principal: `#050B1C`
- Fundo de seções: `#081329`
- Cards: `#0B1833`
- Azul: `#2F7CFF`
- Ciano: `#2BD5E5`

Esses valores são indicativos e devem ser ajustados caso a inspeção visual revele diferenças.

Não utilize as capturas completas da página como imagem de fundo para simular o site. A interface precisa ser implementada com elementos reais de HTML e CSS.

### Funcionalidades

Implemente interações coerentes com o protótipo:

- Links de navegação funcionando.
- Rolagem para as seções correspondentes.
- Menu responsivo funcional.
- Alternância dos dias da programação.
- Estados de hover, foco e seleção.
- Botões com comportamento real ou indicação clara de destino ainda não disponível.

Evite elementos que aparentem funcionar, mas não executem nenhuma ação.

### Qualidade

O resultado precisa:

- Funcionar em desktop e mobile.
- Não apresentar rolagem horizontal indevida.
- Utilizar HTML semântico e acessibilidade básica.
- Manter estilos organizados e reutilizáveis.
- Não apresentar erros de JavaScript no navegador.
- Ser simples de executar e demonstrar.
- Aproximar-se visualmente do protótipo fornecido.

Quando possível, execute o projeto e valide a interface em diferentes larguras de tela. Se houver recursos de captura de tela ou testes visuais, compare o resultado com as referências.

## 4. Organização dos projetos

Não crie automaticamente um projeto duplicado caso já exista uma implementação apropriada.

Use uma estrutura simples e consistente com a tecnologia escolhida.

Na landing page, inclua:

**README.md**
- Nome do projeto.
- Descrição.
- Tecnologias utilizadas.
- Como executar.
- Funcionalidades desenvolvidas.
- Integrantes da equipe.
- Referência ao protótipo do Figma, se disponível.

**PROMPTS.md**
- Registro fiel dos prompts efetivamente utilizados na implementação.
- Inclua este prompt mestre.
- Inclua os prompts posteriores utilizados com o Codex.
- Preserve o conteúdo original dos prompts, sem inventar interações.
- Organize cronologicamente ou por sequência identificada.

**GUIA_APRESENTACAO.md**
- Visão geral do projeto.
- Explicação do HTML, CSS e JavaScript.
- Principais funções e componentes.
- Como demonstrar as funcionalidades.
- Decisões técnicas e dificuldades.
- Perguntas que o professor poderá fazer, com explicações fundamentadas no código real.

## 5. Preparação para avaliação

O projeto precisa permitir que o aluno explique:

- Como o HTML estrutura as seções.
- Como o CSS organiza o layout.
- Como a responsividade funciona.
- Como o JavaScript controla as interações.
- Como os arquivos se relacionam.
- Como o Git registra o desenvolvimento.
- Por que determinadas decisões técnicas foram tomadas.

Crie um guia de estudo e apresentação baseado exclusivamente na implementação final.

Não gere explicações genéricas que contradigam o código desenvolvido.

## 6. Estratégia de execução

Trabalhe em etapas verificáveis.

**Etapa 1 — Diagnóstico**

Investigue os repositórios, o ambiente local, os arquivos disponíveis e as referências visuais.

Entregue um diagnóstico contendo:

- O que já existe.
- O que está pronto.
- O que está incompleto.
- O que falta verificar.
- Os riscos acadêmicos e técnicos.
- A estratégia para cada atividade.

**Etapa 2 — Planejamento**

Estabeleça a arquitetura dos arquivos, as tarefas necessárias e a ordem de implementação.

Defina critérios objetivos de conclusão.

**Etapa 3 — GitHub**

Organize o repositório, implemente o que for efetivamente exigido e verificável e preserve o histórico legítimo.

**Etapa 4 — Landing Page**

Implemente a interface visual e suas funcionalidades com base no Figma.

**Etapa 5 — Validação**

Execute os testes disponíveis, revise responsividade, navegação, funcionamento e organização.

**Etapa 6 — Documentação e preparação**

Prepare README, histórico de prompts, guia de apresentação e informações para entrega.

## 7. Regras de autonomia

Você possui autonomia para analisar arquivos, criar código, editar projetos, executar comandos locais e corrigir problemas identificados.

Entretanto:

- Não apague projetos existentes sem autorização.
- Não force push nem reescreva histórico Git.
- Não publique repositórios sem confirmar o destino correto.
- Não altere credenciais ou configurações sensíveis.
- Não invente dados acadêmicos ou resultados de testes.
- Não afirme ter concluído etapas que não foram verificadas.
- Não esconda limitações do ambiente.

Não interrompa o desenvolvimento com perguntas sobre detalhes que possam ser resolvidos usando as referências ou convenções existentes.

Solicite informações apenas quando forem realmente necessárias, como nomes dos integrantes, links privados inacessíveis ou decisões que possam causar perda de dados.

## 8. Resultado esperado

Ao final, desejo obter:

1. Repositório dos laboratórios revisado e organizado.
2. Landing page implementada, responsiva e funcional.
3. Estrutura de arquivos compreensível.
4. Documentação de uso de inteligência artificial.
5. README com campos para os integrantes.
6. Guia para apresentação ao professor.
7. Lista objetiva dos critérios atendidos, pendências e possíveis problemas.
8. Comandos Git necessários para publicar as entregas, caso a publicação ainda não tenha sido realizada.

**INSTRUÇÃO FINAL**

Comece agora pelo diagnóstico do ambiente.

Apresente as principais descobertas e um plano objetivo. Em seguida, execute as etapas viáveis sem interromper desnecessariamente o trabalho.

Seu foco não é apenas gerar código: é entregar duas atividades acadêmicas corretas, organizadas, verificáveis, fiéis às exigências e que o aluno consiga compreender e defender durante a avaliação.


## 2. Links do Figma enviados como referência

```text
[https://www.figma.com/design/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041&t=ZqzBLm1JT1PHXloK-1](https://www.figma.com/design/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041&t=ZqzBLm1JT1PHXloK-1)

[https://www.figma.com/proto/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041&t=ZqzBLm1JT1PHXloK-1](https://www.figma.com/proto/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041&t=ZqzBLm1JT1PHXloK-1)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041&embed-host=share" allowfullscreen></iframe>
```

## 3. Orientações posteriores aplicadas a esta etapa

> landing page academica, voce nao consegue acessar o figma que te dei? tenho o projeto no figma e agora precisa virar código

> estamos apenas conversando por enquanto

> tem como eu exportar o código direto do figma? eu permito voce acessar o figma pelo link diretamente.

```text
[https://www.figma.com/design/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041&t=ZqzBLm1JT1PHXloK-1](https://www.figma.com/design/Sdy6smlooBjashjhqnSGL1/projeto?node-id=2-9041\&t=ZqzBLm1JT1PHXloK-1)
```

> ok, vamos seperar por pastas? nao quero fazer tudo numa pasta só, quero uma pasta pro trabalho do figma, e uma pasta pros commits, seguindo todas as regras que ja conversamos, qualquer pergunta e duvida você deve me questionar.

> eu queria separar em pastas fisicas

> tenta extrair o figma tambem, mas nao tudo de uma vez, vai fazendo commits aos poucos tbm

## 4. Segunda etapa da landing page

> continue, faz uma etapa pra cada pasta

Prompt usado no ImageGen para a foto ilustrativa da seção Sobre:

> Use case: photorealistic-natural. Asset: a landscape editorial photo for a Brazilian university technology week landing page. Four fictional young adult university students, diverse Brazilian appearances, collaborate around an electronics prototype and an open laptop at a workbench in a campus innovation lab. Candid, eye-level, waist-up group composition, realistic hands and faces. Deep navy surroundings, subdued cyan practical lighting and gentle warm light on faces. Keep faces and workbench visible inside a tight 4:3 crop. No captions, visible brand logos, legible text, watermarks, or UI overlays.

## 5. Programação

> prossiga. commita o que tiver pendente e prossiga com as atividades

## 6. Seção de palestrantes

> continue

## 7. Finalização

> verifica se falta algo e ja conclui tudo. e me mostra resultados

## 8. Conferência final dos requisitos

> verifica se tudo esta feito conforme requisitos
