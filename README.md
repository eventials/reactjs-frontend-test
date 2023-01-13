# Teste Frontend React

  O intuito desse desafio é avaliar seus conhecimentos técnicos em React e JavaScript.

  Crie, utilizando ReactJS, uma aplicação que simula a visualização do dono (chamaremos de owner) de uma vídeo chamada com N participantes.

  Faça o fork desse repositório

## Requisitos
  - A aplicação deve possuir uma tela que gera o JWT e faz o registro do cookie "auth_token", faça uma tela de login completa;
  - A aplicação deve possuir uma tela que simula a visualização do ponto de vista do owner (todos os participantes serão apenas simulados no frontend dessa tela);
          * Não é necessário ter a conexão real entre os participantes;
          * Capture o dispositivo de vídeo e a entrada de áudio para o owner;
          * Utilize um vídeo qualquer para simular os outros participantes.
  - Inclua uma forma de simular a entrada do participante (atalho de teclado, função atribuida ao objeto window ex: window.addParticipant("Participant Name")).
          * O owner deve poder aceitar/recusar que um participante entre;
          * A qualquer momento o owner pode remover um participante específico da chamada ou desativar seu microfone.
  - Simule um dashboard onde o owner consegue ter várias chamadas de vídeo, mas só pode escolher uma para entrar;
  - Seja criativo para criar o comportamento do grid para quantidades diferentes de usuário (como a tela se comporta quando só existe 1 usuário online? 4? 8? 12?);
  - Utilize o localStorage para armazenar o estado da aplicação de forma que se o owner recarregar a página ele volte com todos os participantes, já aceitos, em tela;
  - A interface da sala de chamada deve ser uma rota privada, liberada apenas se o usuário possuir um cookie "auth_token" que armazena um JWT de autenticação;
  - Não só a interface, mas todas as rotas e ações dentro do software precisam utilizar do token;
  - De uma sugestão de arquitetura para fazer deploy dessa aplicação em um ambiente de produção e as razões pelas quais você escolheu ela;

## Utilize
  - React hooks
  - React context
  - React Router Dom
  - Styled components
  - Typescript
  - Framework de UI de sua preferência (MaterialUI, Antdesign, Bootstrap...)

## Envio
  Faça um Pull Request para esse repositório


## Prazo
  3 dias

## Avaliação

  - Sua aplicação preenche os requerimentos básicos?
  - Você documentou a maneira de configurar o ambiente e rodar sua aplicação?
  - Você seguiu as instruções de envio do desafio?
  - O seu código é organizado e bem componentizado?
  - O seu código é legível?
  - Sua solução tem uma boa usabilidade?
