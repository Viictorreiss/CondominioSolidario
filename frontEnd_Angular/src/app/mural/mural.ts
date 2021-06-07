export class Mural {
    "ID_TAREFA": number;
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

    constructor(idTarefa:number, idEstado:number, idVoluntario:number) {
        this.ID_TAREFA = idTarefa;
        this.ID_ESTADO = idEstado;
        this.ID_VOLUNTARIO = idVoluntario;
    }
}