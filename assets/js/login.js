const body = document.body;
const temaCheckbox = document.querySelector('#ckeckbox-dark-mode'); // Armazenando o elemento do checkbox pelo id
const tituloForm = document.querySelector('.título-form'); // Armazenando o título do formulario pela classe
const btnVoltar = document.querySelector('.btn-voltar'); // Armazenando o botão de retorno pela classe
const paragrafo = document.querySelector('.paragrafo'); // Armazenando o paragrafo pela classe
const labelCheckbox = document.querySelector('.checkbox-label'); // Armazenando o label do checkbox pelo id
const btnSenha = document.querySelector('.btn-senha'); // Armazenando o link de esqueci a senha pela classe
const btnCadastre = document.querySelector('.btn-cadastre'); // Armazenando o botão cadastre-se pela classe

/* Caminhos das Imagens */
const btnVoltarPadrao = './assets/img/icones/icone_voltar_cinza.png';
const btnVoltarDarkMode = './assets/img/icones/icone_voltar_branco.png';

/* Ativar Modo Noturno */
function ativarModoNoturno() {
    body.style.backgroundColor = '#1f1f1f';
    tituloForm.style.color = 'white';
    btnVoltar.src = btnVoltarDarkMode;
    paragrafo.style.color = 'white';
    labelCheckbox.style.color = 'white';
    btnSenha.style.color = 'white';
    btnCadastre.style.color = '#2a86d1ff';
    temaCheckbox.checked = true; //Marca o checkbox
    localStorage.setItem('modoNoturno', 'ativado');
}

/* Desativar Modo Noturno */
function desavitarModoNoturno() {
    body.style.backgroundColor = '#dfdfdf';
    tituloForm.style.color = 'black';
    btnVoltar.src = btnVoltarPadrao;
    paragrafo.style.color = 'black';
    labelCheckbox.style.color = '#555';
    btnSenha.style.color = '#555';
    btnCadastre.style.color = '#2a86d1ff';
    temaCheckbox.checked = false; //Desmarca o checkbox
    localStorage.setItem('modoNoturno', 'desativado');
}

/* Verifica o tema salvo no localStorage */
document.addEventListener('DOMContentLoaded', () => {
    const modoSalvo = localStorage.getItem('modoNoturno');
    if (modoSalvo == 'ativado') {
        ativarModoNoturno();
    } else {
        desavitarModoNoturno();
    }
});

/* Ativa qnd o Usuário marca o checkbox */
temaCheckbox.addEventListener('change', () => {
    if (temaCheckbox.checked) {
        ativarModoNoturno();
    } else {
        desavitarModoNoturno();
    }
});

// Selecionando elementos
const campos = document.querySelectorAll(".input-field")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const checkboxMostrarSenha = document.getElementById("check");
const form = document.querySelector(".form")
const spam = document.querySelectorAll(".span-required")
const popup = document.querySelector("#popup-sucesso")

// Mostrar/ocultar senha
checkboxMostrarSenha.addEventListener("change", () => {
    campos[1].type = checkboxMostrarSenha.checked ? "text" : "password";
});

function emailValid() {
    if (emailRegex.test(campos[0].value)) {
        removeErro(0);
        return true;
    } else {
        setErro(0);
        return false;
    }
}

function removeErro(index) {
    campos[index].style.boder = "1px solid red";
    spam[index].style.display = "none";
}

function setErro(index) {
    campos[index].style.boder = "1px solid black";
    spam[index].style.display = "block";
}

function senhaValid() {
    if (campos[1].value.length < 8) {
        setErro(1);
        return false;
    } else {
        removeErro(1);
        return true;
    }
}

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    emailValid();
    senhaValid();
    if(emailValid() && senhaValid()){
        mostrarPopupSecesso();
    }
})

function  mostrarPopupSecesso(){
    popup.style.display="flex";
    document.querySelector("#btn-popup-ok").onclick=()=>{
        popup.style.display="none";
        window.location.href="./index.html";
    }
}
