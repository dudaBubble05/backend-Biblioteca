import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que gerencia os empréstimos de livros.
 */
export class Emprestimo {
    /* Atributos */
    /* Identificador do empréstimo */
    private idEmprestimo: number = 0;
    /* Identificador do aluno que fez o empréstimo */
    private idAluno: number = 0;
    /* Identificador do livro emprestado */
    private idLivro: number = 0;
    /* Data de início do empréstimo */
    private dataEmprestimo: Date;
    /* Data de devolução do empréstimo */
    private dataDevolucao: Date;
    /* Status atual do empréstimo */
    private statusEmprestimo: string;

    /**
     * Construtor da classe Emprestimos
     * 
     * @param idAluno Identificador do aluno que fez o empréstimo
     * @param idLivro Identificador do livro emprestado
     * @param dataEmprestimo Data em que o empréstimo foi realizado
     * @param dataDevolucao Data prevista para devolução do livro
     * @param statusEmprestimo Status do empréstimo (ex.: "ativo", "devolvido")
     */
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    /* Métodos get e set */

    /**
     * Recupera o identificador do empréstimo
     * @returns o identificador do empréstimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui um valor ao identificador do empréstimo
     * @param idEmprestimo Novo identificador do empréstimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Recupera o identificador do aluno que fez o empréstimo
     * @returns o identificador do aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do aluno
     * @param idAluno Novo identificador do aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Recupera o identificador do livro emprestado
     * @returns o identificador do livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui um valor ao identificador do livro
     * @param idLivro Novo identificador do livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a data em que o empréstimo foi realizado
     * @returns A data do empréstimo
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * Define a data de início do empréstimo
     * @param dataEmprestimo Nova data do empréstimo
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Retorna a data prevista para devolução do livro
     * @returns A data de devolução do empréstimo
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * Define a data prevista para devolução do livro
     * @param dataDevolucao Nova data de devolução
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    /**
     * Retorna o status atual do empréstimo
     * @returns O status do empréstimo (ex.: "ativo", "devolvido")
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }

    /**
     * Define o status atual do empréstimo
     * @param statusEmprestimo Novo status do empréstimo
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }

 /**
     * Busca e retorna uma lista de emprestimolistaDeEmprestimo de emprestimo do banco de dados.
     * @returns Um array de objetos do tipo emprestimo em caso de sucesso ou null se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todos os registros da tabela "Emprestimo".
     * - Os dados retornados são utilizados para instanciar objetos da classe Emprestimo.
     * - Cada pedido de venda instanciado é adicionado a uma lista que será retornada ao final da execução.
     * - Caso ocorra uma falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna null.
     */
    static async listagemEmprestimo(): Promise<Array<Emprestimo> | null> {
        const listaDeEmprestimo: Array<Emprestimo> = [];
        try {
          const querySelectemprestimolistaDeEmprestimo = `SELECT * FROM emprestimo`;
          const respostaBD = await database.query(querySelectemprestimolistaDeEmprestimo);

          respostaBD.rows.forEach((linha: any) => {
            const novoPedidoEmprestimo = new Emprestimo(
                linha.id_livro,
                linha.id_aluno,
                linha.id_emprestimo,
                linha.data_emprestimo,
                linha.data_devolucao);

                novoPedidoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

                listaDeEmprestimo.push(novoPedidoEmprestimo);
            });
        
            return listaDeEmprestimo;
        } catch (error) {
            console.log('Erro ao buscar lista de emprestimolistaDeEmprestimo');
            return null;
        }
    } 

    /**
     * Cadastra um novo emprestimo de livro no banco de dados.
     * 
     * Esta função executa uma consulta SQL `INSERT` para registrar um novo emprestimo de livro com os dados fornecidos
     * como parâmetros. Caso o cadastro seja bem-sucedido, a função retorna `true` e exibe uma mensagem de confirmação 
     * com o ID do emprestimo. Se o cadastro falhar, retorna `false` e registra o erro no console.
     * 
     * @param {number} idAluno - O ID do aluno associado ao emprstimo.
     * @param {number} idLivro - O ID do livro associado ao emprestimo.
     * @param {Date} dataEmprestimo - A data em que o emprestimo foi feito.
     * @param {Date} dataDevolucao - A data em que o emprestimo foi devolvido.
     * 
     * @returns {Promise<boolean>} - Retorna `true` se o emprestimo for cadastrado com sucesso; caso contrário, retorna `false`.
     * 
     * @throws {Error} - Caso ocorra um erro durante a execução da consulta SQL, o erro é registrado no console.
     */

    static async cadastroEmprestimo(idAluno: number, idLivro: number, dataEmprestimo: Date, dataDevolucao: Date): Promise<boolean> {
        try {
            const queryInsertEmprestimo = `INSERT INTO emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao)
                                        VALUES (${idAluno}, 
                                                ${idLivro}, 
                                               '${dataEmprestimo}', 
                                               '${dataDevolucao}
                                        RETURNING id_emprestimo;`;

            const respostaBD = await database.query(queryInsertEmprestimo);
            if(respostaBD.rowCount != 0) {
                console.log(`Emprestimo de livro cadastrado com sucesso. ID emprestimo: ${respostaBD.rows[0].id_emprestimo}`);
                return true;
            }

            return false;
        } catch (error) {
            console.log('Erro ao cadastrar o emprestimo. Consulte os logs para mais detalhes.');
            console.log(error);
            return false;
        }
    }

    /**
     * Remove um emprestimo de livro do banco de dados com base no ID fornecido.
     *
     * @param idEmprestimo - O ID do emprestimo de livro a ser removido.
     * @returns Uma promessa que resolve para `true` se o emprestimo foi removido com sucesso, ou `false` caso contrário.
     *
     * @throws Lança um erro se ocorrer um problema durante a execução da consulta no banco de dados.
     */
    static async removerEmprestimo(idEmprestimo: number): Promise<boolean> {
        try {
            const queryDeleteEmprestimo = `DELETE FROM emprestimo WHERE id_emprestimo = ${idEmprestimo};`;

            const respostaBD = await database.query(queryDeleteEmprestimo);

            if(respostaBD.rowCount != 0) {
                console.log(`Emprestimo de livro removido com sucesso! ID: ${idEmprestimo}.`);
                return true;
            }

            return false;
        } catch (error) {
            console.log('Erro ao remover o emprestimo. Consulte os logs para mais detalhes.');
            console.log(error);
            return false;
        }
    }


    /**
     * Atualiza um emprestimo de livro no banco de dados.
     * 
     * @param idEmprestimo - O ID do emprestimo de livro a ser atualizado.
     * @param idAluno - O ID do aluno associado ao emprestimo.
     * @param idLivro - O ID do livro associado ao emprestimo.
     * @param dataEmprestimo - A data de emprestimo.
     * @param dataDevolucao - A devolução do livro.
     * @returns Uma Promise que resolve para `true` se o emprestimo foi atualizado com sucesso, ou `false` caso contrário.
     * @throws Lança um erro se ocorrer um problema durante a atualização do emprestimo.
     */
    static async atualizarEmprestimo(idEmprestimo: number, idAluno: number, idLivro: number, dataEmprestimo: Date, dataDevolucao: Date): Promise<boolean> {
        try {
            const queryUpdateEmprestimo = `UPDATE emprestimo SET
                                            id_aluno = ${idAluno},
                                            id_livro = ${idLivro},
                                            data_emprestimo = '${dataEmprestimo}',
                                            data_devolucao = ${dataDevolucao}
                                            WHERE id_emprestimo = ${idEmprestimo};`;

            const respostaBD = await database.query(queryUpdateEmprestimo);

            if(respostaBD.rowCount != 0) {
                console.log(`Emprestimo atualizado com sucesso: ID: ${idEmprestimo}`);
                return true;
            }

            return false;
        } catch (error) {
            console.log('Erro ao atualizar o emprestimo. Consulte os logs para mais detalhes.');
            console.log(error);
            return false;
        }
    }
    
}