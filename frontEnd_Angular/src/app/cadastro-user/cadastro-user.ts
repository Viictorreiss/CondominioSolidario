
export class CadastroUsuario {
    IdUsuario: number;
    IdCondominio: number;
    Administrator: boolean;
    Ativo:boolean;
    Nome:string;
    Bloco:string;
    Apartamento:string;
    Telefone:number;
    Documento:string;
    Senha: string;

    constructor(nome:string, bloco:string, apartamento:string, senha:string, telefone:number) {
      this.Nome = nome;
      this.Bloco = bloco;
      this.Apartamento = apartamento;
      this.Senha = senha;
      this.Telefone = telefone;
    }
}