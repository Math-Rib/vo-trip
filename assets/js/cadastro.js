const body = document.body; // Armazenando o corpo da págin pela tag
const temaCheckbox = document.querySelector('#ckeckbox-dark-mode'); // Armazenando o elemento do checkbox pelo id
const btnVoltar = document.querySelector('.btn-voltar'); // Armazenando o botão de retorno pela classe
const form = document.getElementById('form'); // Armazenando o formulário pelo id
const campos = document.querySelectorAll('.required'); // Armazenando todos os campos do formulário pela classe
const spans = document.querySelectorAll('.span-required'); // Armazenando todos os spans do formulário pela classe
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; // Armazenando a validação de todos os caracteres do CPF
const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}\-\d{4}$/; // Armazenando a validação de todos os caracteres do telefone
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Armazenando a validação de todos os caracteres do email
const generoRadios = document.getElementsByName("gender"); // Armazenando o campo radio
const erroGenero = document.getElementById("erro-genero"); // Armazenando o span de erro de gênero

/* Caminhos das Imagens */
const btnVoltarPadrao = './assets/img/icones/icone_voltar_cinza.png';
const btnVoltarDarkMode = './assets/img/icones/icone_voltar_branco.png';

/* Ativar Modo Noturno */
function ativarModoNoturno() {
  body.style.backgroundColor = '#1f1f1f';
  body.style.color = 'white';
  btnVoltar.src = btnVoltarDarkMode;
  temaCheckbox.checked = true; //Marca o checkbox
  localStorage.setItem('modoNoturno', 'ativado');
}

/* Desativar Modo Noturno */
function desavitarModoNoturno() {
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

/* Validação dos Campos do Formulário de Cadastro */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  cpfValidate();
  emailValidate();
  telefoneValidate();
  senhaValidate();
  confirmarSenhas();
  generoValidate();

  // Se as validações retornarem true, atualiza a página
  if (nameValidate() && cpfValidate() && emailValidate() && telefoneValidate() && senhaValidate() && confirmarSenhas() && generoValidate()) {
    mostrarPopupSucesso();
  }
});

// Função para colocar erro de preenchimento no formulário
function setError(index) {
  campos[index].style.border = '2px solid red';
  spans[index].style.display = 'block';
}
// Função para remover erro de preenchimento no formulário
function removeError(index) {
  campos[index].style.border = '1px solid black'; 
  spans[index].style.display = 'none';
}

// Função para validar o campo nome do formulário de Cadastro
function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
    return false;
  } else {
    removeError(0);
    return true;
  }
}

// Função para validar o campo cpf do formulário de Cadastro
function cpfValidate() {
  if (cpfRegex.test(campos[1].value)) {
    removeError(1);
    return true;
  } else {
    setError(1);
    return false;
  }
}

// Adicionando . e - automaticamente ao digitar o CPF no campo
function mascaraCPF(value) {
  value = value.replace(/\D/g, "");
  // impede digitar mais que 11 números
  if (value.length > 11) {
    value = value.slice(0, 11);
  }
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
  return value;
}

// Evento chamando as funções do campo cpf
campos[1].addEventListener("input", function () {
  this.value = mascaraCPF(this.value);
  cpfValidate();
});

// Função para validar o campo email do formulário de Cadastro
function emailValidate() {
  if (emailRegex.test(campos[2].value)) {
    removeError(2);
    return true;
  } else {
    setError(2);
    return false;
  }
}

// Função para validar o campo telefone do formulário de Cadastro
function telefoneValidate() {
  if (telefoneRegex.test(campos[3].value)) {
    removeError(3);
    return true;
  } else {
    setError(3);
    return false;
  }
}

// Adicionando . e - automaticamente ao digitar o tttelefone no campo
function mascaraTelefone(value) {
  value = value.replace(/\D/g, "");

  // impede digitar mais que 11 números
  if (value.length > 11) {
    value = value.slice(0, 11);
  }
  value = value.replace(/^(\d{1})/, "($1");
  value = value.replace(/^(\(\d{2})(\d)/, "$1) $2");
  value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
  return value;
}

// Evento chamando as funções do campo telefone
campos[3].addEventListener("input", function () {
  this.value = mascaraTelefone(this.value);
  telefoneValidate(); // Valida após a máscara
});

// Função para validar o campo senha do formulário de Cadastro
function senhaValidate() {
  if (campos[4].value.length < 8) {
    setError(4);
    return false;
  } else {
    removeError(4);
    confirmarSenhas();
    return true;
  }
}
// Função para validar o campo confirmar senha e verificar se o valor do mesmo é igual ao campo senha do formulário de Cadastro
function confirmarSenhas() {
  if (campos[4].value == campos[5].value && campos[5].value.length >= 8) {
    removeError(5);
    return true;
  } else {
    setError(5);
    return false;
  }
}

// Função para verificar se o campo gênero foi selecionado

function generoValidate() {
  for (let radio of generoRadios) {
    if (radio.checked) {
      erroGenero.style.display = "none";
      return true;
    }
  }
  erroGenero.style.display = "block";
  return false;
}

// Função para mostrar a mensagem de sucesso de cadastro do formulário
function mostrarPopupSucesso() {
  const popup = document.querySelector('#popup-sucesso');
  popup.style.display = 'flex';

  document.querySelector('#btn-popup-ok').onclick = () => {
    popup.style.display = 'none';
    window.location.href = "./index.html";
  };
}