/* Declaração de Variáveis */

const btnAncora = document.getElementById('btn-ancora'); // Armazenando o elemento do botão pelo id
const iconTopo = document.getElementById('icon-ancora'); // Armazenando o elemento da imagem do botão pelo id
const perfil = document.querySelector('.perfil'); // Armazenando a classe o seletor pela classe
const menu = document.querySelector('.menu-dropdown');  // Armazenando o seletor do menu de dropdown pela classe

let menuAtivo = false; //O menu dropdown inicia desativado

/* Interação do Menu Dropdown do perfil */

perfil.addEventListener('click', () =>{  // Criando uma função direcional para altera a visibilidade do menu ao clicar
    menuAtivo = !menuAtivo; // Altera o menu entre true e false 
    if(menuAtivo == true){
        menu.style.display = 'block'; // Menu dropdown aparece
    } else{
        menu.style.display = 'none'; // Menu dropdown desaparece
    }
});

/* Caminhos das Imagens */

const iconePadrao = './assets/img/icones/icone_ancora_padrao.png'; // Variável armazenando o caminho da imagem padrão
const iconeHover = './assets/img/icones/icone_ancora_hover.png'; // Variável armazenando o caminho da imagem ao passar o mouser por cima

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
    iconTopo.src = iconeHover; // Troca o caminho da imagem para a imagem hover
});

btnAncora.addEventListener('mouseleave', () =>{ // Criando uma função direcional através do evento quando o mouse sai de cima do botão
    iconTopo.src = iconePadrao; //Troca o caminho da imagem para a imagem padrão
});