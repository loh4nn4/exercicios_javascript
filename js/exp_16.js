const prompt = require("prompt-sync")()

const precos = [10.5, 25.0, 40.99, 5.0]

precos.forEach((preco, i) =>{
  console.log(`Produto ${i+1}: R$ ${preco.toFixed(2)}`)
})