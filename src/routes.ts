import { Request, Response, Router } from "express";
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";
import { Livro } from "./model/Livro";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os livros
router.get("/lista/livros", LivroController.todos);
router.post("/novo/livro", LivroController.novo);
router.delete("/delete/livro/:idLivro", LivroController.remover);
router.put("/atualizar/livro/:idLivro", LivroController.atualizar)

/* 
* ROTAS PARA ALUNO
*/ 
// Rota para listar os aluno
router.get("/lista/alunos", AlunoController.todos);
router.post("/novo/aluno", AlunoController.novo);
router.delete("/delete/aluno/:idAluno", AlunoController.remover);
router.put("/atualizar/aluno/:idAluno", AlunoController.atualizar)

/* 
* ROTAS PARA emprestimo
*/ 
// Rota para listar os emprestimo
router.get("/lista/emprestimo", EmprestimoController.todos);
router.post("/novo/emprestimo", AlunoController.novo);
router.delete("/delete/emprestimo/:idEmprestimo", EmprestimoController.remover);
router.put("/atualizar/emprestimo/:idEmprestimo", EmprestimoController.atualizar)

// exportando as rotas
export {router};