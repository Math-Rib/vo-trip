const body = document.body;
const temaCheckbox = document.querySelector('#ckeckbox-dark-mode'); // Armazenando o elemento do checkbox pelo id
const btnVoltar = document.querySelector('.btn-voltar'); // Armazenando o botão de retorno pela classe

/* Caminhos das Imagens */
const btnVoltarPadrao = './assets/img/icones/icone_voltar_cinza.png';
const btnVoltarDarkMode = './assets/img/icones/icone_voltar_branco.png';

/* Ativar Modo Noturno */
function ativarModoNoturno(){
    body.style.backgroundColor = '#1f1f1f';
    body.style.color = 'white';
    btnVoltar.src = btnVoltarDarkMode;
    temaCheckbox.checked = true; //Marca o checkbox
    localStorage.setItem('modoNoturno', 'ativado');
}

/* Desativar Modo Noturno */
function desavitarModoNoturno(){
    body.style.backgroundColor = '#dfdfdf';
    body.style.color = 'black';
    btnVoltar.src = btnVoltarPadrao;
    temaCheckbox.checked = false; //Desmarca o checkbox
    localStorage.setItem('modoNoturno', 'desativado');
}

/* Verifica o tema salvo no localStorage */
const modoSalvo = localStorage.getItem('modoNoturno');
if (modoSalvo === 'ativado') {
  ativarModoNoturno();
} else {
  desavitarModoNoturno();
  
}

/* Escuta mudanças no checkbox */
temaCheckbox.addEventListener('change', () => {
  if (temaCheckbox.checked) {
    ativarModoNoturno();
  } else {
    desavitarModoNoturno();
  }
});