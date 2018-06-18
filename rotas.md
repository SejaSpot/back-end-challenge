Criar, Editar ou Apagar Categoria

(POST) http://localhost:3100/categoria
{

    "nome": "MongoDB",
    "categoriaPai": "5"

}

(PUT/DELETE) http://localhost:3100/:id



Visualizar todas as categorias ou uma categoria especifica

(GET) http://localhost:3100/categorias
(GET) http://localhost:3100/categoria/:id

Criar, Editar ou Apagar Autor

(POST) http://localhost:3100/autor
{
	
    "nome": "Fernando CArvalho",
	
    "sobre": "Desenvolvedor Full Stack",
	
    "usuario": "fernando.carvalho",
	
    "senha": "654321"

}

(PUT/DELETE) http://localhost:3100/:id



Criar, Editar ou Apagar Postagem

(POST) http://localhost:3100/blog
{
	
    "titulo":"Construindo um E-commerce utilizando Laravel - Parte 6",
	
    "conteudo":"Lorem Ipsum",
	
    "autor": 7,
	
    "categorias": [7,11]

}

(PUT/DELETE) http://localhost:3100/:id



Listar Posts de uma determinada categoria

GET http://localhost:3100/blog/categoria/:id


Listar Posts de um determinado Autor

GET http://localhost:3100/blog/autor/:id

