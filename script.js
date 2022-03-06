class Carta {
    constructor(nome, imagem, inteligencia, forca, velocidade, durabilidade, projecaoDeEnergia, habilidadesDeLuta) {
        this.nome = nome;
        this.imagem = imagem;

        this.atributos = {
            inteligencia: inteligencia,
            forca: forca,
            velocidade: velocidade,
            durabilidade: durabilidade,
            projecaoDeEnergia: projecaoDeEnergia,
            habilidadesDeLuta: habilidadesDeLuta
        }
    }
}

const jogo = document.querySelector("[data-jogo]");
const botaoComecar = document.querySelector("[data-botao-comecar]");
const botaoSortearCarta = document.querySelector("[data-botao-sortear-carta]");
const botaoJogar = document.querySelector("[data-botao-jogar]");

botaoComecar.addEventListener("click", comecar);
botaoSortearCarta.addEventListener("click", sortearCarta)
botaoJogar.addEventListener("click", jogar);

let cartaJogador1;
let cartaJogador2;
let cartas;

function comecar() {
    botaoComecar.style.display = "none";
    jogo.style.display = "block";

    const cartaHomemFormiga = new Carta("Homem Formiga", "img-cartas/Homem-Formiga.jpg", 4, 5, 3, 5, 3, 4);
    const cartaViuvaNegra = new Carta("Viúva Negra", "img-cartas/Viuva-Negra.jpg", 3, 3, 2, 3, 3, 6);
    const cartaCapitaoAmerica = new Carta("Capitão América", "img-cartas/Capitao-America.jpg", 3, 3, 2, 3, 1, 6);
    const cartaCapitaMarvel = new Carta("Capitã Marvel", "img-cartas/Capita-Marvel.jpg", 3, 5, 5, 6, 5, 4);
    const cartaFalcao = new Carta("Falcão", "img-cartas/Falcao.png", 2, 2, 3, 2, 1, 4);
    const cartaGaviaoArqueiro = new Carta("Gavião Arqueiro", "img-cartas/Gaviao-Arqueiro.jpg", 3, 2, 2, 2, 1, 6);
    const cartaHulk = new Carta("Hulk", "img-cartas/Hulk.jpg", 2, 7, 3, 7, 1, 4);
    const cartaHomemDeFerro = new Carta("Homem De Ferro", "img-cartas/Homem-De-Ferro.jpg", 6, 6, 5, 6, 6, 4); 
    const cartaFeiticeiraEscarlate = new Carta("Feiticeira Escarlate", "img-cartas/Feiticeira-Escarlate.jpg", 3, 2, 2, 2, 6, 3);
    const cartaHomemAranha = new Carta("Homem Aranha", "img-cartas/Homem-Aranha.jpg", 4, 4, 3, 3, 1, 4);
    const cartaThor = new Carta("Thor", "img-cartas/Thor.jpg", 2, 7, 7, 6, 6, 4);
    const cartaVisao = new Carta("Visão", "img-cartas/Visao.jpg", 4, 5, 3, 6, 6, 3);
    const cartaMaquinaDeCombate = new Carta("Maquina De Combate", "img-cartas/Maquina-De-Combate.jpg", 3, 6, 5, 6, 6, 4);
    const cartaDoutorEstranho = new Carta("Doutor Estranho", "img-cartas/Doutor-Estranho.jpg", 4, 2, 2, 2, 6, 6);

    cartas = [cartaHomemFormiga, cartaViuvaNegra, cartaCapitaoAmerica, cartaCapitaMarvel, cartaFalcao, cartaGaviaoArqueiro, cartaHulk, cartaHomemDeFerro, cartaFeiticeiraEscarlate, cartaHomemAranha, cartaThor, cartaVisao, cartaMaquinaDeCombate, cartaDoutorEstranho];
}

let rodada = 1;
let pontosJogador1 = 0;
let pontosJogador2 = 0;

function sortearCarta() {

    let resultado = document.querySelector("[data-resultado]");
    resultado.innerText = "Jogador1: " + pontosJogador1 + " | " + pontosJogador2 + " :Jogador2";

    if (cartas.length == 0) {
        alert("CARTAS ACABARAM :(")
        return;
    }

    let numeroCartaJogador1 = parseInt(Math.random() * cartas.length);
    cartaJogador1 = cartas[numeroCartaJogador1];
    cartas.splice(numeroCartaJogador1, 1);
    
    let numeroCartaJogador2 = parseInt(Math.random() * cartas.length);
    cartaJogador2 = cartas[numeroCartaJogador2];
    cartas.splice(numeroCartaJogador2, 1);

    botaoSortearCarta.disabled = true;
    botaoJogar.disabled = false;

    if (rodada == 1) {
        exibirCartaJogador1();
        exibirCartaPretaJogador2();
    } else {
        exibirCartaJogador2();
        exibirCartaPretaJogador1();
    }
}

function exibirCartaJogador1() {
    let divCartaJogador1 = document.querySelector("[data-carta1]");

    divCartaJogador1.style.backgroundColor = `transparent`;

    divCartaJogador1.style.backgroundImage = `url(${cartaJogador1.imagem})`;
    let nome = `<p class="carta-nome">${cartaJogador1.nome}</p>`;

    let atributosTexto = "";
    atributosTexto += "<p>Inteligência: " + cartaJogador1.atributos.inteligencia + "</p>";
    atributosTexto += "<p>Força: " + cartaJogador1.atributos.forca + "</p>";
    atributosTexto += "<p>Velocidade: " + cartaJogador1.atributos.velocidade + "</p>";
    atributosTexto += "<p>Durabilidade: " + cartaJogador1.atributos.durabilidade + "</p>";
    atributosTexto += "<p>Projeção de Energia: " + cartaJogador1.atributos.projecaoDeEnergia + "</p>";
    atributosTexto += "<p>Habilidades de Luta: " + cartaJogador1.atributos.habilidadesDeLuta + "</p>";

    let html = "<div class='carta-status'>"

    divCartaJogador1.innerHTML = html + nome + atributosTexto + '</div>'
}

function exibirCartaPretaJogador2() {
    let divCartaJogador2 = document.querySelector("[data-carta2]");

    divCartaJogador2.style.backgroundImage = `none`;
    divCartaJogador2.style.backgroundColor = `black`;
    let nome = `<p class="carta-nome">?????</p>`;

    let atributosTexto = "";
    atributosTexto += "<p>Inteligência: ??? </p>";
    atributosTexto += "<p>Força: ??? </p>";
    atributosTexto += "<p>Velocidade: ??? </p>";
    atributosTexto += "<p>Durabilidade: ??? </p>";
    atributosTexto += "<p>Projeção de Energia:  ??? </p>";
    atributosTexto += "<p>Habilidades de Luta: ??? </p>";

    let html = "<div class='carta-status'>"

    divCartaJogador2.innerHTML = html + nome + atributosTexto + '</div>'
}

function exibirCartaJogador2() {
    let divCartaJogador2 = document.querySelector("[data-carta2]");

    divCartaJogador2.style.backgroundColor = `transparent`;

    divCartaJogador2.style.backgroundImage = `url(${cartaJogador2.imagem})`;
    let nome = `<p class="carta-nome">${cartaJogador2.nome}</p>`;

    let atributosTexto = "";
    atributosTexto += "<p>Inteligência: " + cartaJogador2.atributos.inteligencia + "</p>";
    atributosTexto += "<p>Força: " + cartaJogador2.atributos.forca + "</p>";
    atributosTexto += "<p>Velocidade: " + cartaJogador2.atributos.velocidade + "</p>";
    atributosTexto += "<p>Durabilidade: " + cartaJogador2.atributos.durabilidade + "</p>";
    atributosTexto += "<p>Projeção de Energia: " + cartaJogador2.atributos.projecaoDeEnergia + "</p>";
    atributosTexto += "<p>Habilidades de Luta: " + cartaJogador2.atributos.habilidadesDeLuta + "</p>";

    let html = "<div class='carta-status'>"

    divCartaJogador2.innerHTML = html + nome + atributosTexto + '</div>'
}

function exibirCartaPretaJogador1() {
    let divCartaJogador1 = document.querySelector("[data-carta1]");

    divCartaJogador1.style.backgroundImage = `none`;
    divCartaJogador1.style.backgroundColor = `black`;
    let nome = `<p class="carta-nome">?????</p>`;

    let atributosTexto = "";
    atributosTexto += "<p>Inteligência: ??? </p>";
    atributosTexto += "<p>Força: ??? </p>";
    atributosTexto += "<p>Velocidade: ??? </p>";
    atributosTexto += "<p>Durabilidade: ??? </p>";
    atributosTexto += "<p>Projeção de Energia:  ??? </p>";
    atributosTexto += "<p>Habilidades de Luta: ??? </p>";

    let html = "<div class='carta-status'>"

    divCartaJogador1.innerHTML = html + nome + atributosTexto + '</div>'
}

function jogar() {
    let resultado = document.querySelector("[data-resultado]");
    let atributoSelecionado = obtemAtributoSelecionado();

    if (rodada == 1) {
        exibirCartaJogador2();
        rodada = 2;
    } else {
        exibirCartaJogador1();
        rodada = 1;
    }

    if (cartaJogador1.atributos[atributoSelecionado] > cartaJogador2.atributos[atributoSelecionado]) {
        resultado.innerText = "JOGADOR 1 VENCEU!";
        pontosJogador1 += 1;
    } else if (cartaJogador1.atributos[atributoSelecionado] < cartaJogador2.atributos[atributoSelecionado]) {
        resultado.innerText = "JOGADOR 2 VENCEU!";
        pontosJogador2 += 1;
    } else {
        resultado.innerText = "OS JOGADORES EMPATARAM!";
    }

    botaoSortearCarta.disabled = false;
    botaoJogar.disabled = true;

}

function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName('atributo');
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}