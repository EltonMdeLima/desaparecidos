# Documentação de Implementação da Aplicação

Este documento técnico detalha as correções e a arquitetura implementadas para garantir a funcionalidade da aplicação de **Pessoas Desaparecidas**.  
O objetivo é fornecer uma referência clara e direta sobre a estrutura do projeto e sua comunicação com a API externa.

---

## 📑 Sumário
1. [Configuração e Ambiente](#1-configuração-e-ambiente)  
2. [Arquitetura de Autenticação com Redux](#2-arquitetura-de-autenticação-com-redux)  
3. [Endpoints e Comunicação com a API](#3-endpoints-e-comunicação-com-a-api)  
4. [Solução Final do Problema de Autenticação](#4-solução-final-do-problema-de-autenticação)  

---

## 1. Configuração e Ambiente

Problemas iniciais foram resolvidos para permitir o funcionamento da aplicação:

- **Conectividade**:  
  A conexão com o servidor de desenvolvimento foi estabelecida, garantindo o acesso à aplicação em `http://localhost:3000`.

- **Compilação**:  
  A estrutura do `store` do Redux foi organizada para resolver o erro `Module not found`, permitindo a compilação do projeto.

- **CORS**:  
  O erro `Failed to fetch` foi superado com a configuração de um proxy (`rewrites`) no arquivo `next.config.js`, permitindo que as requisições à API sejam enviadas do mesmo domínio da aplicação.

---

## 2. Arquitetura de Autenticação com Redux

A autenticação na API, que exige um token **JWT**, foi centralizada e gerenciada com o **Redux Toolkit**.

A arquitetura foi dividida em três componentes principais:

- **`authSlice.js`**:  
  Responsável pela lógica de autenticação.  
  - A *thunk* `login` executa a requisição **POST** com as credenciais.  
  - O token obtido é salvo no estado global e no `localStorage` para persistência.

- **`peopleSlice.js`**:  
  Gerencia a busca de dados.  
  - A *thunk* `fetchPeople` obtém o token do estado de autenticação e o inclui no cabeçalho `Authorization` da requisição **GET**, garantindo o acesso autorizado.

- **`pages/index.js`**:  
  Refatorado para ser um componente de interface reativa, utilizando `useSelector` e `useDispatch` para interagir com os estados de autenticação e dados, renderizando o conteúdo de acordo com o status de carregamento e erro.

---

## 3. Endpoints e Comunicação com a API

A comunicação da aplicação com a API da **Abitus** segue o fluxo abaixo:

- **Endpoint de Login**: `/api/v1/login`  
  - **Método**: `POST`  
  - **Credenciais**: enviadas no corpo da requisição.  
  - **Retorno**: objeto JSON contendo o token de acesso.

- **Endpoint de Busca de Dados**: `/api/v1/ocorrencias/informacoes-desaparecido`  
  - **Método**: `GET`  
  - **Autenticação**: requer o cabeçalho  
    ```
    Authorization: Bearer <token>
    ```

---

## 4. Solução Final do Problema de Autenticação

O erro `403 Forbidden` foi o último obstáculo.  
A análise da documentação da API via **Swagger UI** confirmou a obrigatoriedade da autenticação.

A solução final foi:

1. Validar e inserir as credenciais corretas diretamente no código de login.  
2. Obter um **token JWT** válido.  
3. Utilizar esse token nas requisições subsequentes, garantindo o acesso aos dados da API com sucesso.

---
