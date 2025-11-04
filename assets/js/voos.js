const main = document.querySelector('main');
const titulo = document.querySelector('.construcao-titulo'); 
const texto = document.querySelector('.construcao-texto');



/* Ativar Modo Noturno */
function ativarModoNoturno(){
    main.style.backgroundColor = '#1f1f1f';
    main.style.color = 'white';
    titulo.style.color = 'rgb(6, 11, 63)';
    texto.style.color = 'white';
    temaCheckbox.checked = true; //Marca o checkbox
    localStorage.setItem('modoNoturno', 'ativado');
}

/* Desativar Modo Noturno */
function desavitarModoNoturno(){
    main.style.backgroundColor = '#dfdfdf';
    main.style.color = 'black';
    titulo.style.color = 'rgb(6, 11, 63)';
    texto.style.color = 'rgb(100, 100, 100)';
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

// Mostra o popup após 2 segundos
setTimeout(() => {
    mostrarPopup();
}, 2000);
 
// Detecta intenção de saída (mouse vai para fora da tela)
document.addEventListener('mouseout', (e) => {
if (e.clientY < 0 && !popupShown) {
    mostrarPopup();
}
});

// Mostra o popup
function mostrarPopup() {
    overlay.style.display = 'flex';
    popupShown = true;
}

// Fecha o popup
function fecharPopup() {
    overlay.style.display = 'none';
}

closeBtn.addEventListener('click', fecharPopup);
overlay.addEventListener('click', (e) => {
if (e.target === overlay) {
    fecharPopup();
}
});

// Botão para redirecionar a página
btnDesconto.addEventListener('click', () => {
    window.location.href = './cadastro.html';
});