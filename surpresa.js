let inputUm = document.getElementById("um")
let inputDois = document.getElementById("dois")
let inputTres = document.getElementById("tres")
let inputQuatro = document.getElementById("quatro")
let interrogacao = document.getElementsByTagName("img")
let paragrafo = document.getElementsByTagName("p")
let video = document.getElementsByTagName("video")
let botao = document.getElementsByTagName("button")
console.log(paragrafo)

function fade(){
    interrogacao[0].setAttribute("data-fade", "fade_out");
    // interrogacao[1].setAttribute("data-fade", "fade_in");
    video[0].setAttribute("data-fade", "fade_in");
    paragrafo[0].setAttribute('data-fade', 'fade_out')
    botao[0].setAttribute('data-fade', 'fade_out')
}


function verificar(){
    if(inputUm.value == "avanço"
         && inputDois.value == "maior" 
         && inputTres.value == "ontem" 
         && inputQuatro.value == "amanhã"){
        fade()
    }
}

