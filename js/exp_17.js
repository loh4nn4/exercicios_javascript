const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const resp2 = document.querySelector("span");
const treinos = []
const treinosConcluidos = []

//função para manipular dados redundantes
const atualizarTela = () =>{
  let resposta = ""
  treinos.forEach((treino,i)=>{
    resposta += `${i+1}º Exercicio: ${treino}\n`
  })
  resp.innerText = resposta + "\n ------------------------------------- "
}

//evento para add exercicio
frm.addEventListener("submit", (e)=>{
  e.preventDefault();

  const nomeTreino = frm.inExercicio.value
  treinos.push(nomeTreino)
  atualizarTela();
  frm.inExercicio.value = ""
  frm.inExercicio.focus()
})

//evento para remover o primeiro treino da lista
frm.btnConcluir.addEventListener("click", ()=>{
  if(treinos.length === 0){//verifca se a lista esta vazia
    alert(`ERRO! Insira um nome no campo.`)
    return
  }
  const remFirst = treinos.shift()
  treinosConcluidos.push(remFirst)
  let respostaConcluidos = ""
  treinosConcluidos.forEach(concluido => respostaConcluidos += `${concluido}\n`)
  atualizarTela();
  resp2.innerText = respostaConcluidos
  frm.inExercicio.value = ""
  frm.inExercicio.focus()
})

//evento para excluir o ultimo treino da lista.
frm.btnExcluir.addEventListener("click", ()=>{
  const remLast = treinos.pop()
  atualizarTela();
  frm.inExercicio.value = ""
  frm.inExercicio.focus()
})

//evento para limpar os campos da pagina
frm.addEventListener("reset", ()=>{
  resp.innerText = ""
  resp2.innerText = ""
})