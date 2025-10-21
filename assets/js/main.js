/* Declaração de Variáveis */

const btnAncora = document.querySelector('#btn-ancora'); // Armazenando o elemento do botão pelo id
const iconTopo = document.querySelector('#icon-ancora'); // Armazenando o elemento da imagem do botão pelo id
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

let menuAtivo = false; //O menu dropdown inicia desativado


/* Caminhos das Imagens */

const iconeAncoraPadrao = './assets/img/icones/icone_ancora_padrao.png'; // Variável armazenando o caminho da imagem da âncora padrão
const iconeAncoraHover = './assets/img/icones/icone_ancora_hover.png'; // Variável armazenando o caminho da imagem da âncora ao passar o mouser por cima

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
        btnAncora.style.bottom = '8.5rem'; 
    } else {
        btnAncora.style.position = 'fixed'; // Caso não esteja no fim da página, fixa ele com relação ao fundo da tela
        btnAncora.style.bottom = '1.5rem';
    }
});

/* Trocando os Icones */

btnAncora.addEventListener('mouseenter', () =>{ // Criando uma função direcional através do evento passar o mouse em cima(hover)
    iconTopo.src = iconeAncoraHover; // Troca o caminho da imagem para a imagem hover
});

btnAncora.addEventListener('mouseleave', () =>{ // Criando uma função direcional através do evento quando o mouse sai de cima do botão
    iconTopo.src = iconeAncoraPadrao; //Troca o caminho da imagem para a imagem padrão
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