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
![Web 1](https://github.com/oTalDoHud/ProjetoDashBoardVendas/blob/master/Assets/web1.png)

![Web 2](https://github.com/oTalDoHud/ProjetoDashBoardVendas/blob/master/Assets/web2.png)

![Web 3](https://github.com/oTalDoHud/ProjetoDashBoardVendas/blob/master/Assets/web3.png)

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
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/oTalDoHud/ProjetoDashBoardVendas

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/oTalDoHud/ProjetoDashBoardVendas

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Hudson Lucas Teles Vieira

www.linkedin.com/in/otaldohud

hudson.lucas.vieira@gmail.com
 
