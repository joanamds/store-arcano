# :convenience_store: Projeto Store Full Stack

Este projeto foi desenvolvido para um desafio técnico para a empresa [Arcano Projetos de Tecnologia](https://arcanoprojetos.com/).
Foi preciso construir uma página web que consumisse e apresentasse os dados tratados de uma API utilizando os dados públicos de uma API existente, a [FakeStoreAPI](https://fakestoreapi.com/). 
As requisições deveriam ser feitas na rota "/carts" com os ids dos produtos comprados e os ids dos clientes. Baseando-se nessas informações foi preciso criar a rota "cart-history" contendo as compras feitas pelo usuário para ser consumido pelo front-end apresentando os dados de forma organizada. 
**A rota cart-history é obrigatória para este desafio**

<details>
  <summary>
    <strong>:whale: Rodando com Docker</strong>
  </summary><br>
Clone o projeto

```bash
  git clone https://github.com/joanamds/store-arcano
```

Entre no diretório do projeto e rode o comando

```bash
  docker-compose up -d
```

- Back-end
Entre no terminal do docker:

```bash
  docker exec -it app_backend
```

Instale as dependências

```bash
  npm install
```

- Front-end
Entre no terminal do docker:

```bash
  docker exec -it store-arcano-frontend-1
```

Instale as dependências

```bash
  npm install
```
  
ℹ️ Após rodar o docker-compose é possível: 
  - Acessar o banco de dados na rota ``3002`` com a senha "123456";
  - Acessar o frontend no navegador na rota ``http://localhost:3000``
  - Acessar o backend na rota ``http://localhost:3001``

</details>

<details>
  <summary>
    <strong>:file_folder: Documentação da API</strong>
  </summary><br>
  
- Após rodar o docker-compose é possível fazer requisições a API na url ``http://localhost:3001``
  
| Método HTTP | Endpoint   | Descrição               | 
| :---------- | :--------- | :---------------------- |
| POST        | `/login`   | Faz o login com usuários do banco de dados                        |
| GET         | `/products`   | Retorna todos os produtos que estão a venda
| GET         | `/users/:id` | Retorna o usuário de acordo com o id
| GET         | `/cart-history/:id`| Retorna o histórico de compras do usuário

Corpo da requisição
- POST `/login`

```json
{
 "email": "string",
 "password": "string"
}
```

</details>

## Referência

 - [Configurações iniciais retiradas do Projeto TFC da Trybe](https://github.com/joanamds/projeto-tfc)

## Autores

- [@joanamds](https://www.github.com/joanamds)


## Demonstração

Insira um gif ou um link de alguma demonstração


