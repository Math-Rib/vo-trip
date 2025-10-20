const body = document.body;
const temaCheckbox = document.querySelector('#ckeckbox-dark-mode'); // Armazenando o elemento do checkbox pelo id
// const corpoPagina = document.querySelector('.form'); // Armazenando o corpo d apágina pelo
const btnVoltar = document.querySelector('.btn-voltar'); // Armazenando o botão de retorno pela classe

/* Caminhos das Imagens */
const btnVoltarPadrao = './assets/img/icones/icone_voltar_cinza.png';
const btnVoltarDarkMode = './assets/img/icones/icone_voltar_branco.png';

temaCheckbox.addEventListener('change', () =>{ // Mudanças para o modo Noturno
    if(temaCheckbox.checked){
        body.style.backgroundColor = '#1f1f1f';
        // corpoPagina.style.backgroundColor = '#1f1f1f';
        body.style.color = 'white';
        btnVoltar.src = btnVoltarDarkMode;
    } else {
        body.style.backgroundColor = '#dfdfdf';
        // corpoPagina.style.backgroundColor = '#dfdfdf';
        body.style.color = 'black';
        btnVoltar.src = btnVoltarPadrao;
    }
});