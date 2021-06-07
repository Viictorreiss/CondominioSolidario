const { Router } = require("express")
const connect = require("./../config/db")

let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT t.idTarefa AS "ID_TAREFA", u.nome AS NOME_APOIADO, u.bloco, u.apartamento, u.telefone, s.IdPrioridade, s.IdServico AS ID_SERVICO, s.nome AS NOME_SERVICO, s.descricao AS SERVICO_DESCRICAO, t.IdEstado AS ID_ESTADO, e.nome AS ESTADO FROM tarefas AS t LEFT JOIN usuario AS u ON t.IdApoiado = u.IdUsuario LEFT JOIN servicos AS s ON t.IdServico = s.IdServico LEFT JOIN estado AS e ON t.IdEstado = e.IdEstado;'); 
    res.send(rows);
})

router.put("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('UPDATE tarefas SET idVoluntario=?, idEstado=? WHERE idTarefa=?;', [body.ID_VOLUNTARIO, body.ID_ESTADO, body.ID_TAREFA]); 
    res.send(retorno)
})

router.get("/user", async (req, res) => {
    const conn = await connect();
    const query = req.query;
    const [rows] = await conn.query('SELECT * FROM usuario WHERE idUsuario = ?;', [query.id]); 
    // disconnect();
    res.send(rows)
})

router.get("/servico", async (req, res) => {
    const conn = await connect();
    const query = req.query;
    const [rows] = await conn.query('SELECT * FROM servicos WHERE idServico = ?;', [query.id]); 
    res.send(rows)
})

router.post("/task", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('INSERT INTO tarefas (idVoluntario, idApoiado, idServico, idEstado) values (?, ?, ?, ?);', [body.ID_VOLUNTARIO, body.ID_APOIADO, body.ID_SERVICO, body.ID_ESTADO]); 
    res.send(retorno)
})


module.exports = router