## Como rodar
Instale as dependencias com `npm i`
Execute o comando `npm start`
## Sobre o desenvolvimento

### Libs:
- React Router DOM v6
- FakerJS
- Styled components
- Chakra UI
- React Icons

### Solução

Para a solução, me inspirei um pouco no design do meet do google. Utilizei o [Chackra UI](https://chakra-ui.com) para agilizar a estilização de boa parte dos componentes. Ainda assim para algumas partes, preferi utilizar o próprio styled-components e as tags nativas do HTML. Para salvar as informações do webinar, utilizei a ContextAPI para guardar os estados compartilhados entre os componentes, como a página de `Login` e a página do `Webinar`. 
Para persisitras as informações da reunião, utilizei o `localStorage`.

### Conteúdo

- Página do login
> Simples página com um formulário para adicionar o nome ao entrar.
- Página do webinar
> Contém um componente de controles da reunião (botão de mudo apenas muda o estado). Além disso também é possível remover pessoas da reunião ao clicar na imagem do usuário escolhido.


### Dificuldades:
Quanto ao token, tentei utilizar as libs `jsonwebtoken`, porém por algum motivo, gerava um erro _(figura 1)_ muito estranho que estava relacionado com a minha versão do node, e depois de pesquisas, decidi "criar" um token fake, apenas para validar se o usuário poderia acessar a reunião.

Outra dificuldade foi em adicionar o atalho. Tentei adicionar um `eventListener` na `window`, porém estava disparando muitas funções e acabava ~(não sei porquê)~ zerando o estado dos participantes no `WebinarStore`. 

> Figura 1 - Print erro do node:
> ![image](https://user-images.githubusercontent.com/27309546/162657637-d89550e3-58f2-4c43-893d-6edc05810c19.png)
