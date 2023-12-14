const perguntas = [
    {
        topico: "Sobre o namoro",
        pergunta: "Pergunta 1: Quem chamou primeiro ?",
        opcoes: ["Sérgio", "Maria Eduarda", "Nenhum dos dois","Foi um milagre"],
        resposta: "Sérgio"
    },
    {
        topico: "Sobre o namoro",
        pergunta: "Pergunta 2: Quem deu o primeiro beijo ?",
        opcoes: ["Sérgio", "Maria Eduarda(roubou meu beijo desesperada)", "Nenhum dos dois", "Não nos beijamos até hoje"],
        resposta: "Maria Eduarda(roubou meu beijo desesperada)"
    },
    {
        topico: "Sobre o namoro",
        pergunta: "Pergunta 3: Qual a nossa música ?",
        opcoes: ["Perfect - Ed Sheeran", "Marry you - Bruno Mars", "Amor de chocolate - Naldo Benny", "Lucky - Jason Marz"],
        resposta: "Lucky - Jason Marz"
    },
    {
        topico: "Sobre o namoro",
        pergunta: "Pergunta 4: Qual foi a primeira série/filme que assistimos juntos ?",
        opcoes: ["Cavaleiro da Lua", "Batman", "Esposa de Mentirinha", "Sexo Sem Compromisso", "Amor com data marcada"],
        resposta: "Simplesmente Acontece"
    },
    {
        topico: "Sobre o namoro",
        pergunta: "Pergunta 5: Como eu estava vestido quando saímos pela primeira vez ?",
        opcoes: ["Blusa do Vascão", "Blusa preta e branca da under armour", "blusa branca levis", "Blusa preta aeropostale"],
        resposta: "Blusa preta e branca da under armour"
    },
    {
        topico: "Sobre o namoro",
        pergunta: "Pergunta 6: Quem é mais bagunceiro(a) em casa?",
        opcoes: ["Maria Eduarda", "Sérgio", "Os dois", "Nenhum dos dois"],
        resposta: "Maria Eduarda"
    },
    {
        topico: "Sobre mim",
        pergunta: "Pergunta 7: Qual é o meu programa de TV ou série favorito ?",
        opcoes: [" Game of Throne", "Friends", "How i met your mother", "Stranger Things"],
        resposta: "How i met your mother"
    },

    {
        topico: "Sobre mim",
        pergunta: "Pergunta 8: O que mais me tira do sério ?",
        opcoes: ["Atraso", "Mentira", "Não pegar o bichinho na maquina", "Maria Eduarda", "Vasco"],
        resposta: "Maria Eduarda"
    },
    {
        topico: "Sobre mim",
        pergunta: "Pergunta 9: Qual foi o primeiro presente que você me deu?",
        opcoes: ["blusa do vasco", "quadro", "chocolate da lindt", "mochila"],
        resposta: "chocolate da lindt"
    },
    {
        topico: "Sobre você",
        pergunta: "Pergunta 10: Sua maior qualidade para mim é?",
        opcoes: ["bondade", "justiça", "senso de humor", "carinho", "temor"],
        resposta: "temor"
    },
    {
        topico: "Sobre você",
        pergunta: "Pergunta 11: Qual personagem de desenho eu acho que você seria?",
        opcoes: ["Nigel (Rio)", "Velma (Scooby Doo)", "Boo (Monstros SA)", "Lilo (Lilo e Stitch)"],
        resposta: "Boo (Monstros SA)"
    },
    {
        topico: "Sobre você",
        pergunta: "Pergunta 12: O que eu mais gosto em você ?",
        opcoes: ["Sorriso", "Bunda", "Peitos", "Sua altura"],
        resposta: "Peitos"
    },
    {
        topico: "Aleatoriedades",
        pergunta: "Pergunta 13: Se dessemos de cara com uma máquina do tempo eu optaria por primeiro ir para o passado ou futuro ?",
        opcoes: ["Passado", "Futuro"],
        resposta: "Passado"
    },
    {
        topico: "Aleatoriedades",
        pergunta: "Pergunta 14: Existe um comprimido que deixa a pessoa 50% mais inteligente ou 50% mais atraente, qual eu acho que você escolheria?",
        opcoes: ["Mais inteligente", "Mais atraente"],
        resposta: "Mais inteligente"
    },
    {
        topico: "Aleatoriedades",
        pergunta: "Pergunta 15: Eu prefirira morar em Marte ou no fundo do oceano ?",
        opcoes: ["Marte", "Fundo do oceano"],
        resposta: "Marte"
    },
];

let pergunta_atual = 0;
let pontuacao = 0;

const pergunta_texto = document.getElementById("pergunta_texto");
const topico_pergunta = document.getElementById("topico_pergunta");
const opcoes_container = document.getElementById("opcoes_container");
const proxima_pergunta = document.getElementById("proxima_pergunta");
const valor_score = document.getElementById("valor_score");

proxima_pergunta.addEventListener("click", () => proximaPergunta());

function carregar_pergunta() {
    const pergunta_atual_obj = perguntas[pergunta_atual];
    topico_pergunta.textContent = `Tópico: ${pergunta_atual_obj.topico}`;
    pergunta_texto.textContent = pergunta_atual_obj.pergunta;

    opcoes_container.innerHTML = "";
    pergunta_atual_obj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.addEventListener("click", () => verificar_resposta(opcao, botao));
        opcoes_container.appendChild(botao);
    });
}

function verificar_resposta(opcao_selecionada, botao) {
    const pergunta_atual_obj = perguntas[pergunta_atual];
    if (opcao_selecionada === pergunta_atual_obj.resposta) {
        pontuacao++;
        botao.style.backgroundColor = "green"; // Resposta correta
    } else {
        botao.style.backgroundColor = "red"; // Resposta incorreta
    }
    valor_score.textContent = pontuacao;
    // Desativar os botões após a resposta ser selecionada
    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach(b => b.disabled = true);
}

function proximaPergunta() {
    pergunta_atual++;
    if (pergunta_atual < perguntas.length) {
        carregar_pergunta();
    } else {
        // Aqui você pode fazer algo quando todas as perguntas forem respondidas
        alert("Quiz concluído! Pontuação: " + pontuacao);
    }
}

// Carregar a primeira pergunta ao carregar a página
carregar_pergunta();
