function temParam(param){
    return process.argv.indexOf(param) !== -1
}
if(temParam('--procucao')){
    console.log('Atenção')
}else{
    console.log('Tranquilo!')
}