const frm = document.querySelector("form")
const resp = document.querySelector("#outResp1")

frm.addEventListener("submit", (e)=>{
  e.preventDefault()
  let possuiNumero = false
  let forca = ""
  const senha = frm.inSenha.value
  for(let i = 0; i < senha.length; i++){
    const caractere = senha.charAt(i)
    if(!isNaN(caractere) && caractere !== " "){
      possuiNumero = true
      break
    }
  }
  forca = possuiNumero ? "Senha Forte!" : "Senha Fraca!"
  resp.innerText = forca
})