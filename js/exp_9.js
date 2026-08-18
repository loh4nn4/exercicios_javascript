const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let descricao = "Caixa - " //mensagem padrão a ser alocada no pre
let qtCaixa = 0 //var global para qt caixas
let resposta = "" //var auxiliar para receber as strings
let temCaixaPesada = false //var flag

frm.addEventListener("submit", (e)=>{
  e.preventDefault()
  const peso = Number(frm.inPeso.value)//pega o peso
  if(peso > 50){//verificar se tem alguma caixa acima de 50 kg
    temCaixaPesada = true
     resp2.innerText = `Lote Reprovado!`
     return
  } 
    qtCaixa++ //sempre que pegar o peso, add +1 caixa
    resposta += descricao + `${qtCaixa} = ${peso.toFixed(2)}\n`//organiza os dados inseridos em um var só
    resp1.innerText = `${resposta}----------------------------\n`//exibe na tela
    resp2.innerText = `Lote Aprovado!`
    frm.inPeso.value = " "//limpa o valor do peso inserido anteriormente
    frm.inPeso.focus()//retorna o cursor para dentro da caixa de dialogo principal
})
frm.addEventListener("reset",( )=>{//limpar apenas lote invalido
  resp2.innerText = " "
})