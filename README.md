# Um simples app de noticías

Este projeto utiliza o google news news.org
A API é restrita a 100 requisições diárias a partir daí só pagando ou a partir de um back.

Como a aplicação ta usando SSR na index da pra consultar a inde no ar, mas consultas a partir do menu de navegação vão ter problemas de CORS.

# Stack

• NextJs
• Typescript
• Grommet
• Storybook
• Theo
• Styled Comp

## Rodando o projeto

```shell
npm install
```

```shell
gulp
```

```shell
npm run dev
```

```shell
npm run storybook
```

WEB roda na porta 3000 e o storybook na 6006

## Aprendizado e conclusões

O principal do era familiarizar com o conceito de design system e tokens.
Iniciei com um estudo sobre os termos e suas aplicações, e ficou claro que todo esse universo ainda é bem jovem e tem muito a crescer.

Usei o theo para fazer o parse dos arquivos yaml para algum formato de uso concreto no projeto. Não me aprofundei na ferramenta e escolhi usar o arquivo gerado da forma mais crua possível para não ficar tão amarrado, acredito que existam form melhores para se trabalhar por aqui assim como a inclusão automática dos arquivos no framework de UI e ou styled components.

Seguindo ainda sobre os aprendizados de design system tive algumas idéias para implementação usando theo e tokens, mas acredito que precisaria de mais tempo pra elaborar algo mais robusto e com menos falhas a médio prazo.

## Estrutura

A estrutura é bem simples e usa componentes em sua criação, os componentes podem ter uma tag de style e sua lógica vai pra um function component.

## No Ar

Tem esse link no ar mas como disse anteriormente a api do news da uma freiada quando você tente fazer request no modo free pelo browser, então só a home vai conseguir renderizar as noticias devido ao fato de vir do "server" o primeiro request.

https://meiucanews.vercel.app/
