<h1 align="center">  
<img alt="Proffy" title="#Proffy" src="https://github.com/camilacno/app-proffy/blob/master/logo.svg" />  
</h1>

<p align="left">
	<img alt="Node.js" 
src="https://img.shields.io/badge/nodejs-green?labelColor=green&logo=node.js&logoColor=white"> 
<img alt="ReactJS" src="https://img.shields.io/badge/reactJS-6cf?logo=react&logoColor=white&labelColor=007ACC">  
<img alt="React Native" src="https://img.shields.io/badge/reactnative-6cf?logo=react&logoColor=white&labelColor=007ACC">  
  <img alt="Typescript" src="https://img.shields.io/badge/typescript-informational?labelColor=blue&logo=typescript&logoColor=white"> 
  <img alt="Git" 
src="https://img.shields.io/badge/git-grey?labelColor=greu&logo=git&logoColor=white"> 
</p>

<p>
	<img alt="expo" 
	src="https://img.shields.io/badge/expo-white?labelColor=grey&logo=expo&logoColor=white">
		<img alt="sqlite" 
	src="https://img.shields.io/badge/sqlite-blue?labelColor=blue&logo=sqlite&logoColor=white">

</p>

<p>
	 <img alt="Mode" src="https://img.shields.io/badge/mode-development-orange">   
  <a href="https://www.linkedin.com/in/camilacno" target="_blank"> 
    <img src="https://img.shields.io/badge/-camilacno-007ACC?logo=linkedin&logoColor=white&labelColor=007ACC" alt="Developer LinkedIn" />
</p>

## About the Application

**Proffy** is a Web and Mobile application designed to help the connection between students and private teachers.
As a **teacher**, the user can register classes and  add information such as discipline, cost per hour and schedule.
As a **student**, the user can search for classes filtering by discipline, day of the week and time.

This v1.0 of this application was developed during **Next Level Week #2**, a Rocketseat project.

###### *Go to <a href="#content">Content</a>*.
<br>

<p align="center">
  
  <br>
  <img alt="design do projeto" width="650px" src="https://github.com/camilacno/proffy-mobile/blob/master/.github/design.png?raw=true" />
<p>

## Content

 -   <a href="#about-the-application">About the Application</a>
 - <a href="#main-libs">Main libs</a>
 -  <a href="#project-layouts">Project layouts</a>
   -  <a href="#features">Features</a>
   -  <a href="#how-to-run">How to run</a>
		-   <a href="#api">Server</a>
        -   <a href="#web">Web</a>
        -   <a href="#mobile">Mobile</a>
  
## Main Libs

[React Navigation](https://reactnavigation.org/) | [Express](https://expressjs.com/pt-br/) | [KnexJS](http://knexjs.org/) |  [Axios](https://github.com/axios/axios) | [SQLite3](https://www.sqlite.org/index.html) | [Postgres](https://www.npmjs.com/package/pg) | [Nodemailer](https://nodemailer.com/about/) | [Expo Google Fonts](https://github.com/expo/google-fonts) 
 
[EditorConfig](https://editorconfig.org/) | [ESLint](https://eslint.org/) | [Prettier](https://prettier.io/)
	
###### *Go to <a href="#content">Content</a>*.

## Project Layouts

- [Figma v1.0 web](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web?node-id=0%3A1)
- [Figma v1.0 Mobile](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile)
- [Figma v2.0 Web](https://www.figma.com/file/7XtNZowoxNdsTlLIx7sGAV/Proffy-Web-2.0-(Copy)?node-id=160%3A2761)
- [Figma v2.0 Mobile](https://www.figma.com/file/gCiWANhD3AfLgPLyjgunYE/Proffy-Mobile-2.0-(Copy)?node-id=188%3A581)

###### *Go to <a href="#content">Content</a>*.

## Features
  **v1.0**
- [x] User regiter 
- [x] Classes register 
- [x] Classes schedule

**v2.0**

-  [x] <strong>Extended layout
	-   [x] Sign up
    -   [x] Sign in
    -   [x] Remember me
    -   [x] Success screens
-   [x] <strong>User auth
    -   [x] Web
    -   [ ] Mobile
-   [x] <strong>User logout
-   [x] <strong>Profile update
-   [ ] <strong>Password recovery
-   [ ] <strong>Favorite teachers
-   [ ] <strong>Classes page pagination
-   [ ] <strong>Show teacher's detailed schedule
-   [ ] <strong>Splash screen
-   [ ] <strong>Social sign up and login
-   [ ] <strong>Theme switcher
-   [ ] <strong>Deploy
###### *Go to <a href="#content">Content</a>*.

## How to run

### Requirements
- **[Node.js](https://nodejs.org/en/)**  
- **[Git](https://git-scm.com/)**  
- **[NPM](https://www.npmjs.com/)**  or  **[Yarn](https://yarnpkg.com/)**.
- **[Expo](https://expo.io/)**  
###### *Go to <a href="#content">Content</a>*.

### Server

<p align="left">
  <a href="https://app.getpostman.com/run-collection/389a037d3d1d70b50026" target="_blank"> 
    <img src="https://run.pstmn.io/button.svg" />
  </a>
</p>

##### Cloning
```bash
$ git clone https://github.com/camilacno/proffy-backend.git
```
 ##### Installing dependencies
   ```bash
$ cd server
$ yarn # or npm install
```
  
 ##### Database setup and tables creation
  ```bash
$ yarn knex:migrate # or npm run knex:migrate
```
  
  ##### Start API
  ```bash
$ yarn start # or npm start
```
<br>

### Web
<img alt="design do projeto" width="650px" src="https://github.com/camilacno/proffy-mobile/blob/master/.github/webScreens.png?raw=true" />

##### Cloning
```bash
$ git clone https://github.com/camilacno/proffy-web.git
```
 ##### Installing dependencies
   ```bash
$ cd web	
$ yarn # or npm install
```
  
 ##### Start web application
 ```bash
$ yarn start # or npm start
```
<br>

### Mobile
 <img alt="design do projeto" width="650px" src="https://github.com/camilacno/proffy-mobile/blob/master/.github/mobileScreens.png?raw=true" />

##### Cloning
```bash
$ git clone https://github.com/camilacno/proffy-mobile.git
```
 ##### Installing dependencies
   ```bash
$ cd mobile

# Installing all fonts used
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Installing all dependencies required
$ yarn # or npm install
```
  
 ##### Start mobile application
 ```bash
$ yarn start # or npm start
```
###### *Go to <a href="#content">Content</a>*.
