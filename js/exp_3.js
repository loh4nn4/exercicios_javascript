/*Objetivo: Usar operadores lógicos (&&, ||) e condições aninhadas.
Para construir um triângulo, cada lado deve ser menor que a soma dos
outros dois. Crie um programa que leia três lados (A, B e C) e:
Verifique se eles podem formar um triângulo.
Se puderem, identifique o tipo:
Equilátero: 3 lados iguais.
Isósceles: 2 lados iguais.
Escaleno: 3 lados diferentes.
Se não puderem formar um triângulo, exiba: "Os lados não podem formar um triângulo".
*/

const prompt = require("prompt-sync")()
console.log(`-x-x-x-x-x----Construindo um Triangulo----x-x-x-x-x-`)
const a = Number(prompt("Lado A: "))
const b = Number(prompt("Lado B: "))
const c = Number(prompt("Lado C: "))
if(a<=b+c && b<=c+a && c<=a+b){
  let tipo
  switch(true){
    case a == b && a == c && b == c:
      tipo = `Equilatero`
      break;

    case a == b || a == c || b == c:
      tipo = `Isosceles`
      break;

    default:
      tipo = `Escaleno`
  }
  console.log(`O tipo do Triangulo é ${tipo}.`)
}else{
  console.log(`Os lados não podem formar um triangulo.`)
}