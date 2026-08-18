const prompt = require("prompt-sync")()

const candidatos = []
let maiorFlexoes = 0 //declarar com type let, pois o conteudo será modificado
let somaFlexoes = 0

candidatos.push(//inserção de dados no vetor de objetos
  {nome:"Halaand", flexoes: 50, aprovado: true},
  {nome:"Neymar", flexoes: 2, aprovado: false}
)
//manipulação de dados com funções
candidatos.forEach(candidato => {somaFlexoes += candidato.flexoes})

for (const candidato of candidatos){
  maiorFlexoes = Math.max(maiorFlexoes, candidato.flexoes)//retorna o maior valor entre os dois parametros
}
//
console.log(`O maior numero de flexões registrados foi: ${maiorFlexoes}`)
console.log(`A média de flexões e realizadas é: [${Math.ceil(somaFlexoes/candidatos.length)}]`)