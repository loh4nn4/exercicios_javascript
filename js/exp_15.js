const prompt = require("prompt-sync")()

const ingredientes = ["Arroz", "Feijão", "Ovo", "Amendoim", "Batata"]
for(const ingrediente of ingredientes){
  if(ingrediente == "Amendoim"){
    console.log(`ALERTA! Este prato contém ${ingrediente}!`)
    break
  }
  else{
    console.log(`Ingrediente Verificado: ${ingrediente}`)
  }
}