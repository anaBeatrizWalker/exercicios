const express = require('express')
const server = express() //armazena uma instância de express

server.get('/', function(req, res){
    res.send('<h1>Index</h1>')
})

//Mapeamento de qualquer tipo de requisição com qualquer método
server.all('/teste', function(req, res){
    res.send('<h1>Teste</h1>')
})

//Expressão regular para qualquer url que contenha api
server.get(/api/, function(req, res){
    res.send('<h1>API</h1>')
})

server.listen(3000, ()=> console.log('Executando...'))