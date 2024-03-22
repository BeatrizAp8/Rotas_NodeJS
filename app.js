const express = require ("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor ativo!")
})

app.get("/", function(req,res){
    res.end("Seja bem vindo ao Node JS")
})

app.get("/cadastrar/produto", function(req,res){
    res.end("Produtos: " + req.params.produto)
})

app.get("/pesquisar/produto/modelo", function(req,res){
    res.end("Modelos: " + req.params.modelo)
})

app.get("/contato/sac/produto", function(req,res){
    res.end("Produto: " + req.params.produto)
})
