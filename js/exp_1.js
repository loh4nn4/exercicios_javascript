/**Crie um programa que leia o modelo de um veículo, 
 * o seu consumo de combustível (km/l) e a distância 
 * de uma viagem (em km). Calcule e exiba quantos 
 * litros de combustível serão necessários para 
 * completar a viagem. */
const prompt = require("prompt-sync")()
console.log(`Dados do veiculo`)
const modelo = prompt("Modelo: ")
const precGasolina = Number(prompt("Preço da gasolina: R$ "))
const consumo = Number(prompt("Consumo (km/l): "))
const distancia = Number(prompt("Distancia (km): "))
const litros = distancia/consumo
const gasto = litros * precGasolina
console.log(`O ${modelo} gastara ${litros.toFixed(2)}
litros para percorrer ${distancia} quilometros.`)
console.log(`Sera pago o total de R$ ${gasto.toFixed(2)} para completar
a viagem.`)