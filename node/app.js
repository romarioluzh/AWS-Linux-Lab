const express = require("express");
const os = require("os");
const { Pool } = require("pg");
const app = express();

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "portalti",
    password: "portal123",
    port: 5432
});

app.get("/", (req, res) => {
    res.send("Olá! Minha primeira aplicação Node.js está funcionando!");
});

app.get("/api", (req, res) => {
    res.json({
        status: "online",
        servidor: "AWS EC2",
        hostname: os.hostname(),
        sistema: os.platform(),
        data: new Date()
    });
});

app.get("/api/usuarios", async (req, res) => {
    try {
        const resultado = await pool.query(
            "SELECT id, nome, email, cargo, criado_em FROM usuarios ORDER BY id"
        );

        res.json(resultado.rows);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Erro ao consultar o PostgreSQL"
        });
    }
});
app.get("/api/usuarios/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await pool.query(
            "SELECT id, nome, email, cargo, criado_em FROM usuarios WHERE id = $1",
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                erro: "Usuário não encontrado"
            });
        }

        res.json(resultado.rows[0]);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Erro ao consultar usuário"
        });
    }
});

app.get("/api/status-db", async (req, res) => {
    try {
        await pool.query("SELECT NOW()");

        res.json({
            status: "online",
            database: "portalti"
        });

    } catch (erro) {
        res.status(500).json({
            status: "offline"
        });
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
