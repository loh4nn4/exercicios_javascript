const prompt = require("prompt-sync")()

console.log(`-----------Fila e Clientes-----------\n\n`)
const fila = []//array ou lista
for(let i = 0; i < 3; i++){
  const nome = prompt(`Nome do Cliente ${i+1}: `)
  fila.push(nome)//aloca o valor da variavel nome no final do array
}
console.log(`\nPrimeiro da Fila: ${fila.at(0)}`)
console.log(`\nUltimo da fila: ${fila.at(-1)}`)
const prm = fila.shift()
console.log(`\nAtendendo: ${prm}`)
console.log(`\nRemanescentes na fila: ${fila}`)