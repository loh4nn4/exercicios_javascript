const prompt = require("prompt-sync")()

const produtos = ["Mouse", "Teclado", "Monitor"]
console.log("Produtos Iniciais: ", produtos)
console.log("Removendo Produto Quebrado: ", produtos.at(-1))//mostra o ultimo
produtos.pop()//remove o ultimo
produtos.unshift("Notebook")//add acima
const vitrine = produtos.slice(-2)//retorna um array com os dois ultimos
console.log("Vitrine dos Ultimos da Lista: ", vitrine)

/**Observação: 
 * console.log("Vitrine dos Ultimos da Lista: "+vitrine)
 * 
 * ao usar concatenação com +, o js aciona o toString() e transforma todo o
 * atributo do console.log (texto e concat da variável) em string.
 */