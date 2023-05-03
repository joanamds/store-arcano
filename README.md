# :convenience_store: Projeto Store Full Stack

Este projeto foi desenvolvido para um desafio técnico para a empresa [Arcano Projetos de Tecnologia](https://arcanoprojetos.com/).
Foi preciso construir uma página web que consumisse e apresentasse os dados tratados de uma API utilizando os dados públicos de uma API existente, a [FakeStoreAPI](https://fakestoreapi.com/). 
As requisições deveriam ser feitas na rota "/carts" com os ids dos produtos comprados e os ids dos clientes. Baseando-se nessas informações foi preciso criar a rota "cart-history" contendo as compras feitas pelo usuário para ser consumido pelo front-end apresentando os dados de forma organizada. 
**A rota cart-history é obrigatória para este desafio**

<details>
  <summary>
    <strong>:whale: Rodando com Docker (opcional)</strong>
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

</details>

## Referência

 - [Configurações iniciais retiradas do Projeto TFC](https://github.com/joanamds/projeto-tfc)

## Autores

- [@joanamds](https://www.github.com/joanamds)


## Demonstração

Insira um gif ou um link de alguma demonstração


