const express = require('express')
const server = express() //armazena uma instância de express

//Use mapeia todos os métodos HTTP e atende por qualquer url que comece com /api
server.use('/api', function(req, res, next){
    console.log('Início') 
    next() 
    console.log('Fim') 
})

server.use('/api', function(req, res){
    console.log('Resposta')
    res.send('<h1>API</h1>') 
})

server.listen(3000, ()=> console.log('Executando...'))