const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const Port = 5001;

app.get("/teste", (req,res)=>{
     res.send("Seja Bem-vindo ao Teste")
})

app.get("/login", (req,res)=>{
     res.send("login")
})

app.get("/produto", (req,res)=>{
     res.send("Caixa d'agua")
})

app.get("/perfil", (req,res)=>{
     res.send("Heltin")
})

//ROTA PRODUTO- CREATE





app.listen(Port,()=>{
 console.log(`Servidor Rodando na Porta,${Port}`)
})