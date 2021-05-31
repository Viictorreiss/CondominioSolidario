export class CadastroCondominio {
    Nome: string;
    CEP: string;
    UF: string;
    Cidade:string;
    Bairro:string;
    Rua:string;
    Numero:number;
    IdCondominio: number;

    constructor(nome:string, cep:string, uf:string, cidade:string, bairro:string, rua:string, numero:number, ) {
      this.Nome = nome;
      this.CEP = cep;
      this.UF = uf;
      this.Cidade = cidade;
      this.Bairro = bairro;
      this.Rua = rua;
      this.Numero = numero;
    }
  }