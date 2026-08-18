/**Escreva um programa que leia a velocidade permitida em uma
 *  via e a velocidade de um condutor. Se a velocidade do condutor
 *  for menor ou igual à permitida, exiba: "Sem Multa". Se a 
 * velocidade for até 20% superior à permitida, exiba: "Multa Leve".
Se a velocidade for mais de 20% superior à permitida, exiba: "Multa Grave". */

const prompt = require("prompt-sync")()
const velVia = Number(prompt("Velocidade Maxima Permitida da via: "))
const velCondutor = Number(prompt("Velocidade do Condutor: "))
if(velCondutor <= velVia){
    console.log(`Sem Multa.`)
}else if (velCondutor <= (velVia*1.2)){
    console.log(`Multa Leve.`)
}else{
    console.log(`Multa Grave.`)
}