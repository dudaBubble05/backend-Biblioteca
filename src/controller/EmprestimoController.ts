import { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";


interface EmprestimoDTO {
    id_livro: number;
    id_aluno: number;
    dataEmprestimo: Date;
    dataDevolução:Date;
}

/**
 * A classe EmprestimoController estende a classe Emprestimo e é responsável por controlar as requisições relacionadas aos pedidos de Emprestimo.
 * 
 * - Como um controlador dentro de uma API REST, esta classe gerencia as operações relacionadas ao recurso "Emprestimo.
 * - Herdando de Emprestimo, ela pode acessar os métodos e propriedades da classe base.
 */
export class EmprestimoController extends Emprestimo {

    /**
     * Lista todos os pedidos de Emprestimo.
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de pedidos de Emprestimo em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de pedidos de Emprestimo.
     */
    static async todos(req: Request, res: Response): Promise<any> {
        try {
            const listaPedidos = await Emprestimo.listagemEmprestimo();

            return res.status(200).json(listaPedidos);
        } catch (error) {
            console.log('Erro ao acessar listagem de emprestimos');
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de emprestimos" });
        }

}

}