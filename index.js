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

        Mensagem.innerHTML = textoEscrito.value

        mostrarButton()
    }
}

function VerificarTexto(vericacao) {
    for (let i = 0; i < textoEscrito.value.length; i++) {
        let caractere = textoEscrito.value[i];

        if (caractere >= "A" && caractere <= "Z" || acentoRegex.test(caractere) === true) {
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