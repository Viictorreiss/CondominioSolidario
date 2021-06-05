const { Router } = require("express")
const connect = require("./../config/db")

let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT u.nome AS NOME_APOIADO, u.bloco, u.apartamento, u.telefone, s.IdPrioridade, s.IdServico AS ID_SERVICO, s.nome AS NOME_SERVICO, s.descricao AS SERVICO_DESCRICAO, t.IdEstado AS ID_ESTADO, e.nome AS ESTADO FROM tarefas AS t LEFT JOIN usuario AS u ON t.IdApoiado = u.IdUsuario LEFT JOIN servicos AS s ON t.IdServico = s.IdServico LEFT JOIN estado AS e ON t.IdEstado = e.IdEstado;'); 
    res.send(rows);
})

module.exports = router