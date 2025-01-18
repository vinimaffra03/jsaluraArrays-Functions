// Declaração de algumas variaveis 

let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 1;

// INTERAGINDO COM HTML -------------------------------------------------------------------------------

/* let titulo = document.querySelector("h1"); //selecionando tags para variavel e printando um texto no html 
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

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10 !");
}

exibirMensagemInicial();

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
        let palavraTentativa = numeroDeTentativas > 1 ? "tentativas" : "tentiva";
        let mensagemTentativas = `Você acertou o número secreto com ${numeroDeTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);

        // remover atributos da tag botao
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {

        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor !");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior !");
        }
        // adição número de tentativas
        numeroDeTentativas++;
    }
}

function limparCampo() {
    // resetar input
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    // gerar novo número aleatório
    numeroSecreto = gerarNumeroAleatorio();

    // resetar o input do chute
    limparCampo();

    // resetar o número de tentativas 
    numeroDeTentativas = 1;

    // reiniciar texto inicial
    exibirMensagemInicial();

    // desabilitar botao de novo jogo
    document.getElementById("reiniciar").setAttribute("disabled, true");
}