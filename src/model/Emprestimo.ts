// Diagrama de Classe para epresentar o Emprestímo


export class Emprestimo {
    
    //Atributos
    private idEmprestimo: number = 0;
    private idAluno: number = 0;
    private idLivro: number = 0;
    private dataEmprestimo:  Date;
    private dataDevolucao: Date;
    private statusEmprestimo:  string;



    /**
     * Construtor da classe aluno
     * @param dataEmprestimo   
     * @param dataDevolucao   
     * @param statusEmprestimo     
     */
    
    constructor(
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string,

    ) {
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    /* Métodos get e set */
    /**
     * @returns 
     */

    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * @param idEmprestimo 
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * @returns 
     */

    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * @param idAluno 
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * @returns 
     */

    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * @param idLivro 
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * @returns {Date}
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     *
     * @param dataEmprestimo 
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * @returns {Date}
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     *
     * @param dataDevolucao 
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    /**
     * @returns
     */
    public getStatusEmpestimo(): string {
        return this.statusEmprestimo;
    }

    /**
     * @param statusEmprestimo 
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }
}
