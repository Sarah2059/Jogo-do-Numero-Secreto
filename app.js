let listaDeNumeros = []
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    let numeroLimitePalavra = `Escolha um número entre 1 e ${numeroLimite}`
    exibirTextoNaTela('p', numeroLimitePalavra);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('h1', 'Acertou!!')
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosDaLista = listaDeNumeros.length;

    if(quantidadeDeNumerosDaLista == numeroLimite){
        listaDeNumeros = []
    }

    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros)
        return numeroEscolhido;
    }
}