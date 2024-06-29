let botãoClicavel = document.querySelector('botao-criptografar')
let textoEscrito = document.querySelector('.area-escrever-texto')
let conteudoModal = document.querySelector(".area-modal_imagem_imagem")
let conteudoMensagem = document.querySelector(".titulo_area_modal")
let Mensagem = document.querySelector(".paragrafo_area_modal")
let buttonCopiar = document.querySelector(".copiar")


function botaoClicavel() {
    console.log(textoEscrito.value)
    conteudoModal.style.display = 'none'
    conteudoMensagem.style.display = 'none'
    Mensagem.innerHTML = textoEscrito.value

    mostrarButton()
}

function mostrarButton() {
    buttonCopiar.style.display = 'block'
}

function copiarTexto() {
    console.log('botão clicado')
    navigator.clipboard.writeText(textoEscrito.value).catch(function (error) {

    })
}