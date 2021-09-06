# Desafio frontend vídeo chamada

Construção de uma aplicação React com uma tela simulando uma vídeo chamada e uma tela de login.\
O layout foi construído utilizando um monitor de referência de 15".\
![imagem tela video chamada](public/telaVideoChamada.png?raw=true)

## Libs utilizadas

Typescript\
React Router Dom\
Universal cookie\
Json web token\
Styled components\
Material Ui\
React icons\

### Configurando o projeto

Clone o projeto com o comando `git clone`;\
Para instalar as dependências utilize `yarn install` ou `npm install`;\
Inicialize a aplicação com `yarn start`;

### Features

**Página de login**
Aceita qualquer combinação de caracteres para o email e senha, nenhum dos dois campos pode ficar em branco.\
Ao logar, será gerado um `cookie` com chave `auth_token` e cujo valor é um JWT criado a partir do email, e você será direcionado para a página do webinar.\
\
**Página do webinar**
Essa página mostra um vídeo simulando a tela do owner, então o vídeo principal (maior) é do owner e os vídeos menores dos outros participantes.\
Para adicionar outros participantes pressione as teclas `CTRL+SHIFT+Z`, uma mensagem aparecerá na parte superior direita da página e você tem a opção de aceitar ou rejeitar o participante.\
É possível também excluir ou desativar a câmera de um participante, para isso posicione o cursor sobre o vídeo do participante de interesse e aparecerá 2 ícones: remover participante e desligar/ligar vídeo.\
Dos botões presentes na parte inferior central da tela, o primeiro desativa ou ativa a câmera do owner.\
O último botão sai da chamada e você será redirecionado para a página de login. O cookie de autenticação (JTW) e o local storage serão limpos.\
Os outros botões não tem funções implementadas.\
No chat é possível escrever e enviar mensagem. Caso queira enviar mensagem como outro participante, digite a mensagem e pressione as teclas `CTRL+SHIFT+X`.\
Os ids dos participantes presentes na chamada estão guardados no local storage, dessa forma, ao recarregar a página ela volta com todos os participantes já aceitos.\
É possível adicionar 12 participantes.\
\
Para a construção do layout me inspirei no [design](https://dribbble.com/shots/14088308/attachments/5709284?mode=media).



