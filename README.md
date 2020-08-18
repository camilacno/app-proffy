

<h1 align="center">  <img alt="Proffy" title="#Proffy" src="https://raw.githubusercontent.com/camilacno/proffy-mobile/eef6811620612c0e883bcb0f8d4eb5f6ecb0dcb5/.github/logo.svg" />  </h1>
<h2 align="center">  Node.js | ReactJS | React Native <br>🚀 Em construção </h2>

![Telas mobile e web](https://github.com/camilacno/proffy-mobile/blob/master/.github/design.png?raw=true)

## Tabela de Conteúdos
<p>  
	<a href="#sobre-o-projeto">O Projeto</a> | 
	<a href="#tecnologias">Tecnologias</a> | 
	<a href="#features">Features</a> | 
	<a href="#como-executar">Como Executar</a> | 
	<a href="#sobre-a-nlw">NLW</a>
</p>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/389a037d3d1d70b50026)
<br>

## Sobre o Projeto

O  **Proffy**  é uma aplicação Web e Mobile feita para auxiliar na conexão entre os alunos e os professores. 
Oferece aos professores a possibilidade de registrar aulas, podendo adicionar informações como a disciplina, o custo e horário.
Aos alunos, oferece a possibilidade de buscar pelas aulas cadastradas.

Essa aplicação foi realizada durante a **Next  Level Week #2**, projeto da  [Rocketseat](https://rocketseat.com.br/).

###### *Voltar para a [Tabela de Conteúdos](#tabela-de-conteúdos)*.


## Tecnologias

-   [Typescript](https://www.typescriptlang.org/)
-   [Node.js](https://nodejs.org/en/)
-   [ReactJS](https://reactjs.org/)
-   [React Native](http://facebook.github.io/react-native/)
-   [Expo](https://expo.io/)
-   [Express](https://expressjs.com/)
-   [axios](https://github.com/axios/axios)

###### *Voltar para a [Tabela de Conteúdos](#tabela-de-conteúdos)*.

## Features
  
- [x] Cadastro de usuário 
- [x] Cadastro aulas 
- [x] Calendário de aulas
- [ ] Autenticação de usuários
- [ ] Recuperação de senha
- [ ] Perfil do Proffy
- [ ] Logout

###### *Voltar para a [Tabela de Conteúdos](#tabela-de-conteúdos)*.

## Como Executar

-   ### **Pré-requisitos**    
    -   É  **necessário**  possuir o  **[Node.js](https://nodejs.org/en/)**  instalado no computador
    -   É  **necessário**  possuir o  **[Git](https://git-scm.com/)**  instalado e configurado no computador
    -   Também, é  **preciso**  ter um gerenciador de pacotes seja o  **[NPM](https://www.npmjs.com/)**  ou  **[Yarn](https://yarnpkg.com/)**.
    -   Por fim, é  **essencial**  ter o  **[Expo](https://expo.io/)**  instalado de forma global na máquina

### 1.  Faça um clone do repositório:
```bash
$ git clone https://github.com/camilacno/proffy-mobile.git
```

### 2.  Executando a Aplicação:

  #### API
  ```bash
$ cd server
```

  #### Instalando as dependências do projeto.
   ```bash
$ yarn # ou npm install
```
  
  #### Configurando o banco de dados e criando as tabelas.
  ```bash
$ yarn knex:migrate # ou npm run knex:migrate
```
  
  #### Inicie a API
  ```bash
$ yarn start # ou npm start
```
###### *Voltar para a [Tabela de Conteúdos](#tabela-de-conteúdos)*.

## Sobre a NLW
A Next Level Week é uma proposta da  [Rocketseat](https://rocketseat.com.br/). Trata-se de um evento online focado na prática, onde a ideia é aprender desde os principais fundamentos do desenvolvimento web, até conceitos avançados e tecnologias modernas. 

###### *Voltar para a [Tabela de Conteúdos](#tabela-de-conteúdos)*.
