const express = require("express");
const os = require("os");

const app = express();

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

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
