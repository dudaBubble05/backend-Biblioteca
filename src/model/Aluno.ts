export class Aluno {
    
    //Atributos
    private idAluno: number = 0;
    private nome:  string;
    private sobrenome:  string;
    private dataNascimento: Date;
    private endereco:  string;
    private email:  string;
    private celular:  string;
    private ra:  number = 0;


    /**
     * Construtor da classe aluno
     * 
     * @param ra 
     * @param nome   
     * @param sobrenome   
     * @param dataNascimento   
     * @param endereco   
     * @param email   
     * @param celular   
     */
    
    constructor(
        dataNascimento: Date,
        ra: number,
        nome: string,
        sobrenome: string,
        endereco: string,
        email: string, 
        celular: string,
    ) {
        this.dataNascimento = dataNascimento;
        this.ra = ra;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
    }

     /* Métodos get e set */
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
    public getNome(): string {
        return this.nome;
    }

    /**
     * @param nome 
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

     /**
     * @returns 
     */

     public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * @param sobrenome 
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     * @returns {Date}
     */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     *
     * @param dataNascimento 
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    /**
     * @returns
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * @param endereco 
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    /**
     * @returns
     */
    public getEmail (): string {
        return this.email;
    }

    /**
     * @param email 
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * @returns
     */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * @param celular 
     */
    public setCeular(celular: string): void {
        this.celular = celular;
    }

    /**
     * @returns
     */
    public getRa(): number {
        return this.ra;
    }

    /**
     * @param ra 
     */
    public setRa(ra: number): void {
        this.ra = ra;
    }
}
