const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "É um fato que todos conhecem o Corinthians, entretanto poucos sabem sua história. Você sabe responder algumas perguntas sobre esse clube?",
        alternativas: [
            {
                texto: "Não, infelizmente conheço pouco da sua história",
                afirmacao: "Se você acertou poucas,"
            },
            {
                texto: "Claro, sou um sofredor",
                afirmacao: "Você é mesmo um torcedor,"
            }
        ]
    },
    {
        enunciado: "Como principal pergunta e a mais fácil de todas, você sabe em qual ano o time surgiu?",
        alternativas: [
            {
                texto: "Infelizmente não sei qual foi o ano",
                afirmacao: " não tem problema."
            },
            {
                texto: "Essa é fácil, ele surgiu em 1910",
                afirmacao: " acertou todas as perguntas."
            }
        ]
    },
    {
        enunciado: "Quais são alguns de seus ídolos?",
        alternativas: [
            {
                texto: "Nunca procurei por isso, conheço somente os atuais jogadores",
                afirmacao: "Serve de aprendizado."
            },
            {
                texto: "Eu sei essa, alguns são eles: Cássio, Sócrates e Rivelino",
                afirmacao: "O Corinthians é um grande clube."
            }
        ]
    },
    {
        enunciado: "Você sabe em qual ano a Libertadores foi conquistada? E qual foi o jogador que fez o gol do título?",
        alternativas: [
            {
                texto: "Pensei que eles não haviam nenhuma",
                afirmacao: ""
            },
            {
                texto: "Foi em 2012, com o gol marcado pelo Emerson Sheik",
                afirmacao: "Com milhoẽs de torcedores ao redor de todo o mundo."
            }
        ]
    },
    {
        enunciado: "Algumas pessoas e confudem em relação ao mascote do clube, você sabe qual é?",
        alternativas: [
            {
                texto: "É o gavião, tenho certeza",
                afirmacao: ""
            },
            {
                texto: "É o Mosqueteiro, isso é óbvio",
                afirmacao: "E se você ainda não torcer para nenhum outro clube, venha fazer parte do nosso bando de loucos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();