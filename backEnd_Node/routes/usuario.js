const { Router } = require("express")
const connect = require("./../config/db")
// const disconnect = require("./../config/db")

let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuario;'); 
    // disconnect();
    res.send(rows)
})

router.post("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('INSERT INTO usuario (idCondominio, Administrador, Ativo, Nome, Bloco, Apartamento, Telefone, Documento, Senha) values (?, ?, ?, ?, ?, ?, ?, ?, ?);', [body.IdCondominio, body.Administrador, body.Ativo, body.Nome, body.Bloco, body.Apartamento, body.Telefone, body.Documento, body.Senha]); 
    // disconnect();
    res.send(retorno)
})

router.put("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('UPDATE usuario SET idCondominio=?, Administrador=?, Ativo=?, Nome=?, Bloco=?, Apartamento=?, Telefone=?, Documento=? WHERE idUsuario=?;', [body.condominio, body.administrador, body.ativo, body.nome, body.bloco, body.apartamento, body.telefone, body.documento, body.usuario]); 
    // disconnect();
    res.send(retorno)
})

router.patch("/ativo", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('UPDATE usuario SET Ativo=? WHERE idUsuario=?;', [body.ativo, body.usuario]); 
    // disconnect();
    res.send(retorno)
})

router.get("/:id", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuario WHERE idUsuario = ?;',[req.params.id]); 
    // disconnect();
    res.send(rows)
})

router.get("/voluntario/:id", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tarefas WHERE idVoluntario = ?;', [req.params.id]); 
    res.send(rows)
})

router.get("/apoiado/:id", async (req, res) => {
    const conn = await connect();    
    const [rows] = await conn.query('SELECT * FROM tarefas WHERE idApoiado = ?;', [req.params.id]); 
    res.send(rows)
})

router.get("/login/:id", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuario WHERE Telefone = ? ;', [req.params.id]); 
    res.send(rows)
})


module.exports = router