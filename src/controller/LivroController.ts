import { Request, Response } from "express";
import { Livro } from "../model/Livro";

interface LivroDTO {
    titulo: string,
    autor: string,
    editora: string,
    ano_publicacao: string,
    isbn: string,
    quant_total: number,
    quant_disponivel: number,
    valor_aquisicao: number,
    status_livro_emprestado: string
}

/**
 * A classe CarroController estende a classe Livro e é responsável por controlar as requisições relacionadas aos livros.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "Livro".
 * - Herdando de Livro, ela pode acessar métodos e propriedades da classe base.
 */
export class LivroController extends Livro {

    /**
    * Lista todos os livros.
    * @param req Objeto de requisição HTTP.
    * @param res Objeto de resposta HTTP.
    * @returns Lista de livros em formato JSON com status 200 em caso de sucesso.
    * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de livros.
    */
    static async todos(req: Request, res: Response): Promise<any> {
        try {
            // acessa a função de listar os livros e armazena o resultado
            const listaDeLivros = await Livro.listagemLivros();

            // retorna a lista de livros há quem fez a requisição web
            return res.status(200).json(listaDeLivros);
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log('Erro ao acessar listagem de Livros');

            // retorna uma mensagem de erro há quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de Livros" });
        }
    }

    /**
    * Método controller para cadastrar um novo livro.
    * 
    * Esta função recebe uma requisição HTTP contendo os dados de um livro no corpo da requisição
    * e tenta cadastrar este livro no banco de dados utilizando a função cadastroLivro. Caso o cadastro 
    * seja bem-sucedido, retorna uma resposta HTTP 200 com uma mensagem de sucesso. Caso contrário, retorna
    * uma resposta HTTP 400 com uma mensagem de erro.
    * 
    * @param {Request} req - Objeto de requisição HTTP, contendo o corpo com os dados do livro no formato LivroDTO.
    * @param {Response} res - Objeto de resposta HTTP usado para retornar o status e a mensagem ao cliente.
    * @returns {Promise<Response>} - Retorna uma resposta HTTP com o status 200 em caso de sucesso, ou 400 em caso de erro.
    * 
    * @throws {Error} - Se ocorrer um erro durante o processo de cadastro, uma mensagem é exibida no console e uma 
    *                   resposta HTTP 400 com uma mensagem de erro é enviada ao cliente.
    */
    static async novo(req: Request, res: Response): Promise<any> {
        try {
            // recuperando informações do corpo da requisição e colocando em um objeto da interface LivroDTO
            const livroRecebido: LivroDTO = req.body;

            // instanciando um objeto do tipo carro com as informações recebidas
            const novoLivro = new Livro(livroRecebido. titulo, 
                                        livroRecebido.autor, 
                                        livroRecebido.editora, 
                                        livroRecebido.ano_publicacao,
                                        livroRecebido.isbn,
                                        livroRecebido.quant_total,
                                        livroRecebido.quant_disponivel,
                                        livroRecebido.valor_aquisicao,
                                        livroRecebido.status_livro_emprestado);

            // Chama a função de cadastro passando o objeto como parâmetro
            const repostaClasse = await Livro.cadastroLivro(novoLivro);

            // verifica a resposta da função
            if(repostaClasse) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Livro cadastrado com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao cadastra o livro. Entre em contato com o administrador do sistema."})
            }
            
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log("Erro ao cadastrar um livro. ${error}");

            // retorna uma mensagem de erro há quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o livro. Entre em contato com o administrador do sistema." });
        }
    }
}