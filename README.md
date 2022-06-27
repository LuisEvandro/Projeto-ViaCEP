# Projeto-ViaCEP

##### Avaliação técnica - Projeto ViaCEP

##### Escopo geral do projeto está em PDF [( VER ESCOPO )](/github/escopo_geral.pdf)

###### Documentação do ViaCEP: https://viacep.com.br/

## 💻 Tecnologias usadas:

> Para o back-end sera utilizado:
>
> - NodeJs (Express e Prisma)
> - MySQL para o banco de dados

> Para o front-end sera utilizado:
>
> - ReactJs
> - Styled-Component e Material-UI

#### Para rodar o projeto

Para iniciar a instalação do front-end após clonar o projeto entre na pasta `/frontend` do os seguintes comandos:

> Comando para instalar as dependencias do frontend
>
> ```
> npm install
> ```
>
> Comando para iniciar o front-end.
>
> ```
> npm run dev
> ```
>
> Após execução do comando acima acesse: http://localhost:3000/

Para iniciar a instalação do backend após clonar o projeto entre na pasta `/backend` do os seguintes comandos:

> Comando para instalar as dependencias do backend
>
> ```
> npm install
> ```
>
> :warning: **_No arquivo .env (está na pasta /backend) coloque as credenciais do banco de dados da sua maquina._**
>
> > Sem essa configuração de banco de dados no arquivo `.env` os proximos comando não funcionara corretamente !
>
> Comandos para gerar o banco de dados local e conexão.
>
> ```
> npx prisma generate
> npx prisma migrate dev
> ```
>
> O comando para iniciar o server da API:
>
> ```
> npm run dev
> ```
>
> Após execução do comando acima a api estara disponivel : http://localhost: " _A PORTA QUE COLOCAR NO ARQUIVO ENV_ "
