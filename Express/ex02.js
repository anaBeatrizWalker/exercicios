const express = require('express')
const server = express() //armazena uma instância de express

server.get('/', function(req, res, next){ //função middleware completa
    console.log('Início') //inicio da requisição
    next() //passa para o próximo middleware da cadeia
    console.log('Fim') //volta pra cá e dá fim
})

server.get('/', function(req, res){
    console.log('Resposta')
    res.send('<h1>Olá Express</h1>') //envia a resposta
})

server.listen(3000, ()=> console.log('Executando...'))