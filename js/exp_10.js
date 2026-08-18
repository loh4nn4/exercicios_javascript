const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


let qtCompras = 0
let total = 0
let resposta = ""

frm.addEventListener("submit", (e)=>{
  e.preventDefault()
  const preco = Number(frm.inPreco.value)
  const desc = frm.inDesc.value
  qtCompras++
  total += preco
  resposta += desc + " - R$: " + preco.toFixed(2) + "\n"
  resp1.innerText = `${resposta}--------------------------`
  resp2.innerText = `Quantidade de itens: ${qtCompras} --- Total R$: ${total.toFixed(2)}`

  frm.inDesc.value = ""
  frm.inPreco.value = ""
  frm.inDesc.focus()
  
})