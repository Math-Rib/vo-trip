/* Declaração de Variáveis */

const btnAncora = document.querySelector('#btn-ancora'); // Armazenando o elemento do botão pelo id
const iconTopo = document.querySelector('#icon-ancora'); // Armazenando o elemento da imagem do botão pelo id
const perfil = document.querySelector('.perfil'); // Armazenando a classe o seletor pela classe
const menu = document.querySelector('.menu-dropdown');  // Armazenando o seletor do menu de dropdown pela classe
const body = document.querySelector('body'); // Armazenando o elemento body
const temaCheckbox = document.querySelector('#ckeckbox-dark-mode'); // Armazenando o elemento do checkbox pelo id
const btnRegiao = document.querySelector('#btn-regiao'); // Armazenando o botão de filtro região pelo id
const iconRegiao = document.querySelector('#img-regiao-padrao'); // Armazenando a imagem do botão de filtro região pelo id
const btnPais = document.querySelector('#btn-pais'); // Armazenando o botão de filtro país pelo id
const iconPais = document.querySelector('#img-pais-padrao'); // Armazenando a imagem do botão de filtro país pelo id
const btnCidade = document.querySelector('#btn-cidade'); // Armazenando o botão de filtro cidade pelo id
const iconCidade = document.querySelector('#img-cidade-padrao'); // Armazenando a imagem do botão de filtro cidade pelo id
const btnFavoritos = document.querySelector('#btn-favoritos'); // Armazenando o botão de filtro favoritos pelo id
const iconFavoritos = document.querySelector('#img-favoritos-padrao'); // Armazenando a imagem do botão de filtro favoritos pelo id
const setaDireita1 = document.querySelector('#seta-direita-1'); // Armazenando a imagem seta para direita 1 pelo id
const setaDireita2 = document.querySelector('#seta-direita-2'); // Armazenando a imagem seta para direita 2 pelo id
const favoritos1 = document.querySelector('.favoritos1'); // Armazenando a div do botão de favoritos pela classe
const favoritos2 = document.querySelector('.favoritos2'); // Armazenando a div do botão de favoritos pela classe
const favoritos3 = document.querySelector('.favoritos3'); // Armazenando a div do botão de favoritos pela classe
const favoritos4 = document.querySelector('.favoritos4'); // Armazenando a div do botão de favoritos pela classe
const favoritos5 = document.querySelector('.favoritos5'); // Armazenando a div do botão de favoritos pela classe
const favoritos6 = document.querySelector('.favoritos6'); // Armazenando a div do botão de favoritos pela classe
const btnFavoritos1 = document.querySelector('.btn-favoritos1'); // Armazenando o botão de favoritos pela classe
const btnFavoritos2 = document.querySelector('.btn-favoritos2'); // Armazenando o botão de favoritos pela classe
const btnFavoritos3 = document.querySelector('.btn-favoritos3'); // Armazenando o botão de favoritos pela classe
const btnFavoritos4 = document.querySelector('.btn-favoritos4'); // Armazenando o botão de favoritos pela classe
const btnFavoritos5 = document.querySelector('.btn-favoritos5'); // Armazenando o botão de favoritos pela classe
const btnFavoritos6 = document.querySelector('.btn-favoritos6'); // Armazenando o botão de favoritos pela classe
const iconFavoritosDesmarcado1 = document.querySelector('#favorito-desmarcado1'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosMarcado1= document.querySelector('#favorito-marcado1'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosDesmarcado2 = document.querySelector('#favorito-desmarcado2'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosMarcado2= document.querySelector('#favorito-marcado2'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosDesmarcado3 = document.querySelector('#favorito-desmarcado3'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosMarcado3= document.querySelector('#favorito-marcado3'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosDesmarcado4 = document.querySelector('#favorito-desmarcado4'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosMarcado4= document.querySelector('#favorito-marcado4'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosDesmarcado5 = document.querySelector('#favorito-desmarcado5'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosMarcado5= document.querySelector('#favorito-marcado5'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosDesmarcado6 = document.querySelector('#favorito-desmarcado6'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const iconFavoritosMarcado6= document.querySelector('#favorito-marcado6'); // Armazenando a imagem desmarcada do botão favoritos pelo id
const overlay = document.querySelector('#popupOverlay'); // Armazenando a overlay do Pop-up pelo id
const closeBtn = document.querySelector('#closePopup'); // Armazenando o botão do fechar pop-up pelo id
const descEspecial = document.querySelector('.descEspecial'); // Armazena o título do desconto especial pela classe
const btnDesconto = document.querySelector('.btn-desconto'); // Armazena o botão quero meu desconto pela classe
const btnCupom = document.querySelector('.btn-cupom'); // Armazena o botão de Cupons pela classe
const iconCupom = document.querySelector('#icon-cupom') // Armazena o elemento da imagem do botão de cupons pelo id

let menuAtivo = false; //O menu dropdown inicia desativado


/* Caminhos das Imagens */

const iconeAncoraPadrao = './assets/img/icones/icone_ancora_padrao.png'; // Variável armazenando o caminho da imagem da âncora padrão
const iconeAncoraHover = './assets/img/icones/icone_ancora_hover.png'; // Variável armazenando o caminho da imagem da âncora ao passar o mouser por cima
const iconeRegiaoPadrao = './assets/img/icones/icone_local.png'; // Variável armazenando o caminho da imagem do botão de filtro região padrão
const iconeRegiaoDarkMode = './assets/img/icones/icone_local_branco.png'; // Variável armazenando o caminho da imagem do botão de filtro região no modo noturno
const iconePaisPadrao = './assets/img/icones/icone_pais.png'; // Variável armazenando o caminho da imagem do botão de filtro país padrão
const iconePaisDarkMode = './assets/img/icones/icone_pais_branco.png'; // Variável armazenando o caminho da imagem do botão de filtro país no modo noturno
const iconeCidadePadrao = './assets/img/icones/icone_cidade.png'; // Variável armazenando o caminho da imagem do botão de filtro cidade padrão
const iconeCidadeDarkMode = './assets/img/icones/icone_cidade_branco.png'; // Variável armazenando o caminho da imagem do botão de filtro cidade no modo noturno
const iconeFavoritosPadrao = './assets/img/icones/icone_favoritos.png'; // Variável armazenando o caminho da imagem do botão de filtro favoritos padrão
const iconeFavoritosDarkMode = './assets/img/icones/icone_favoritos_branco.png'; // Variável armazenando o caminho da imagem do botão de filtro favoritos no modo noturno
const iconeFavoritosDesmarcadoPadrao = './assets/img/icones/icone_favoritos_desmarcado.png'; // Variável armazenando o caminho da imagem favoritos padrão
const iconeFavoritosDesmarcadoDarkMode = './assets/img/icones/icone_favoritos_branco.png'; // Variável armazenando o caminho da imagem favoritos no modo noturno
const iconeSetaDireitaPadrao = './assets/img/icones/icone_seta_direita.png'; // Variável armazenando o caminho da imagem seta para direita padrão
const iconeSetaDireitaDarkMode = './assets/img/icones/icone_seta_direita_branco.png'; // Variável armazenando o caminho da imagem seta para direita no modo noturno 

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
    btnRegiao.style.backgroundColor = '#1f1f1f';
    btnRegiao.style.color = 'white';
    iconRegiao.src = iconeRegiaoDarkMode;
    btnPais.style.backgroundColor = '#1f1f1f';
    btnPais.style.color = 'white';
    iconPais.src = iconePaisDarkMode;
    btnCidade.style.backgroundColor = '#1f1f1f';
    btnCidade.style.color = 'white';
    iconCidade.src = iconeCidadeDarkMode;
    btnFavoritos.style.backgroundColor = '#1f1f1f';
    btnFavoritos.style.color = 'white';
    descEspecial.style.color = 'black';
    iconFavoritos.src = iconeFavoritosDarkMode;
    setaDireita1.src = iconeSetaDireitaDarkMode;
    setaDireita2.src = iconeSetaDireitaDarkMode;
    favoritos1.style.backgroundColor = '#1f1f1f';
    favoritos2.style.backgroundColor = '#1f1f1f';
    favoritos3.style.backgroundColor = '#1f1f1f';
    favoritos4.style.backgroundColor = '#1f1f1f';
    favoritos5.style.backgroundColor = '#1f1f1f';
    favoritos6.style.backgroundColor = '#1f1f1f';
    iconFavoritosDesmarcado1.src = iconeFavoritosDesmarcadoDarkMode;
    iconFavoritosDesmarcado2.src = iconeFavoritosDesmarcadoDarkMode;
    iconFavoritosDesmarcado3.src = iconeFavoritosDesmarcadoDarkMode;
    iconFavoritosDesmarcado4.src = iconeFavoritosDesmarcadoDarkMode;
    iconFavoritosDesmarcado5.src = iconeFavoritosDesmarcadoDarkMode;
    iconFavoritosDesmarcado6.src = iconeFavoritosDesmarcadoDarkMode;
    temaCheckbox.checked = true; //Marca o checkbox
    localStorage.setItem('modoNoturno', 'ativado');
}

/* Desativar Modo Noturno */
function desavitarModoNoturno(){
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    btnRegiao.style.backgroundColor = 'white';
    btnRegiao.style.color = 'black';
    iconRegiao.src = iconeRegiaoPadrao;
    btnPais.style.backgroundColor = 'white';
    btnPais.style.color = 'black';
    iconPais.src = iconePaisPadrao;
    btnCidade.style.backgroundColor = 'white';
    btnCidade.style.color = 'black';
    iconCidade.src = iconeCidadePadrao;
    btnFavoritos.style.backgroundColor = 'white';
    btnFavoritos.style.color = 'black';
    descEspecial.style.color = 'black';
    iconFavoritos.src = iconeFavoritosPadrao;
    setaDireita1.src = iconeSetaDireitaPadrao;
    setaDireita2.src = iconeSetaDireitaPadrao;
    favoritos1.style.backgroundColor = 'white';
    favoritos2.style.backgroundColor = 'white';
    favoritos3.style.backgroundColor = 'white';
    favoritos4.style.backgroundColor = 'white';
    favoritos5.style.backgroundColor = 'white';
    favoritos6.style.backgroundColor = 'white';
    iconFavoritosDesmarcado1.src = iconeFavoritosDesmarcadoPadrao;
    iconFavoritosDesmarcado2.src = iconeFavoritosDesmarcadoPadrao;
    iconFavoritosDesmarcado3.src = iconeFavoritosDesmarcadoPadrao;
    iconFavoritosDesmarcado4.src = iconeFavoritosDesmarcadoPadrao;
    iconFavoritosDesmarcado5.src = iconeFavoritosDesmarcadoPadrao;
    iconFavoritosDesmarcado6.src = iconeFavoritosDesmarcadoPadrao;
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

btnFavoritos1.addEventListener('click', () =>{
    if(iconFavoritosDesmarcado1.style.display == 'none'){
        iconFavoritosDesmarcado1.style.display = 'block';
        iconFavoritosMarcado1.style.display = 'none';
    } else{
        iconFavoritosDesmarcado1.style.display = 'none';
        iconFavoritosMarcado1.style.display = 'block';
    }
});

btnFavoritos2.addEventListener('click', () =>{
    if(iconFavoritosDesmarcado2.style.display == 'none'){
        iconFavoritosDesmarcado2.style.display = 'block';
        iconFavoritosMarcado2.style.display = 'none';
    } else{
        iconFavoritosDesmarcado2.style.display = 'none';
        iconFavoritosMarcado2.style.display = 'block';
    }
});

btnFavoritos3.addEventListener('click', () =>{
    if(iconFavoritosDesmarcado3.style.display == 'none'){
        iconFavoritosDesmarcado3.style.display = 'block';
        iconFavoritosMarcado3.style.display = 'none';
    } else{
        iconFavoritosDesmarcado3.style.display = 'none';
        iconFavoritosMarcado3.style.display = 'block';
    }
});

btnFavoritos4.addEventListener('click', () =>{
    if(iconFavoritosDesmarcado4.style.display == 'none'){
        iconFavoritosDesmarcado4.style.display = 'block';
        iconFavoritosMarcado4.style.display = 'none';
    } else{
        iconFavoritosDesmarcado4.style.display = 'none';
        iconFavoritosMarcado4.style.display = 'block';
    }
});

btnFavoritos5.addEventListener('click', () =>{
    if(iconFavoritosDesmarcado5.style.display == 'none'){
        iconFavoritosDesmarcado5.style.display = 'block';
        iconFavoritosMarcado5.style.display = 'none';
    } else{
        iconFavoritosDesmarcado5.style.display = 'none';
        iconFavoritosMarcado5.style.display = 'block';
    }
});

btnFavoritos6.addEventListener('click', () =>{
    if(iconFavoritosDesmarcado6.style.display == 'none'){
        iconFavoritosDesmarcado6.style.display = 'block';
        iconFavoritosMarcado6.style.display = 'none';
    } else{
        iconFavoritosDesmarcado6.style.display = 'none';
        iconFavoritosMarcado6.style.display = 'block';
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