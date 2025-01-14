// Declaração de algumas variaveis 

let numeroSecreto = gerarNumeroAleatorio();

// INTERAGINDO COM HTML -------------------------------------------------------------------------------

let titulo = document.querySelector("h1"); //selecionando tags para variavel e printando um texto no html 
titulo.innerHTML = "Jogo do número Secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10 !";

/* function verificarChute() { // funções s/ parametros *** 
    console.log(numeroSecreto); ***** <----
} */

// FUNÇÕES -------------------------------------------------------------------------------------------

// funções com parametros *** 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10 !");

// funções com retorno ***

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

// tipo booleano ***

/* function verificarChute() { // funções s/ parametros *** #########

    console.log(numeroSecreto); ############
    let chute = document.querySelector("input").value;
    let verificacaoChute = chute == numeroSecreto;
    console.log(verificacaoChute);
    alert(verificacaoChute);
    //console.log(chute);
    // alert(chute);
} #####################
*/

// REINICIANDO O JOGO --------------------------------------------------------------------------------

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    // verificando acerto e dicas de proximidade do número correto !
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabéns, você acertou !");
        exibirTextoNaTela("p", "");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor !");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior !");
        }
    }
}
