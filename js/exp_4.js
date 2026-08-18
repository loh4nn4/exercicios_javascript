const prompt = require("prompt-sync")()
const valor = Number(prompt(`Valor a pagar de mensalidade: `))
const aux = Math.floor(valor/35)//verifica quantas vezes o 35 cabe no valor
/*const qtLivro = aux == 0 ? 1 : aux > 5 ? 5 : aux**/
let qtLivro
let troco
if(aux == 0){
  qtLivro = 1
  troco = 35 - valor
  console.log(`Falta R$ ${troco.toFixed(2)} para comprar 1 livro.`)
  console.log(`O Cliente pagará R$ ${(qtLivro*35).toFixed(2)} 
  por ${qtLivro} livro`)
}else if(aux > 5){
  qtLivro = 5
  troco = valor - (qtLivro*35)
  console.log(`O Cliente pagará R$ ${(qtLivro*35).toFixed(2)} 
  por ${qtLivro} livro (s) e recebera R$ ${troco.toFixed(2)} de troco.`)
}else{
  qtLivro = aux
  troco = valor - (qtLivro*35)
  console.log(`O Cliente pagará R$ ${(qtLivro*35).toFixed(2)} 
  por ${qtLivro} livro (s) e recebera R$ ${troco.toFixed(2)} de troco.`)
}
