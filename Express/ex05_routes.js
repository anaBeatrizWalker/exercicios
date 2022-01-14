const express = require('express')
const router = express.Router() //instância de um Router

router.use((req, res, next)=>{
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.`)
})

router.get('/produtos/:id', (req, res)=>{
    res.json({id: req.params.id, name: 'Caneta'})
})
//localhost:3000/api/produtos/56269
//{"id":"56269","name":"Caneta"}

router.get('/clientes/:id/:name', (req, res)=>{
    res.json({id: req.params.id, name: req.params.name})
})
//localhost:3000/api/clientes/12623/Ana
//{"id":"12623","name":"Ana"}

module.exports = router