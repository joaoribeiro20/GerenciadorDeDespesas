if (trasicoesR.length >= j) {
    console.log(i)
    divTransição = document.createElement('div')
    spanNome = document.createElement('span')
    spanStatus = document.createElement('span')
    spanValor = document.createElement('span')

    divTransição.setAttribute('class', 'trasicaoRealizadasR')

    valorTotalReceita = valorTotalReceita + parseFloat(trasicoesR[j].valor)

 
    exibirRceita.innerText = `R$ +${valorTotalReceita}`
    
    valorTotalT.innerText = parseFloat(valorTotalExibir) + parseFloat(trasicoesR[j].valor)
    valorTotalExibir = parseFloat(valorTotalExibir) + parseFloat(trasicoesR[j].valor)

    spanNome.innerHTML = `<span class="testeInput">Nome:</span> ${trasicoesR[j].nome} `
    spanStatus.innerHTML = `<span class="testeInput">Status:</span> ${trasicoesR[j].statusT} `
    spanValor.innerHTML = `<span class="testeInput">Valor:</span> R$${trasicoesR[j].valor} `

    divTransição[j].appendChild(spanNome[j])
    divTransição[j].appendChild(spanStatus[j])
    divTransição[j].appendChild(spanValor[j])
    areaDeTransicaoDinamica.appendChild(divTransição[j])
    j = j + 1
    campoTxtVReceita = 1
}