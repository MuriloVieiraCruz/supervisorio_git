# Supervisório Caixa de Água
![GitHub](https://img.shields.io/github/license/oTalDoHud/ProjetoDashBoardVendas)

# Sobre o projeto

Supervisório de caixa de água onde monitora em tempo real a quantidade da mesma dentro do reservatório/caixa

A aplicação possui dois modos:

<h3>Automático</h3>
Um sensor ultrassônico (por meio do esp32) monitora a quantidade de água, onde caso esteja quase vazio, o esp32 acionará uma bomba D'água que irá encher novemente o reservatório, e quando perceber que está quase cheio, irá desligar a bomba, e em todo momento estará mandando os valores por meio de requisições via Json do esp32 para o back-end em java, assim redirecionando para o banco de dados.

<h3>Manual</h3>
Através da tela no front-end será possível alterar para o modo manual, onde o usuário escolhe se quer ligar a bomba de água para encher o reservatório, ou se quer ativar o fluxostato para drenar a quantidade de água. 

## Layout web
![Web 1](https://github.com/MuriloVieiraCruz/supervisorio_git/blob/main/assets/Captura%20de%20tela%20gr%C3%A1fico.png)

![Web 2](https://github.com/MuriloVieiraCruz/supervisorio_git/blob/main/assets/Captura%20de%20tela%20opera%C3%A7%C3%A3o.png)

![Web 3](https://github.com/MuriloVieiraCruz/supervisorio_git/blob/main/assets/Captura%20de%20tela%20supervis%C3%A3o.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS
- ReactJS
- Bootstrap

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/MuriloVieiraCruz/supervisorio_git
```

## Front end web
Pré-requisitos: npm

```bash
# clonar repositório
git clone https://github.com/MuriloVieiraCruz/supervisorio_git

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autores

| [<img src="https://avatars.githubusercontent.com/u/113257963?v=4" width=115><br><sub>Murilo Vieira Cruz</sub>](https://github.com/MuriloVieiraCruz) |  [<img src="https://avatars.githubusercontent.com/u/117123575?v=4" width=115><br><sub>Luiz Henrique Pereira Corrêa</sub>](https://github.com/luiz0899)
| :---: | :---: | :---: |
