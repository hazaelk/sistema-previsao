//variaveis?
//daods de entrada?
//dados de saida?

const respostas = [
    'Certeza!',
    'Não tenho tanta certeza.',
    'É decididamente assim.',
    'Não conte com isso.',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde.',
    'Sim, definitivamente!',
    'Minha resposta é não.',
    'Você pode contar com isso.',
    'Melhor não te dizer agora.',
    'A meu ver, sim.',
    'Minhas fontes dizem não.',
    'Provavelmente.',
    'Não é possível prever agora.',
    'Perspectiva boa.',
    'As perspectivas não são tão boas.',
    'Sim.',
    'Concentre-se e pergunte novamente.',
    'Sinais apontam que sim.'
]
const alerta = '<div class="alerta">Digite sua pergunta.</div>'
/* ------------------------------------------------------ */

const divResposta = document.getElementById('resposta')

const botaoPerguntar = document.getElementById('botaoPerguntar')

const inputPergunta = document.getElementById('inputPergunta')

botaoPerguntar.onclick = emitirAlerta

//se pergunta vaiza:
function emitirAlerta() {
    inputPergunta.value == "" ? divResposta.innerHTML += alerta : perguntar()
}

// clicar em fazer pergunta
function perguntar() {
    console.log(divResposta.value)
    console.log(typeof(divResposta.value))

    const stringPergunta = toString(divResposta.value)
    
    console.log(stringPergunta)    
    // stringPergunta.includes('?')
    //     ? divResposta.innerHTML += stringPergunta
    //     : stringPergunta += '?'
    // const total = respostas.length
    // const nRamdom = Math.floor(Math.random() * total)
    // const respSorteada = respostas[nRamdom]
    // divResposta.innerHTML += respSorteada

}
