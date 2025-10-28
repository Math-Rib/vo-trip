/* Declaração de Variáveis */

const btnAncora = document.querySelector('#btn-ancora'); // Armazenando o elemento do botão pelo id
const iconAncora = document.querySelector('#icon-ancora'); // Armazenando o elemento da imagem do botão âncora pelo id
const perfil = document.querySelector('.perfil'); // Armazenando a classe o seletor pela classe
const menu = document.querySelector('.menu-dropdown');  // Armazenando o seletor do menu de dropdown pela classe
const body = document.body;
const temaCheckbox = document.querySelector('#ckeckbox-dark-mode'); // Armazenando o elemento do checkbox pelo id
const searchBar = document.querySelector('.search-bar'); // Armazenando a classe da barra de pesquisa
const inputDestino = document.querySelector('.input-destino'); // Armazenando a classe do campo destino da barra de pesquisa
const inputDataIn = document.querySelector('.input-data-in'); // Armazenando a classe do campo data check-in da barra de pesquisa
const inputDataOut = document.querySelector('.input-data-out'); // Armazenando a classe do campo data check-out da barra de pesquisa
const paragrafo = document.querySelector('.text') // Armazenando os paragrafos das sessões da página
const searchButton = document.querySelector('#search-button') // Armazenando o botão de pesquisar pela classe
const overlay = document.querySelector('#popupOverlay'); // Armazenando a overlay do Pop-up pelo id
const closeBtn = document.querySelector('#closePopup'); // Armazenando o botão do fechar pop-up pelo id
const descEspecial = document.querySelector('.descEspecial'); // Armazena o título do desconto especial pela classe
const btnDesconto = document.querySelector('.btn-desconto'); // Armazena o botão quero meu desconto pela classe
const btnCupom = document.querySelector('.btn-cupom'); // Armazena o botão de Cupons pela classe
const iconCupom = document.querySelector('#icon-cupom') // Armazena o elemento da imagem do botão de cupons pelo id

let menuAtivo = false; // O menu dropdown inicia desativado
let popupShown = false; // Variavel para mostrar/ esconder Pop-up

/* Caminhos das Imagens */
const iconeAncoraPadrao = './assets/img/icones/icone_ancora_padrao.png'; // Variável armazenando o caminho da imagem da âncora padrão
const iconeAncoraHover = './assets/img/icones/icone_ancora_hover.png'; // Variável armazenando o caminho da imagem da âncora ao passar o mouser por cima
const iconCupomPadrao = './assets/img/icones/icone_cupom_padrao.png'; // Variável armazenando o caminho da imagem do botão de cupom padrão
const iconCupomHover = './assets/img/icones/icone_cupom_hover.png'; // Variável armazenando o caminho da imagem  do botão de cupom ao passar o mouser por cima

/* Interação do Menu Dropdown do perfil */
perfil.addEventListener('click', () =>{  // Criando uma função direcional para altera a visibilidade do menu ao clicar
    menuAtivo = !menuAtivo; // Altera o menu entre true e false 
    if(menuAtivo == true){
        menu.style.display = 'block'; // Menu dropdown aparece
    } else{
        menu.style.display = 'none'; // Menu dropdown desaparece
    }
});

/* Efeitos do Botão */
window.addEventListener('scroll', () =>{ // Criando uma função direcional através do evento de rolar a página
    if(window.scrollY > 105){ // Se a página rolar mais de 100px para baixo
        btnAncora.style.display = 'block'; // block faz o botão aparecer
    } else{
        btnAncora.style.display = 'none'; // none faz o botão ficar escondido
    }

    // Checando se está no final da página
    const scrollBottom = window.innerHeight + window.scrollY; // innerHeight é a tela visivel e o scrollY é o quanto foi rolado
    const documentHeight = document.documentElement.offsetHeight; // Pega a altura total da página

    if (scrollBottom >= documentHeight - 10) { // Verifica se a parte de baixo da tela está a 10px ou menos do fim da tela
        btnAncora.style.position = 'fixed'; // Caso esteja no fim da página, fixa ele com relação ao rodapé
        btnAncora.style.bottom = '8.5em'; 
        // btnCupom.style.bottom = '6.5em'; 
    } else {
        btnAncora.style.position = 'fixed'; // Caso não esteja no fim da página, fixa ele com relação ao fundo da tela
        btnAncora.style.bottom = '1.5em';
        // btnCupom.style.bottom = '-0.05em';
    }
});

/* Trocando os Icones */
btnAncora.addEventListener('mouseenter', () =>{ // Criando uma função direcional através do evento passar o mouse em cima(hover)
    iconAncora.src = iconeAncoraHover; // Troca o caminho da imagem do botão âncora para a imagem hover
});

btnAncora.addEventListener('mouseleave', () =>{ // Criando uma função direcional através do evento quando o mouse sai de cima do botão
    iconAncora.src = iconeAncoraPadrao; //Troca o caminho da imagem do botão âncora para a imagem padrão
});

btnCupom.addEventListener('mouseenter', () => {
    iconCupom.src = iconCupomHover; // Troca o caminho da imagem do botão de cupom para a imagem hover
});

btnCupom.addEventListener('mouseleave', () => {
    iconCupom.src = iconCupomPadrao; // Troca o caminho da imagem do botão de cupom para a imagem padrão
});

/* Ativar Modo Noturno */
function ativarModoNoturno(){
    body.style.backgroundColor = '#1f1f1f';
    body.style.color = 'white';
    searchBar.style.backgroundColor = '#1f1f1f';
    inputDestino.style.backgroundColor = '#1f1f1f';
    inputDestino.classList.add('input-destino-personalizado');
    inputDataIn.style.backgroundColor = '#1f1f1f';
    inputDataIn.style.color = 'white';
    inputDataIn.classList.add('input-data-in-personalizado');
    inputDataOut.style.backgroundColor = '#1f1f1f';
    inputDataOut.style.color = 'white';
    inputDataOut.classList.add('input-data-out-personalizado');
    paragrafo.style.color = '#999';
    searchButton.classList.add('search-button-dark-mode');
    temaCheckbox.checked = true; //Marca o checkbox
    localStorage.setItem('modoNoturno', 'ativado');
    descEspecial.style.color = '#5e5e5eff';
}

/* Desativar Modo Noturno */
function desavitarModoNoturno(){
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    searchBar.style.backgroundColor = 'white';
    inputDestino.style.backgroundColor = 'white';
    inputDestino.style.color = 'black';
    inputDataIn.style.backgroundColor = 'white';
    inputDataIn.style.color = 'black';
    inputDataIn.classList.remove('input-data-in-personalizado');
    inputDataOut.style.backgroundColor = 'white';
    inputDataOut.style.color = 'black';
    inputDataOut.classList.remove('input-data-out-personalizado');
    paragrafo.style.color = '#999';
    inputDestino.classList.remove('input-destino-personalizado');
    searchButton.classList.remove('search-button-dark-mode');
    temaCheckbox.checked = false; //Desmarca o checkbox
    localStorage.setItem('modoNoturno', 'desativado');
}

/* Verifica o tema salvo no localStorage */
document.addEventListener('DOMContentLoaded', () => {
    const modoSalvo = localStorage.getItem('modoNoturno');
    btnCupom.style.display = 'block';
    btnCupom.style.position = 'fixed';
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

// Mostra o popup após 5 segundos
  setTimeout(() => {
    mostrarPopup();
  }, 5000);
 
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