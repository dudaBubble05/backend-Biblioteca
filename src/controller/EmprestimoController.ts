import e, { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";


interface EmprestimoDTO {
    idLivro: number;
    idAluno: number;
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

    /**
     * Cadastra um novo Emprestimo.
     * 
     * Esta função recebe os dados de um emprestimo (objeto `EmprestimoDTO`) da requisição HTTP e os 
     * utiliza para cadastrar um novo emprestimo no sistema, chamando a função `cadastroEmprestimo` da classe `Emprestimo`.
     * Retorna uma resposta JSON indicando o sucesso ou falha do cadastro, juntamente com uma mensagem apropriada.
     * 
     * @param {Request} req - Objeto da requisição HTTP contendo o corpo com os dados do Emprestimo (`EmprestimoDTO`).
     * @param {Response} res - Objeto de resposta HTTP utilizado para enviar o status e mensagem ao cliente.
     * 
     * @returns {Promise<Response>} - Retorna uma resposta HTTP com status 200 e uma mensagem de sucesso se o cadastro for realizado com sucesso.
     *                                Em caso de erro, retorna uma resposta com status 400 e uma mensagem de erro.
     * 
     * @throws {Error} - Caso ocorra um erro durante o processo de cadastro, o erro é registrado no console e uma resposta de erro é enviada.
     */
    static async novo(req: Request, res: Response): Promise<Response> {
        try {
            const emprestimoRecebido: EmprestimoDTO = req.body;

            const repostaClasse = await Emprestimo.cadastroEmprestimo(
                                                                emprestimoRecebido.idAluno,
                                                                emprestimoRecebido.idLivro,
                                                                emprestimoRecebido.dataEmprestimo,
                                                                emprestimoRecebido.dataDevolução);

            if (repostaClasse) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "mprestimo cadastrado com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao cadastra o emprestimo. Entre em contato com o administrador do sistema." })
            }
        } catch (error) {
            console.log(`Erro ao cadastrar o emprestimo. ${error}`);
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o emprestimo. Entre em contato com o administrador do sistema." });
        }
    }

    /**
     * Remove um emprestimo com base no ID fornecido na requisição.
     *
     * @param req - Objeto de requisição do Express contendo o ID do emprestimo nos parâmetros.
     * @param res - Objeto de resposta do Express para enviar a resposta ao aluno.
     * @returns Uma Promise que resolve para um objeto de resposta do Express.
     *
     * @throws Retorna uma resposta com status 400 e uma mensagem de erro se ocorrer algum problema durante a remoção do emprestimo.
     */
    static async remover(req: Request, res: Response): Promise<Response> {
        try {
            const idEmprestimo = parseInt(req.params.idEmprestimo as string);

            const repostaClasse = await Emprestimo.removerEmprestimo(idEmprestimo);

            if(repostaClasse) {
                return res.status(200).json({ mensagem: "Emprestimo do livro removido com sucesso!"});
            } else {
                return res.status(400).json({ mensagem: "Não foi possível emprestimo do livro. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            console.log(`Erro ao remover o emprestimo. ${error}`);
            return res.status(400).json({ mensagem: "Não foi possível remover o emprestimo. Entre em contato com o administrador do sistema." });
        }
    }

    /**
     * Atualiza um emprestimo de livro existente com base nos dados fornecidos.
     *
     * @param req - O objeto de solicitação HTTP, contendo os dados do emprestimo no corpo da solicitação e o ID do emprestimo nos parâmetros da URL.
     * @param res - O objeto de resposta HTTP.
     * @returns Uma promessa que resolve com um objeto de resposta HTTP.
     *
     * @throws Retorna uma resposta HTTP com status 400 e uma mensagem de erro se ocorrer um problema durante a atualização do emprestimo.
     */
    static async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const emprestimoRecebido: EmprestimoDTO = req.body;
            const idEmprestimoRecebido = parseInt(req.params.idEmprestimo as string);

            const respostaModelo = await Emprestimo.atualizarEmprestimo
                                                    (idEmprestimoRecebido, 
                                                     emprestimoRecebido.idAluno, 
                                                     emprestimoRecebido.idLivro, 
                                                     emprestimoRecebido.dataEmprestimo, 
                                                     emprestimoRecebido.dataDevolução);
        
            if(respostaModelo) {
                return res.status(200).json({ mensagem: "Emprestimo atualizado com sucesso!" });
            } else {
                return res.status(400).json({ mensagem: "Não foi possível atualizar o emprestimo. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            console.log(`Erro ao remover o emprestimo. ${error}`);
            return res.status(400).json({ mensagem: "Não foi possível atualizar o emprestimo. Entre em contato com o administrador do sistema." });
        }
    }
}