/*Uma escola de informática tem laboratórios que comportam,
no máximo, 15 alunos. A escola quer um programa que ajude a
organizar as turmas de acordo com o número de alunos matriculados
em uma disciplina. 
-Cada turma deve ter, preferencialmente, 15 alunos.
-O número máximo de turmas que a escola pode abrir simultaneamente é 4.*/

const prompt = require("prompt-sync")()
console.log(`------Organização de Alunos------`)
const alunos = Number(prompt(`Alunos matriculados: `))
const aux = Math.ceil(alunos/15)//arredonda para cima em caso de .5
let resto, auxResto, turmas
if(aux==0){
  turmas = 0
  resto = 0
  auxResto = 0
}else if(aux>4){
  turmas = 4
  auxResto = 15 * turmas
  resto = alunos - auxResto
}else{
  turmas = aux
  auxResto = 15 * turmas
  resto = auxResto - alunos
}
console.log(`Serão necessárias ${turmas} turmas de 15 alunos.`)
if(alunos == 0){
  console.log(`Não é possivel formar turmas sem alunos.`)
}else if(auxResto > alunos){
  console.log(`Faltarão ${resto} alunos para completar a proxima turma.`)
}else{
  console.log(`Sobrarão ${resto} alunos para a proxima matricula.`)
}