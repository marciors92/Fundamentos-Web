/*
Case Sensitive = reconhece letras maiúscilas e minúsculas

por Tag: getElementByIdName()
por Id: getElemntById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        let nomeOk = true
    }
}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.')) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        let emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        textAssunto.innerHTML = 'Texto é muito extenso, digite no máx 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else {
        textAssunto.style.display = 'none'
        let assuntoOk = true
    }
}

function enviar()
if(nomeOk == true && emailOk == true && assuntoOk == true) {
    alert ('Formulário enviado com sucesso!')
}
else {
    alert ('Preencha o formulário corretamente antes de enviá-lo...')
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.length = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.length = '250px'
}