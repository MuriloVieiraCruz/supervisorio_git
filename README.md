# Supervisório Caixa de Água
![GitHub](https://img.shields.io/github/license/oTalDoHud/ProjetoDashBoardVendas)

# Sobre o projeto

O sistema supervisório para a caixa de água permite monitorar em tempo real a quantidade de água presente no reservatório. A aplicação oferece dois modos de operação:

<h3>Automático</h3>
No modo automático, um sensor ultrassônico, integrado ao ESP32, monitora continuamente o nível de água. Quando o reservatório estiver quase vazio, o ESP32 acionará uma bomba d'água para reabastecê-lo. Assim que o reservatório estiver quase cheio, a bomba será desligada. Nesse modo, os dados de monitoramento são enviados em tempo real para o backend em Java por meio de requisições JSON, que por sua vez são redirecionados para o banco de dados.

<h3>Manual</h3>
No modo manual, o usuário tem controle total sobre o sistema através de uma interface no frontend. É possível selecionar manualmente o acionamento da bomba d'água para encher o reservatório ou ativar o fluxostato para drenar a quantidade de água.

Dessa forma, o sistema supervisório garante um gerenciamento eficiente e preciso da caixa de água, proporcionando comodidade e controle total ao usuário."

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

| [<img src="https://avatars.githubusercontent.com/u/113257963?v=4" width=115><br><sub>Murilo Vieira Cruz</sub>](https://github.com/MuriloVieiraCruz) | [<img src="https://avatars.githubusercontent.com/u/117123575?v=4" width=115><br><sub>Luiz Henrique Pereira Corrêa</sub>](https://github.com/luiz0899) |
| :---: | :---: |

