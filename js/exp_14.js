const prompt = require("prompt-sync")()

const pares = []
const impares = []

for(let i = 0; i < 5; i++){//laço para inserir numeros no array
  const num = Number(prompt(`Insira o ${i+1}º Numero Inteiro: `))//reatribuição - variavel de bloco
  if(Number.isInteger(num)){
    num % 2 == 0 ? pares.push(num) : impares.push(num)//função ternária para separar
  }                                                   //pares e impares
  else{
    console.log("ERRO! O numero digitado não pertence ao conjunto dos numeros inteiros")
    continue
  }
}
console.log(`Numeros Pares: ${pares.join("-")}`)
console.log(`Numreros Impares: ${impares.join("-")}`)