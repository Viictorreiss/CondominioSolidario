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
    const retorno = await conn.query('INSERT INTO usuario (idCondominio, Administrador, Ativo, Nome, Bloco, Apartamento, Telefone, Documento, Senha) values (?, ?, ?, ?, ?, ?, ?, ?, ?);', [body.Condominio, body.Administrador, body.Ativo, body.Nome, body.Bloco, body.Apartamento, body.Telefone, body.Documento, body.Senha]); 
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

module.exports = router