process.stdout.write('Está gostando do curso? ') //saída padrão
process.stdin.on('data', function(data){ //entrada padrão
    process.stdout.write(`Sua resposta foi ${data.toString()}Obrigado!`)
    process.exit()
})