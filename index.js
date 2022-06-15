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
const alerta =
    '<div id="alerta" align="center" style="background-color:goldenrod; border-radius: 4px; color: rgb(182, 0, 0); padding: 4px;">Digite sua pergunta.</div><br>'
const alerta2 = '<div>Isso é uma pergunta?</div><br>'
/* ------------------------------------------------------ */

const divResposta = document.getElementById('resposta')

const botaoPerguntar = document.getElementById('botaoPerguntar')

const inputPergunta = document.getElementById('inputPergunta')

botaoPerguntar.onclick = perguntar

function perguntar() {
    //empty
    if (inputPergunta.value == '') {
        inputPergunta.style.border = '4px double red'
        inputPergunta.focus()
        divResposta.innerHTML += alerta
    } else if (!inputPergunta.value.includes('?')) {
        divResposta.innerHTML += alerta2
    } else if (inputPergunta !== '' && inputPergunta.value.includes('?')) {
        const total = respostas.length
        const nRamdom = Math.floor(Math.random() * total)
        const respSorteada = respostas[nRamdom]
        divResposta.innerHTML += inputPergunta.value + '<br><br>' + respSorteada
        setTimeout(() => {
            ;(divResposta.style.opacity = 0)
        }, 5000)
        return
    }
    setTimeout(() => {
        ;(divResposta.style.opacity = 0)
    }, 3000)
    return
    
}
