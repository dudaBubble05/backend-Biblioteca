// Diagrama de classe para representar o Livro

export class Aluno {
    
    //Atributos
    private idLivro: number = 0;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private quantTotal: number = 0;
    private quantDisponivel: number = 0;
    private valorAquisicao: number = 0;
    private statusLivroEmprestado: string;


    /**
     * Construtor da classe aluno
     * @param titulo   
     * @param autor   
     * @param editora   
     * @param anoPublicacao   
     * @param isbn   
     * @param quantTotal   
     * @param quantDisponivel   
     * @param valorAquisicao   
     * @param statusLivroEmprestado   
     */
    
    constructor(
        titulo: string,
        autor: string,
        editora: string,
        anoPublicacao: string,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        statusLivroEmprestado: string,
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.quantTotal -quantTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

     /* Métodos get e set */
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
     * @returns 
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * @param titulo 
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

     /**
     * @returns 
     */

     public getAutor(): string {
        return this.autor;
    }

    /**
     * @param autor 
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     * @returns 
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * @param editora 
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

     /**
     * @returns 
     */

     public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    /**
     * @param anoPublicacao 
     */
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
     * @returns 
     */
    public getISBN(): string {
        return this.isbn;
    }

    /**
     * @param isbn 
     */
    public setISBN(isbn: string): void {
        this.isbn = isbn;
    }

     /**
     * @returns 
     */

     public getQuantTotal(): number {
        return this.quantTotal;
    }

    /**
     * @param quantTotal 
     */
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

     /**
     * @returns 
     */

     public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    /**
     * @param quantDisponivel 
     */
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }

     /**
     * @returns 
     */

     public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    /**
     * @param valorAquisicao 
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

     /**
     * @returns 
     */

     public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    /**
     * @param statusLivroEmprestado
     */
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

}
