## Descrição do Projeto

Projeto desenvolvido em React como teste para vaga de front-end na [nave.rs](https://nave.rs/).

## O Desafio

Queremos que você construa uma painel administrativo com CRUD de usuários como Single Page Application. Supondo que temos usuários que se cadastraram a uma vaga de emprego, esses usuários terão nome, email, nome da vaga a qual estão concorrendo e data de nascimento.

Temos um layout base para realizar o teste. Ele é disponibilizado pelo figma. Basta criar uma conta no figma que já conseguirá visualizar as telas nesse [link](https://www.figma.com/file/G8ovb9J6XBHvHpuviS73P1/Teste?node-id=3%3A2).

As informações contidas no painel deverão ser dinâmicas, use o [JSON-server](https://github.com/typicode/json-server) para consumir os dados em forma de API REST (existem exemplos na documentação).

## Como Rodar o Projeto

### Rodando o Servidor

Para que a aplicação consiga consumir os dados da API precisamos, primeiro, servir os dados do arquivo db.json, para isso é necessário ter instalado o pacote [JSON-server](https://github.com/typicode/json-server).
Após é só rodar o comando `json-server --watch db.json` na raiz do projeto, com isso os dados estarão acessíveis no endereço [http://localhost:3000](http://localhost:3000) e os recursos de usuários em [http://localhost:3000/users](http://localhost:3000/users). 

### Instalando as Dependências

É importante garantir que as dependências do projeto estão instaladas antes de rodá-lo, para isso execute o comando `yarn`.

### Rodando o projeto

Rode o projeto com o comando `yarn start`. Tento o servidor ocupado a porta 3000 será necessário rodar o projeto na porta 3001. 
Uma mensagem deve aparecer pergutando se você quer realizar essa mudança de porta e ao dizer que sim o sistema já deve rodar em [http://localhost:3001](http://localhost:3001).

## Sobre o Autor

[Linkedin](https://www.linkedin.com/in/ericogrehs/)
[Github](https://github.com/ericogrehs)