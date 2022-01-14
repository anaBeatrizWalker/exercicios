const express = require('express')
const server = express()
const router = require('./ex05_routes')

//Sempre que mapear /api usa o router
server.use('/api', router)

server.listen(3000, ()=> console.log('Executando...'))