![](https://miro.medium.com/max/600/0*4pCcllFiOQ3FLo8h.png)


# Configurando o Node Js para Rodar com Typescript



## Lista de Comandos

1.Criação do Projeto

    npm init -y

2.Adicionando Typescript

    npm i -g typescript

ou

    npm i typescript -D

3.Configurando o Express

    npm i @types/express -s

4.Compilando o Arquivo .ts 

    tsc index.ts 

5.Criando o Arquivo de Configuração do Typescript 

    tsc init 

6.Rodando as Configurações

    yarn tsc

7.Criação do Script para Rodar o Projeto

    "dev:server": "ts-node-dev --respawn  --transpile-only src/index.ts"

8.Instalando o ts-node-dev

    npm i ts-node-dev -D    


