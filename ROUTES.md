## Rotas

### Autores

- Listar todos os autores:
```sh
curl http://localhost:3000/authors?limit=10&page=1
```

- Ver um autor específico:
```sh
curl http://localhost:3000/authors/5b4210eba40a6e008171a070
```

- Cadastrar um autor específico:
```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "description": "aaa"}' http://localhost:3000/authors/
```

- Alterar um autor específico:
```sh
curl -X PUT -H "Content-Type: application/json" -d '{"name": "John Doe", "description": "aaa"}' http://localhost:3000/authors/5b4210eba40a6e008171a070
```

- Apagar um autor específico:
```sh
curl -X DELETE http://localhost:3000/authors/5b4210eba40a6e008171a070
```

### Postagens

- Listar todos as postagens de um determinado autor ou categoria:
```sh
curl http://localhost:3000/posts?author=5b4210eba40a6e008171a070&categories=5b421aa9b47d6f00ee71f084&limit=10&page=1
```

- Ver uma postagem específica:
```sh
curl http://localhost:3000/posts/5b42492cf229a401f5852ede
```

- Cadastrar uma postagem específica:
```sh
curl -X POST -H "Content-Type: application/json" -d '{
	"title": "aaaa",
	"content": "bbbbbbb",
	"date": "2018-01-01",
	"author": "5b4210eba40a6e008171a070",
	"categories": ["5b421aa9b47d6f00ee71f084", "5b421207a40a6e008171a073"]
}' http://localhost:3000/posts/
```

- Alterar uma postagem específica:
```sh
curl -X PUT -H "Content-Type: application/json" -d '{
	"title": "ccccccc",
	"content": "bbbbbbb",
	"date": "2018-01-01",
	"author": "5b4210eba40a6e008171a070",
	"categories": ["5b421aa9b47d6f00ee71f084", "5b421207a40a6e008171a073"]
}' http://localhost:3000/posts/5b42492cf229a401f5852ede
```

- Apagar uma postagem específica:
```sh
curl -X DELETE http://localhost:3000/posts/5b42492cf229a401f5852ede
```

### Categorias

- Listar todos as categorias:
```sh
curl http://localhost:3000/categories?limit=10&page=1
```

- Ver uma categoria específica:
```sh
curl http://localhost:3000/categories/5b4210eba40a6e008171a070
```

- Cadastrar uma categoria específica:
```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "Melodraminha", "subcategories": ["5b421207a40a6e008171a073"]}' http://localhost:3000/categories/
```

- Alterar uma categoria específica:
```sh
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Melodraminha", "subcategories": ["5b421207a40a6e008171a073"]}' http://localhost:3000/categories/5b421207a40a6e008171a073
```

- Apagar uma categoria específica:
```sh
curl -X DELETE http://localhost:3000/categories/5b4210eba40a6e008171a070
```