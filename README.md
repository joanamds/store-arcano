# :convenience_store: Projeto Store Full Stack

Este projeto foi desenvolvido para um desafio técnico para a empresa [Arcano Projetos de Tecnologia](https://arcanoprojetos.com/).
Foi preciso construir uma página web que consumisse e apresentasse os dados tratados de uma API utilizando os dados públicos de uma API existente, a [FakeStoreAPI](https://fakestoreapi.com/). 
As requisições deveriam ser feitas na rota "/carts" com os ids dos produtos comprados e os ids dos clientes. Baseando-se nessas informações foi preciso criar a rota "cart-history" contendo as compras feitas pelo usuário para ser consumido pelo front-end apresentando os dados de forma organizada. 
**A rota cart-history é obrigatória para este desafio**

<details>
  <summary>
    <strong>:whale: Rodando com Docker</strong>
  </summary><br>
  
O Docker é uma plataforma que permite criar, implantar e executar aplicativos em contêineres. Um contêiner é uma unidade de software leve e portátil que pode ser executada em qualquer lugar - desde máquinas locais até servidores na nuvem. Para rodar utilizando o Docker é preciso ter o Docker e o docker-compose instalado em sua máquina. 

  
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
  docker exec -it app_backend sh
```

Instale as dependências

```bash
  npm install
```

- Front-end

Entre no terminal do docker:

```bash
  docker exec -it store-arcano-frontend-1 sh
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

<details>
  <summary>
    <strong>:computer: Front-end</strong>
  </summary><br>
  
<strong>Organização das pastas</strong> 

```bash
store-arcano/
  frontend/
    public/
    src/
      components/
      pages/
      services/
      styles/
```
<strong>Demonstração</strong>

  [screen-recording.webm](https://user-images.githubusercontent.com/106452876/235982232-1bc69bc8-9e6d-40bd-bdfa-358f52c86d99.webm)


</details>

<details>
  <summary>
    <strong>🗄️ Back-end </strong>
  </summary><br>

<strong>Organização das pastas</strong> 

```bash
store-arcano/
  backend/
    src/
      database/
        api/
        config/
        controllers/
        interfaces/
        migrations/
        models/
        seeders/
        services/
        token/
      routes/
      tests/
        mocks/
      
```

<strong>Demonstração</strong>

[screen-recording (1).webm](https://user-images.githubusercontent.com/106452876/235986651-47f01155-e8d4-4b2a-9b1d-ea028b12993e.webm)


</details>

<details>
  <summary>
    <strong>:white_check_mark: Testes</strong>
  </summary><br>
  
Para esta aplicação foram criados testes para o back-end utilizando Mocha, Chai e Sinon. Para rodar os testes rode os seguintes comandos: 

- Entre no terminal do docker:

```bash
  docker exec -it app_backend sh
```

- Depois rode o comando: 

```bash
  npm test
```

</details>

## Stack utilizada

**Front-end:** React, React Hooks, Material UI

**Back-end:** MySQL, Sequelize, Node.js, Arquitetura MSC(Model, Service e Controller), Docker, docker-compose

## Referência

 - [Configurações iniciais retiradas do Projeto TFC da Trybe](https://github.com/joanamds/projeto-tfc)

## Autores

- [@joanamds](https://www.github.com/joanamds)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://joanamds.github.io/#/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-joanamds/)
