/* Declaração de Variáveis */
const perfil = document.querySelector('.perfil'); // Armazenando a classe o seletor pela classe
const menu = document.querySelector('.menu-dropdown');  // Armazenando o seletor do menu de dropdown pela classe
const body = document.querySelector('body'); // Armazenando o corpo da página
const main = document.querySelector('main'); // Armazenando o conteúdo principal do corpo da página
const contatoContainer = document.querySelector('.contact-container'); // Armazenando o container de contato
const tituloForm = document.querySelector('#titulo-form'); // Armazenando o título do formulário
const labelNome = document.querySelector('#label-nome'); // Armazenando o label do formulário
const labelEmail = document.querySelector('#label-email'); // Armazenando o label do formulário
const labelAssunto = document.querySelector('#label-assunto'); // Armazenando o label do formulário
const labelMensagem = document.querySelector('#label-mensagem'); // Armazenando o label do formulário
const btnAncora = document.querySelector('#btn-ancora'); // Armazenando o elemento do botão pelo id
const iconAncora = document.querySelector('#icon-ancora'); // Armazenando o elemento da imagem do botão âncora pelo id
const temaCheckbox = document.querySelector('#checkbox-dark-mode'); // Armazenando o elemento do checkbox pelo id
const form = document.querySelector('#form'); // Armazendo o formulário
const campos = document.querySelectorAll('.required'); // Armazenando todos os campos com a classe required
const span = document.querySelectorAll('.span-required'); // Armazenando todos os span com a classe span-required, a frase quando o campo não estiver correto
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Variável armazenando a validação de todos os caracteres do email
const campoNome = document.querySelector('.campo-nome'); // Armazenando o campo nome pela classe
const campoEmail = document.querySelector('.campo-email'); // Armazenando o campo email pela classe
const campoAssunto = document.querySelector('.campo-assunto'); // Armazenando o campo assunto pela classe
const campoMensagem = document.querySelector('.campo-mensagem'); // Armazenando o campo mensagem pela classe

let menuAtivo = false; // O menu dropdown inicia desativado

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
        btnAncora.style.bottom = '9.5em'; 
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

/* Ativar Modo Noturno */
function ativarModoNoturno(){
    body.style.backgroundColor = '#1f1f1f';
    body.style.color = 'white';
    main.style.backgroundColor = '#1f1f1f';
    contatoContainer.style.backgroundColor = '#1f1f1f';
    contatoContainer.style.boxShadow = '0px 5px 10px 1px black';
    tituloForm.style.color = 'white';
    labelNome.style.color = 'white';
    labelEmail.style.color = 'white';
    labelAssunto.style.color = 'white';
    labelMensagem.style.color = 'white';
    temaCheckbox.checked = true; //Marca o checkbox
    localStorage.setItem('modoNoturno', 'ativado');
}

/* Desativar Modo Noturno */
function desativarModoNoturno(){
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    main.style.backgroundColor = 'white';
    contatoContainer.style.backgroundColor = 'white';
    contatoContainer.style.boxShadow = '0px 5px 10px 1px black';
    tituloForm.style.color = 'black';
    labelNome.style.color = 'black';
    labelEmail.style.color = 'black';
    labelAssunto.style.color = 'black';
    labelMensagem.style.color = 'black';
    temaCheckbox.checked = false; //Desmarca o checkbox
    localStorage.setItem('modoNoturno', 'desativado');
}

/* Verifica o tema salvo no localStorage */
document.addEventListener('DOMContentLoaded', () => {
    const modoSalvo = localStorage.getItem('modoNoturno');
    if (modoSalvo == 'ativado'){
        ativarModoNoturno();
    } else{
        desativarModoNoturno();
    }
});

/* Ativa qnd o Usuário marca o checkbox */
temaCheckbox.addEventListener('change', () => {
    if(temaCheckbox.checked){
        ativarModoNoturno();
    } else {
        desativarModoNoturno();
    }
});

/* Validação dos Campos do Formulário de Contato */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    assuntoValidate();
    mensagemValidate();

    // Se as validações retornarem true, atualiza a página
    if(nameValidate() && emailValidate() && assuntoValidate() && mensagemValidate()){
        mostrarPopupSucesso();
    }
});

function setError(index){
    campos[index].style.border = '0.14em solid red';
    span[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '0.1em solid black';
    span[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
        return false;
    } else{
        removeError(0);
        return true;
    }
}

function emailValidate(){
    if(emailRegex.test(campos[1].value)){
        removeError(1);
        return true;
    } else{
        setError(1);
        return false;
    }
}

function assuntoValidate(){
    if(campos[2].value.length < 5 || campos[2].value.length > 50){
        setError(2);
        return false;
    } else{
        removeError(2);
        return true;
    }
}

function mensagemValidate(){
    if(campos[3].value.length < 10 || campos[3].value.length > 250){
        setError(3);
        return false;
    } else{
        removeError(3);
        return true;
    }
}

function mostrarPopupSucesso() {
    const popup = document.querySelector('#popup-sucesso');
    popup.style.display = 'flex';

    document.querySelector('#btn-popup-ok').onclick = () => {
        popup.style.display = 'none';
        location.reload();
    };

}