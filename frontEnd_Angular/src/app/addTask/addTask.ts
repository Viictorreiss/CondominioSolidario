export class Task {
    "NOME_APOIADO": string;
    "bloco": string;
    "apartamento": number;
    "telefone": string;
    "IdPrioridade": number;
    "ID_SERVICO": number;
    "NOME_SERVICO": string;
    "SERVICO_DESCRICAO": string;
    "ESTADO": string;
    "ID_ESTADO": number;
    "ID_VOLUNTARIO": number;
    "ID_APOIADO": number;

    constructor(idEstado:number, idServico, idVoluntario:number, idApoiado: number) {
        this.ID_ESTADO = idEstado;
        this.ID_SERVICO = idServico;
        this.ID_VOLUNTARIO = idVoluntario;
        this.ID_APOIADO = idApoiado;
    }
}