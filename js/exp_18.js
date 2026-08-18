const prompt = require("prompt-sync")()

const candidatos = []
candidatos.push(
  {nome:"Halaand", flexoes: 50, aprovado: true},
  {nome:"Neymar", flexoes: 2, aprovado: false}
)

candidatos.forEach((candidato, i)=>{
  console.log(`Candidato: [${candidato.nome}]
     | Flexões Realizadas:[${candidato.flexoes}] 
     | Status: [${candidato.aprovado == true ? "Aprovado" : "Reprovado"}]`)
})