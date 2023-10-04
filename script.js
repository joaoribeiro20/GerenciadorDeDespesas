let areaMain = document.getElementById('main')
let sessao2 = document.getElementById('sessao2')
let divAdicionar = document.getElementById('divAdicionar')
let areaDeTransicaoDinamica = document.getElementById('statusTransicao')

let addTransicaoNome = document.getElementById('nomeTransicaoADD')
let addTransicaoData = document.getElementById('dataTransicaoADD')
let addTransicaoStatus = document.getElementById('statusTransicaoADD')
let addTransicaoValor = document.getElementById('valorTransicaoADD')

let exibirDispesa = document.getElementById('exibirDispesa')
let exibirRceita = document.getElementById('exibirRceita')

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
const trasicoes = []
let i = 0

let valorTotalDespesas = 0
let valorTotalReceita = 0
divAdicionar.style.display = 'none'

function exibirTelaADDTransicao() {
    areaMain.style.display = 'none'
    divAdicionar.style.display = 'flex'
}
function btnAdicionarTransicaoNova() {
    console.log(validacaoForms())
    if(validacaoForms() == true){

    
    trasicoes.push({
        nome: addTransicaoNome.value,
        data: addTransicaoData.value,
        statusT: addTransicaoStatus.value,
        valor: addTransicaoValor.value
    })

    console.log(trasicoes)
    areaMain.style.display = 'flex'
    divAdicionar.style.display = 'none'

    if (trasicoes.length >= i) {
        console.log(i)
        divTransição[i] = document.createElement('div')
        spanNome[i] = document.createElement('span')
        spanData[i] = document.createElement('span')
        spanStatus[i] = document.createElement('span')
        spanValor[i] = document.createElement('span')
        if(trasicoes[i].statusT === 'receita'){
            divTransição[i].setAttribute('class', 'trasicaoRealizadasR')
            valorTotalReceita = valorTotalReceita + parseFloat(trasicoes[i].valor)
            console.log(valorTotalReceita)
            exibirRceita.innerText = `R$ ${valorTotalReceita}`
        }else{
            divTransição[i].setAttribute('class', 'trasicaoRealizadasD')
            valorTotalDespesas = valorTotalDespesas + parseFloat(trasicoes[i].valor)
            console.log(valorTotalDespesas)
            exibirDispesa.innerText = `R$ ${valorTotalDespesas}`
        }
        
        spanNome[i].innerText = `Nome: ${trasicoes[i].nome} `
        spanData[i].innerText = `Data De Vencimento: ${trasicoes[i].data} `
        spanStatus[i].innerText = `Status: ${trasicoes[i].statusT} `
        spanValor[i].innerText = `Valor: R$${trasicoes[i].valor} `

        divTransição[i].appendChild(spanNome[i])
        divTransição[i].appendChild(spanData[i])
        divTransição[i].appendChild(spanStatus[i])
        divTransição[i].appendChild(spanValor[i])
        areaDeTransicaoDinamica.appendChild(divTransição[i])
        i = i + 1
    

    addTransicaoNome.value=''
    addTransicaoData.value='';
    addTransicaoValor.value='';
    }
}else{
    alert('Erro nos Campos de informações')
}


   
}

function validacaoForms(){
    
    const regexData = /^\d|\d+\d$/ig
    const regexValor = /^\d+$/ig
    const regexNome = /\w{3}/ig
    

    if(!regexNome.test(addTransicaoNome.value)){
        return false
    }
    if(!regexValor.test(addTransicaoValor.value)){
        return false
    }
    
    if(addTransicaoStatus.value === 'despesa'){
        if(!regexData.test(addTransicaoData.value)){
        return false
        }
    }else{
        if(addTransicaoData.value != ''){
            return false
            }
    }
    return true
 
} 
let inputAdicionarValor = document.getElementById('inputAdicionarValor')
let valorTotal = document.getElementById('valorTotal')
let inputValorTotal = document.getElementById('inputValorTotal')
let btnSaldoADD = document.getElementById('btnSaldo')
function adicionarValor(){
    inputAdicionarValor.style.display = 'flex'
    console.log('entrou dentro da função')

}
function salvarValor(){
    valorTotal.innerText = inputValorTotal.value
    inputAdicionarValor.style.display = 'none'
    sessao2.removeChild(btnSaldoADD)
}