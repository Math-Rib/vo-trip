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
function ativarModoNoturno(){
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
function desavitarModoNoturno(){
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
    if (modoSalvo == 'ativado'){
        ativarModoNoturno();
    } else{
        desavitarModoNoturno();
    }
});

/* Ativa qnd o Usuário marca o checkbox */
temaCheckbox.addEventListener('change', () => {
    if(temaCheckbox.checked){
        ativarModoNoturno();
    } else {
        desavitarModoNoturno();
    }
});