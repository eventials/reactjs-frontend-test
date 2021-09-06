# Desafio frontend vídeo chamada

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
Inicialize a aplicação com `yarn start`;\

### Features

Página de login\
Aceita qualquer combinação de caracteres para o email e senha, nenhum dos dois campos pode ficar em branco.\
Ao logar, será gerado um `cookie` com chave `auth_token` e cujo valor é um JWT criado a partir do email, e você será direcionado para a página do webinar.\
\
Página do webinar\
Essa página mostra um vídeo simulando a tela do owner, então o vídeo principal (maior) é do owner e os vídeos menores dos outros participantes.\
Para adicionar outros participantes pressione as teclas `CTRL+SHIFT+Z`, uma mensagem aparecerá na parte superior direita da página e você tem a opção de aceitar ou rejeitar o participante.\
É possível também excluir ou desativar a câmera de um participante, para isso posicione o cursor sobre o vídeo do participante de interesse e aparecerá 2 ícones: remover participante e desligar/ligar vídeo.\
Dos botões presentes na parte inferior central da tela, o primeiro desativa ou ativa a câmera do owner.\
O último botão sai da chamada e você será redirecionado para a página de login. O cookie de autenticação (JTW) e o local storage serão limpos.\
Os outros botões não tem funções implementadas.\
No chat é possível escrever e enviar mensagem. Caso queira enviar mensagem como outro participante, digite a mensagem e pressione as teclas `CTRL+SHIFT+X`.\
Os ids dos participantes presentes na chamada estão guardados no local storage, dessa forma, ao recarregar a página ela volta com todos os participantes já aceitos.\



### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
