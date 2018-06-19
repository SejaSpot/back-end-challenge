# Requisições #

## Criar, Editar ou Apagar Categoria

(POST) /categoria
    {

        "nome": "MongoDB",
        "categoriaPai": "5"

    }

(PUT/DELETE) /:id



## Visualizar todas as categorias ou uma categoria especifica

(GET) /categorias
(GET) /categoria/:id

## Criar, Editar ou Apagar Autor

(POST) /autor
    {
        
        "nome": "Fernando CArvalho",
        
        "sobre": "Desenvolvedor Full Stack",
        
        "usuario": "fernando.carvalho",
        
        "senha": "654321"

    }

(PUT/DELETE) /:id



## Criar, Editar ou Apagar Postagem

(POST) /blog
    {
        
        "titulo":"Construindo um E-commerce utilizando Laravel - Parte 6",
        
        "conteudo":"Lorem Ipsum",
        
        "autor": 7,
        
        "categorias": [7,11]

    }

(PUT/DELETE) /:id



## Listar Posts de uma determinada categoria

(GET) /blog/categoria/:id


## Listar Posts de um determinado Autor

(GET) /blog/autor/:id


Todas as paginas de listagem de Posts, Categorias ou Autores exibem por padrão 5 itens por página. Para alterar a paginação poderá passar via query os valores ?p e ?total. Ambos não são obrigatórios.

Exemplo de requisição com paginação:

/categorias/?p=1&total=3