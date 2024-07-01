let botãoClicavel = document.querySelector('botao-criptografar')
let textoEscrito = document.querySelector('.area-escrever-texto')
let conteudoModal = document.querySelector(".area-modal_imagem_imagem")
let conteudoMensagem = document.querySelector(".titulo_area_modal")
let Mensagem = document.querySelector(".paragrafo_area_modal")
let buttonCopiar = document.querySelector(".copiar")

let acentoRegex = /[áàâãäéèêëíìîïóòôõöúùûüçÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇ]/

function botaoClicavel() {
    if (VerificarTexto() === true) {
        alert('não pode enviar letra maiuscula ou acentos')
    } else {
        conteudoModal.style.display = 'none'
        conteudoMensagem.style.display = 'none'
        textoEscrito.value = codificarTexto()

        Mensagem.innerHTML = textoEscrito.value
        textoEscrito.value = '';

        mostrarButton()

    }
}


function codificarTexto() {
    let novoTexto = ''

    for (let i = 0; i < textoEscrito.value.length; i++) {
        let valorDigitado = textoEscrito.value
        console.log(valorDigitado)
        if (valorDigitado[i] === 'a') {
            novoTexto = novoTexto + "ai"
        } else if (valorDigitado[i] === 'e') {
            novoTexto = novoTexto + 'enter'
        } else if (valorDigitado[i] === 'i') {
            novoTexto = novoTexto + 'imes'
        } else if (valorDigitado[i] === 'o') {
            novoTexto = novoTexto + 'ober'
        } else if (valorDigitado[i] === 'u') {
            novoTexto = novoTexto + 'ufat'
        } else {
            novoTexto = novoTexto + valorDigitado[i]
        }
    }
    console.log(novoTexto)

    return novoTexto
}



function VerificarTexto(vericacao) {


    for (let i = 0; i < textoEscrito.value.length; i++) {
        let char = textoEscrito.value[i];

        if (char >= "A" && char <= "Z" || acentoRegex.test(char) === true) {
            vericacao = true
        }
    }
    return vericacao
}


function mostrarButton() {
    buttonCopiar.style.display = 'block'
}

function copiarTexto() {
    console.log('botão clicado')
    navigator.clipboard.writeText(textoEscrito.value).catch(function (error) {

    })
}