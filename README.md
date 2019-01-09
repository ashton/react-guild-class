# OLX React Guideline

## Índice
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Env var](#env-var)
- [Monitoramento](#monitoramento)
- Lint
    - Ter o file .eslintrc
    - Airbnb base
    - Falar sobre prettier
- Test
    - Unitário
        - Jest?
        - Exemplos de testes
    - Testes de interface e integração
        - E2E Cypress?
    - Ter o file jest.config.js ou package.json?
    - Localização dos arquivos de testes (estrutura de diretórios)?
        - Dentro do próprio módulo?
        - Espelho /src e /test?
- CI
    - .gitlab-ci.yml
    - Como seria o pipeline?
- NVM
    - .nvmrc
- Storybook

## Estrutura de Diretórios
Segue abaixo a documentação da estrutura de diretórios escolhida como base para os projetos React da OLX:

### Atomic Design Based Project
```
src/
│  app.js
|  store.js
|  rootReducer.js
├──components/
|  ├──atoms/
|  |  ├──button/
|  |  |  [index | Button].js
|  |  ├──label/
|  |  |  [index | Label].js
|  ├──molecules/
|  |  ├──avatar/
|  |  |  | index.js
|  |  |  | AvatarContainer.js
|  |  |  | AvatarComponent.jsx
|  ├──organisms/
|  |  ├──miniProfile/
|  |  |  | index.js
|  |  |  | MiniProfileContainer.js
|  |  |  | MiniProfileComponent.jsx
|  ├──ecosystems/
|  |  ├──profile/
|  |  |  | index.js
|  |  |  | ProfileContainer.js
|  |  |  | ProfileComponent.jsx
├──reducers/
|  miniProfile.js
|  profile.js
|  login.js
├──actions/
|  miniProfile.js
|  profile.js
|  login.js
```

Atomic Design projects são divididos agrupando os componentes seguindo o modelo de [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) onde os componentes são quebrados em seus menores níveis _(átomos)_ e assim compostos para formar outros componentes até obtermos a própria página desejada.

### Bonus
#### Index.js
Uma boa discussão no universo JS é sobre como utilizamos o arquivo `index.js` em nossos módulos.

Alguns colocam todo o código dentro de um arquivo `index.js` para facilitar o import, como em:
```javascript
import actions from 'module/actions';
```
ao invés de
```javascript
import actions from 'module/actions/myactions.js';
```

Outras pessoas preferem colocar nome nos arquivos para evitar o `search index hell` e o  `tab index hell`: ![index hell](https://user-images.githubusercontent.com/10795207/35185156-a959e6b2-fe3a-11e7-9e33-70b541dc4e14.png)

Há uma solução que une o melhor dos mundos, e é considerada uma boa prática na comunidade: `use o arquivo index.js dos seus módulos como um controle de visibilidade do que vc deseja expor naquele módulo`.

Exemplo:
Nós podemos criar arquivos com seus próprios nomes facilitando assim a busca do mesmo, e a visibilidade na tab bar:

```
src/
|  ├──components/
|  |  ├──avatar/
|  |  |  | Avatar.js
```

E utilizar o `index.js` para filtrar o que é exposto pelo módulo:

```javascript
// index.js
import Avatar from './Avatar';
export default Avatar;
```

Ou usando uma forma mais curta:

```javascript
//index.js
export {default as Avatar} from './Avatar';
```

No caso de múltiplos arquivos dentro de seu módulo o benefício de um arquivo index bem feito fica mais evidente.

Imagine a seguinte estrutura de arquivos:
```
src/
|  ├──components/
|  |  ├──avatar/
|  |  |  index.js
|  |  |  AvatarContainer.js
|  |  |  AvatarComponent.jsx
```

E o `index.js`:
```javascript
import AvatarContainer from './AvatarContainer';
import AvatarComponent from './AvatarComponent';

export default AvatarContainer;
export AvatarComponent;
```

Dessa forma, conseguimos manter a facilidade da busca e da visibilidade das abas de nosso editor, preservando a facilidade no import de nossos arquivos, no exemplo acima, levando em consideração o conceito de container component, poderíamos importar nosso componente da seguinte forma:

```javascript
import Avatar from './avatar';
```

Se por algum acaso desejássemos importar apenas o componente, sem os comportamentos padrão definidos pelo container poderíamos escrever:

```javascript
import { AvatarComponent } from './avatar';
```

## Env var

Uma boa prática para manter as variáveis de ambiente do projeto dentro de um padrão é usar um prefixo como `APP_*`. Qual a vantagem de seguir essa abordagem?

Caso seja necessário repassar múltiplas variáveis para dentro do projeto, com esse padrão fica mais simples. Segue um exemplo do [CRA](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/env.js#L73)

Uma boa forma de gerenciar as variáveis é usar o pacote [dotenv](https://www.npmjs.com/package/dotenv). Segue abaixo a estrutura de pastas.

```javascript
├───.env
├────.env.development
├────.env.development.local
├────.env.preprod
├────.env.production
```

## Monitoramento

Monitoria de aplicações é extremamente relevante. Porém, em aplicações React torna-se uma tarefa difícil
devido a natureza do ambiente que a aplicação está rodando, no cliente, seja ele nativo ou web. Contudo,
existem algumas alternativas e práticas que gostaríamos de enforçar com este guideline. O mínimo que esperamos
que uma aplicação seja capaz de fazer em termos de monitoria é utilizar uma ferramenta de reporte de exceções e
erros não tratados, também conhecidos como "crashs".

### Sentry
O Sentry oferece uma plataforma de monitoramento de aplicações. O objetivo dele num projeto React é concentrar
mensagens de erro que acontecem no cliente. Para enviar mensagens para o Sentry, o projeto React deverá utilizar
um SDK, de fácil configuração. Assim, automaticamente exceções e erros não tratados serão reportados para a serviço.


##### Instalação do SDK

Para utilizar o Sentry, será necessário que a aplicação faça uso de um SDK como dependência.

Se você usa yarn adicione a dependência através do comando:

``` $ yarn add @sentry/browser@4.1.0```


Se você usa npm adicione a dependência através do comando:

``` $ npm install @sentry/browser@4.1.0```


##### Configuração do SDK

É necessário inicializar o SDK assim que sua aplicação é carregada.

```javascript
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'https://<key>@sentry.io/<project>' });
```

- Note que ```<key>``` corresponde a chave disponibilizada através da plataforma de administração do Sentry para a sua aplicação.
- Note que ```sentry.io``` corresponde ao endereço da plataforma Sentry que você está usando, em caso de uma instalação interna
(como a do time de Payments), você deve utilizar o endereço desta instalação.
- Note que ```<project>``` corresponde ao nome da sua aplicação cadastrada através da plataforma de administração do Sentry.
