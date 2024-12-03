[Title](../../Biblioteca.postman_collection.json)



{
	"info": {
		"_postman_id": "8301bfb0-52c0-4499-8781-29838a8ed66a",
		"name": "Biblioteca",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "38148709"
	},
	"item": [
		{
			"name": "Cadastro Aluno",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n        \"nome\": \"Allisonnnnnnnnnnn\",\r\n        \"sobrenome\": \"Barboooo\",\r\n        \"dataNascimento\": \"16993938900\",\r\n        \"endereco\": \"Rua Hollywood, 193\",\r\n        \"email\": \"reynolds07@gogle.com\",\r\n        \"celular\": \"1985-07-16\"\r\n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3333/novo/aluno",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3333",
					"path": [
						"novo",
						"aluno"
					]
				}
			},
			"response": []
		},
		{
			"name": "Cadastro Livro",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": " {\r\n        \"titulo\": \"O Senhor dos Anéis 88888888888\",\r\n        \"autor\": \"J.R.R. Tolkien\",\r\n        \"editora\": \"HarperCollins\",\r\n        \"anoPublicacao\": \"1954\",\r\n        \"isbn\": \"978-0007525546\",\r\n        \"quantTotal\": 10,\r\n        \"quantDisponivel\": 10,\r\n        \"valorAquisicao\": \"150.00\",\r\n        \"statusLivroEmprestado\": \"Disponível\"\r\n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3333/novo/livro",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3333",
					"path": [
						"novo",
						"livro"
					]
				}
			},
			"response": []
		},
		{
			"name": "Listar Alunos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3333/lista/alunos",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3333",
					"path": [
						"lista",
						"alunos"
					]
				}
			},
			"response": []
		},
		{
			"name": "Listar Livros",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3333/lista/livros",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3333",
					"path": [
						"lista",
						"livros"
					]
				}
			},
			"response": []
		},
		{
			"name": "Listar emprestimos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3333/lista/emprestimo",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3333",
					"path": [
						"lista",
						"emprestimo"
					]
				}
			},
			"response": []
		}
	]
}