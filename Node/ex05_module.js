console.log(global === this) //false
console.log(module === this) //false
console.log(module.exports === this) //true, instância atual

this.digaOi = function(){
    console.log('Ooi')
}