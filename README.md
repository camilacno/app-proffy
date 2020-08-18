<h1 align="center">  
<img alt="Proffy" title="#Proffy" src="https://raw.githubusercontent.com/camilacno/proffy-mobile/eef6811620612c0e883bcb0f8d4eb5f6ecb0dcb5/.github/logo.svg" />  
</h1>

<h2 align="center">  
Node.js | ReactJS | React Native <br>🚀 Em construção 
</h2>

<p align="center">
  <img alt="design do projeto" width="650px" src="https://github.com/camilacno/proffy-mobile/blob/master/.github/design.png?raw=true" />
<p>

<p align="center">
	<img alt="Node.js" 
src="https://img.shields.io/badge/nodejs-green?labelColor=green&logo=node.js&logoColor=white">  
  <img alt="Typescript" src="https://img.shields.io/badge/typescript-informational?labelColor=blue&logo=typescript&logoColor=white">  
  <img alt="License" src="https://img.shields.io/github/license/camilacno/proffy-web">    
  <a href="https://www.linkedin.com/in/camilacno" target="_blank"> 
    <img src="https://img.shields.io/badge/-camilacno-007ACC?logo=linkedin&logoColor=white&labelColor=007ACC" alt="Developer LinkedIn" />
  </a>
</p>

<p align="center">
  <a href="https://app.getpostman.com/run-collection/389a037d3d1d70b50026" target="_blank"> 
    <img src="https://run.pstmn.io/button.svg" />
  </a>
</p>


## :link: Tabela de Conteúdos
<p>  
	<a href="#books-sobre-o-projeto">O Projeto</a> <br>
	<a href="#inbox_tray-layouts-projeto">
		Layouts do projeto
	</a> <br>
	<a href="#bookmark_tabs-este-repo">
		Este repositório - API
	</a> <br>	
	<a href="#rocket-tecnologias">Tecnologias</a> <br>
	<a href="#computer-features-api">Features</a> <br>
	<a href="#fire-como-executar">
		API - Como Executar
	</a> <br>
	<a href="#memo-license">License</a>
</p>


## :books: Sobre o Projeto

O  **Proffy**  é uma aplicação Web e Mobile feita para auxiliar na conexão entre alunos e professores particulares. 
Oferece aos professores a possibilidade de registrar aulas, podendo adicionar informações como a disciplina, o custo e horário.
Aos alunos, oferece a possibilidade de buscar pelas aulas cadastradas.

Essa aplicação foi realizada durante a **Next  Level Week #2**, projeto da  [Rocketseat](https://rocketseat.com.br/).

###### *Voltar para a [Tabela de Conteúdos](#link-tabela-de-conteúdos)*.
<br>

## :inbox_tray: Layouts Projeto

[Versão 1.0 web](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web?node-id=0%3A1)
[Versão 1.0 Mobile](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile)
[Versão 2.0 Web](https://www.figma.com/file/7XtNZowoxNdsTlLIx7sGAV/Proffy-Web-2.0-(Copy)?node-id=160%3A2761)
[Versão 2.0 Mobile](https://www.figma.com/file/gCiWANhD3AfLgPLyjgunYE/Proffy-Mobile-2.0-(Copy)?node-id=188%3A581)

###### *Voltar para a [Tabela de Conteúdos](#link-tabela-de-conteúdos)*.
<br>

## :bookmark_tabs: Este repo

Este repositório trata especificamente do backend da aplicação, desenvolvido em Node.js com Typescript.

###### *Voltar para a [Tabela de Conteúdos](#link-tabela-de-conteúdos)*.
<br>

## :rocket: Tecnologias
-   [Node.js](https://nodejs.org/en/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Expo](https://expo.io/)
-   [Express](https://expressjs.com/)
-   [Axios](https://github.com/axios/axios)


### **:book: Principais ferramentas adicionais utilizadas**

| Aplicação | Utilização | Link |
|:----------|------|---------------------|
|```bcryptjs```| Encriptação de senhas | [nnpmjs/bcrypt](https://www.npmjs.com/package/bcrypt) |
|```jsonwebtoken```| Autenticação | [npmjs/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) |
|```yup```| Validações | [github.com/jquense/yup](https://github.com/jquense/yup) |
|```nodemailer```| Recuperação de senha | [nodemailer.com](https://nodemailer.com/about/) |


###### *Voltar para a [Tabela de Conteúdos](#link-tabela-de-conteúdos)*.
<br>

## :computer: Features API
  **Versão 1.0**
- [x] Cadastro de usuário 
- [x] Cadastro aulas 
- [x] Calendário de aulas

**Versão 2.0**
- [ ] Autenticação de usuários
- [ ] Recuperação de senha
- [ ] Perfil do Proffy
- [ ] Logout

###### *Voltar para a [Tabela de Conteúdos](#link-tabela-de-conteúdos)*.
<br>

## :fire: Como Executar

#### :raised_hand: Pré-requisitos
- Possuir o  **[Node.js](https://nodejs.org/en/)**  instalado no computador
- Possuir o  **[Git](https://git-scm.com/)**  instalado e configurado no computador
- Gerenciador de pacotes seja o  **[NPM](https://www.npmjs.com/)**  ou  **[Yarn](https://yarnpkg.com/)**.
- **[Expo](https://expo.io/)**  instalado de forma global na máquina

### 1.  Faça um clone do repositório:
```bash
$ git clone https://github.com/camilacno/proffy-backend.git
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
###### *Voltar para a [Tabela de Conteúdos](#link-tabela-de-conteúdos)*.
<br>


## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo  [LICENSE](https://github.com/camilacno/proffy-backend/blob/master/LICENSE)  para mais detalhes.
###### *Voltar para a [Tabela de Conteúdos](#link-tabela-de-conteúdos)*.
