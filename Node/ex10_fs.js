const fs = require('fs')
const files = fs.readdirSync(__dirname) //lê o diretório de forma síncrona (dirname: const padrão)

files.forEach(f => console.log(f))
