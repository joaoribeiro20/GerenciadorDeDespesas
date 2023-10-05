let areaMain = document.getElementById('main')
let sessao2 = document.getElementById('sessao2')
let divAdicionar = document.getElementById('divAdicionar')
let areaDeTransicaoDinamica = document.getElementById('statusTransicao')

let addTransicaoNome = document.getElementById('nomeTransicaoADD')
let addTransicaoNomeR = document.getElementById('nomeTransicaoADDR')
let addTransicaoData = document.getElementById('dataTransicaoADD')
let addTransicaoStatus = document.getElementById('statusTransicaoADD')
let addTransicaoValor = document.getElementById('valorTransicaoADD')
let addTransicaoValorR = document.getElementById('valorTransicaoADDR')
let divAdicionarDespesas = document.getElementById('divAdicionarDespesas')
let divAdicionarReceita = document.getElementById('divAdicionarReceita')

let exibirDispesa = document.getElementById('exibirDispesa')
let exibirRceita = document.getElementById('exibirRceita')

let inputAdicionarReserva = document.getElementById('inputAdicionarReserva')
let inputReserva = document.getElementById('inputReserva')
let valorReserva = document.getElementById('valorReserva')

let inputAdicionarValor = document.getElementById('inputAdicionarValor')
let valorTotalT = document.getElementById('valorTotalT')
let inputValorTotal = document.getElementById('inputValorTotal')
let btnSaldoADD = document.getElementById('btnSaldo')
/* 
<div class="trasicaoRealizadas">
        <span>boleto tim</span>
        <span> data de vencimento:20</span>
        <span>status: receita</span>
        <span>valor: 100R$</span>
</div>
 */

let divTransição = []
let spanNome = []
let spanData = []
let spanStatus = []
let spanValor = []
const trasicoesD = []
const trasicoesR = []
let i = 0
let j = 0
let teste = false
let valorTotalDespesas = 0
let valorTotalReceita = 0
let campoTxtVReceita
let campoTxtVDespesa
let valorTotalExibir
let myTimeout
divAdicionar.style.display = 'none'

function exibirTelaADDTransicao() {
    console.log(teste)
    
    if (teste == true) {
        areaMain.style.display = 'none'
        divAdicionar.style.display = 'flex'

        myTimeout = setInterval(function () {

            if (addTransicaoStatus.value == 'receita') {
                divAdicionarDespesas.style.display = 'none'
                divAdicionarReceita.style.display = 'flex'
                console.log('entrou no settimeout e foi para receita')
            }else {
                divAdicionarReceita.style.display = 'none'
                divAdicionarDespesas.style.display = 'flex'
                console.log('entrou no settimeout e foi para despesa')
            }
        }, 500);
    } else {
        alert('adicione um valor inicial na area valor total')
    }

}
function btnAdicionarTransicaoNova() {
    clearInterval(myTimeout);
    console.log(addTransicaoStatus.value)

    if (addTransicaoStatus.value == 'receita') {
        receita()
        console.log(campoTxtVReceita)
    } else {
        despesa()
        console.log(campoTxtVDespesa)
    }
    if (campoTxtVReceita == 1 || campoTxtVDespesa == 1) {
        areaMain.style.display = 'flex'
        divAdicionar.style.display = 'none'

        addTransicaoNome.value = ''
        addTransicaoData.value = '';
        addTransicaoValor.value = '';

        divAdicionarReceita.style.display = 'none'
        divAdicionarDespesas.style.display = 'none'
        campoTxtVDespesa = 0
        campoTxtVReceita =0
    }else{
        alert('Campo de informação invalido')
    }
}
/* receita */
function receita() {
    console.log('FUNÇÃO RECEITA')

    if (validarReceita() == true) {
        trasicoesR.push({
            nome: addTransicaoNomeR.value,
            statusT: addTransicaoStatus.value,
            valor: addTransicaoValorR.value
        })

        if (trasicoesR.length >= j) {
            console.log(i)
            divTransição[j] = document.createElement('div')
            spanNome[j] = document.createElement('span')
            spanStatus[j] = document.createElement('span')
            spanValor[j] = document.createElement('span')

            divTransição[j].setAttribute('class', 'trasicaoRealizadasR')
            valorTotalReceita = valorTotalReceita + parseFloat(trasicoesR[j].valor)
            console.log(valorTotalReceita)
            exibirRceita.innerText = `R$ +${valorTotalReceita}`
            console.log(valorTotalT.value)
            valorTotalT.innerText = parseFloat(valorTotalExibir) + parseFloat(trasicoesR[j].valor)
            valorTotalExibir = parseFloat(valorTotalExibir) + parseFloat(trasicoesR[j].valor)

            spanNome[j].innerHTML = `<span class="testeInput">Nome:</span> ${trasicoesR[j].nome} `
            spanStatus[j].innerHTML = `<span class="testeInput">Status:</span> ${trasicoesR[j].statusT} `
            spanValor[j].innerHTML = `<span class="testeInput">Valor:</span> R$${trasicoesR[j].valor} `

            divTransição[j].appendChild(spanNome[j])
            divTransição[j].appendChild(spanStatus[j])
            divTransição[j].appendChild(spanValor[j])
            areaDeTransicaoDinamica.appendChild(divTransição[j])
            j = j + 1
            campoTxtVReceita = 1
        }
    } else {
        campoTxtVReceita = 2
    }
}
/* despesa */
function despesa() {
    

    if (validacaoDespesa() == true) {
        console.log('FUNÇÃO DESPESA validaçao')
        trasicoesD.push({
            nome: addTransicaoNome.value,
            data: addTransicaoData.value,
            statusT: addTransicaoStatus.value,
            valor: addTransicaoValor.value
        })

        if (trasicoesD.length >= i) {
            console.log('FUNÇÃO DESPESA criaçao')
            console.log(i)
            divTransição[i] = document.createElement('div')
            spanNome[i] = document.createElement('span')
            spanData[i] = document.createElement('span')
            spanStatus[i] = document.createElement('span')
            spanValor[i] = document.createElement('span')
 
            

            divTransição[i].setAttribute('class', 'trasicaoRealizadasD')
            valorTotalDespesas = valorTotalDespesas + parseFloat(trasicoesD[i].valor)
            console.log(valorTotalDespesas)
            exibirDispesa.innerText = `R$ -${valorTotalDespesas}`
            valorTotalT.innerText = parseFloat(valorTotalExibir) - parseFloat(trasicoesD[i].valor)
            valorTotalExibir = parseFloat(valorTotalExibir) - parseFloat(trasicoesD[i].valor)


            spanNome[i].innerHTML = `<span class="testeInput">Nome:</span> ${trasicoesD[i].nome} `
            spanData[i].innerHTML = `<span class="testeInput">Data De Vencimento:</span>  ${trasicoesD[i].data} `
            spanStatus[i].innerHTML = `<span class="testeInput">Status:</span> ${trasicoesD[i].statusT} `
            spanValor[i].innerHTML = `<span class="testeInput">Valor:</span> R$${trasicoesD[i].valor} `

            divTransição[i].appendChild(spanNome[i])
            divTransição[i].appendChild(spanData[i])
            divTransição[i].appendChild(spanStatus[i])
            divTransição[i].appendChild(spanValor[i])
            areaDeTransicaoDinamica.appendChild(divTransição[i])
            i = i + 1
            campoTxtVDespesa = 1
        }
    } else {
        campoTxtVDespesa = 2
    }
}
/* validação  */
function validacaoDespesa() {
  
        const regexData = /^\d|\d+\d$/ig
        const regexValor = /^\d+$/ig
        const regexNome = /\w{3}/ig
        if (!regexNome.test(addTransicaoNome.value)) {
            return false
        }
        if (!regexValor.test(addTransicaoValor.value)) {
            return false
        }

        
            if (!regexData.test(addTransicaoData.value)) {
                return false
            }
        
        
        return true
   

}
function validarReceita(){
    const regexValor = /^\d+$/ig
    const regexNome = /\w{3}/ig
    if (!regexNome.test(addTransicaoNomeR.value)) {
        return false
    }
    if (!regexValor.test(addTransicaoValorR.value)) {
        return false
    }
    return true
}


function adicionarValor(){
    inputAdicionarValor.style.display = 'flex'
    console.log('entrou dentro da função')

}
function salvarValor(){
    const regexValorSaldo = /^\d+$/
    if(regexValorSaldo.test(inputValorTotal.value)){
        valorTotalExibir = inputValorTotal.value
    valorTotalT.innerText = valorTotalExibir
    
    inputAdicionarValor.style.display = 'none'
    sessao2.removeChild(btnSaldoADD)
    teste = true
    console.log(valorTotalT)
    console.log(valorTotalExibir)
    }else{
        alert('Digite um valor valido no campo. Exemplo: 150')
    }
    
}


function adicionarReserva(){
    inputAdicionarReserva.style.display = 'flex'
    console.log('entrou dentro da função')
}
function salvarValorReserva(){
    const regexReserva = /^\d+$/
    if(regexReserva.test(inputReserva.value)){
        ExibirReserva = inputReserva.value
    valorReserva.innerText = ExibirReserva
    
    inputAdicionarReserva.style.display = 'none'
    
    teste = true
    console.log(valorReserva)
    console.log(ExibirReserva)
    }else{
        alert('Digite um valor valido no campo. Exemplo: 150')
    }
}
