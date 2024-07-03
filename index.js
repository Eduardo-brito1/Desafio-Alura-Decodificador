let botãoClicavel = document.querySelector('botao-criptografar')
let textoEscrito = document.querySelector('.area-escrever-texto')
let conteudoModal = document.querySelector(".area-modal_imagem")
let conteudoMensagem = document.querySelector(".titulo_area_modal")
let Mensagem = document.querySelector(".paragrafo_area_modal")
let buttonCopiar = document.querySelector(".copiar")

let textoCopiado = ''

let acentoRegex = /[áàâãäéèêëíìîïóòôõöúùûüçÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇ]/

function botãoCriptografar() {
    if (VerificarTexto() === true) {
        alert('não pode enviar letra maiuscula ou acentos')
    } else {
        conteudoModal.style.display = 'none'
        conteudoMensagem.style.display = 'none'
        let textoCodificado = codificarTexto()
        textoEscrito.value = textoCodificado

        Mensagem.innerHTML = textoCodificado
        textoCopiado = textoCodificado
        copiarTexto()


        mostrarButton()
    }
    return textoEscrito.value = "digite seu texto"
}
function copiarTexto() {
    console.log('botão clicado')
    navigator.clipboard.writeText(textoCopiado).catch(function (error) {
        consoole.error('Erro ao copiar texto: ', error);

    })
}



function codificarTexto() {
    let novoTexto = ''

    for (let i = 0; i < textoEscrito.value.length; i++) {
        let valorDigitado = textoEscrito.value
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

    return novoTexto
}

function botaoDescriptografar() {
    if (VerificarTexto() === true) {
        alert('não pode enviar letra maiuscula ou acentos')
    } else {
        conteudoModal.style.display = 'none'
        conteudoMensagem.style.display = 'none'
        textoEscrito.value = descodificarTexto()
        textoCopiado = textoEscrito.value

        Mensagem.innerHTML = textoEscrito.value
        copiarTexto()
        mostrarButton()
    }
    return textoEscrito.value = "digite seu texto"

}
function descodificarTexto() {
    let novoTexto = ''

    let valorDigitado = textoEscrito.value

    if (valorDigitado.includes('ai') || valorDigitado.includes('enter') ||
        valorDigitado.includes('imes') || valorDigitado.includes('ober') ||
        valorDigitado.includes('ufat')) {

        novoTexto = valorDigitado.
            replace(/ai/g, "a").
            replace(/enter/g, "e").
            replace(/imes/g, 'i').
            replace(/ober/g, "o").
            replace(/ufat/g, "u")
    }
    else {
        novoTexto = novoTexto + valorDigitado[i]
    }
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
