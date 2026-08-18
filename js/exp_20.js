//Sistema de Gestão de Estoque e Precificação Dinâmica
const prompt = require("prompt-sync")()

const estoque = []
let precoNovo = 0
estoque.push(
  {id: 0o1, nome: "RAM_16GB" , categoria: "RAM" , precoBase: 625.00, quantidade: 42, tags: ["oferta", "importado", "seminovo"]},
  {id: 0o2, nome: "GigabyteB550M" , categoria: "Placa" , precoBase: 689.99, quantidade: 57, tags: ["promoção", "nacional", "novo"]},
  {id: 0o3, nome: "SSDA400" , categoria: "SSD" , precoBase: 414.99, quantidade: 39, tags: ["promoção", "importado", "seminovo"]},
  {id: 0o4, nome: "TGTH61", categoria: "Placa", precoBase: 129.99, quantidade: 11, tags: ["promoção", "nacional", "novo"]},
  {id: 0o5, nome: "FortrekAC13", categoria: "Cooler", precoBase: 68.93, quantidade: 5, tags: ["oferta", "nacional", "novo"]}
)

estoque.forEach((prod, i)=>{
  if(prod.categoria == "Placa" && prod.tags.includes("importado")){
    precoNovo += prod.precoBase * 1.35 //soma das porcentagens
    prod.precoBase = Math.round(precoNovo)
  }else{
    if(prod.categoria == "Placa"){
      precoNovo += prod.precoBase * 1.15
      prod.precoBase = Math.round(precoNovo)
    }else{
      if(prod.tags.includes("importado")){
        precoNovo += prod.precoBase * 1.20
        prod.precoBase = Math.round(precoNovo)
      }
    }
  }
})
