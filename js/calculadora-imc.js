const botao_calculo = document.getElementById("btn_altura")
const botao_limpar = document.getElementById("btn_Limpar")
const paragrafo_resposta = document.getElementById("resposta")

const magreza1 = document.getElementById("magreza")
const normal2 = document.getElementById("normal")
const sobrepeso3 = document.getElementById("sobrepeso")
const obesidade4 = document.getElementById("obesidade")
const obesidade_G5 = document.getElementById("obesidade-grave")

const paragrafo_campo_vazio = document.getElementById("campo-vazio")

function calculo() {

    magreza1.setAttribute("class", "classificacao")
    normal2.setAttribute("class", "classificacao")
    sobrepeso3.setAttribute("class", "classificacao")
    obesidade4.setAttribute("class", "classificacao")
    obesidade_G5.setAttribute("class", "classificacao")
    paragrafo_campo_vazio.innerText = ""

    const altura = document.getElementById("altura_usuario").value
    const peso = document.getElementById("peso_usuario").value
    const imc = (peso / (altura ** 2)).toFixed(2)

    if (altura == "" || peso == "") {
        paragrafo_campo_vazio.innerText = `Campo vazio. Por favor, verifique.`
    } else if (Number(imc) < 18.5) {
        paragrafo_resposta.innerText = `${imc}`
        magreza1.setAttribute("class", "classificacao-obsedidade")
    } else if (Number(imc) >= 18.6 && Number(imc) <= 24.9) {
        paragrafo_resposta.innerText = `${imc}`
        normal2.setAttribute("class", "classificacao-obsedidade")
    } else if (Number(imc) >= 25 && Number(imc) <= 29.9) {
        paragrafo_resposta.innerText = `${imc}`
        sobrepeso3.setAttribute("class", "classificacao-obsedidade")
    } else if (Number(imc) >= 30 && Number(imc) <= 39.9) {
        paragrafo_resposta.innerText = `${imc}`
        obesidade4.setAttribute("class", "classificacao-obsedidade")
    } else {
        paragrafo_resposta.innerText = `${imc}`
        obesidade_G5.setAttribute("class", "classificacao-obsedidade")
    }
}

botao_calculo.addEventListener('click', calculo)

function limpar() {
    document.location.reload()
}

botao_limpar.addEventListener("click", limpar)