let coordenador = document.querySelector('#coordenador')
let dev1 = document.querySelector('#desenvolvedor_1')
let dev2 = document.querySelector('#desenvolvedor_2')
let dev3 = document.querySelector('#desenvolvedor_3')

// Mudei aqui
// Buscando dado no HTML
let lista = document.querySelector('#lista')

function addlista(equipe){

    let novaUl = document.createElement('ul')

    // Mapeando os dados 
    let linhaCoodenador = document.createElement('li')
    linhaCoodenador.innerHTML = equipe.coordenador
    linhaCoodenador.classList.add('lista-item')

    let linhaDev1 = document.createElement('li')
    linhaDev1.innerHTML = equipe.dev1
    linhaDev1.classList.add('lista-item')

    let linhaDev2 = document.createElement('li')
    linhaDev2.innerHTML = equipe.dev2
    linhaDev2.classList.add('lista-item')

    let linhaDev3 = document.createElement('li')
    linhaDev3.innerHTML = equipe.dev3
    linhaDev3.classList.add('lista-item')

    novaUl.appendChild(linhaCoodenador)
    novaUl.appendChild(linhaDev1)
    novaUl.appendChild(linhaDev2)
    novaUl.appendChild(linhaDev3)

    lista.appendChild(novaUl)

    console.log("Listando os dados Função Addlista")
}


function gravar(){
    
    let equipe = {

        "coordenador": coordenador.value,
        "dev1": dev1.value, 
        "dev2": dev2.value,
        "dev3": dev3.value
    }
    
    if (localStorage.getItem("listaEquipes")){

        let listaEquipes = JSON.parse(localStorage.getItem("listaEquipes"))
        listaEquipes.push(equipe)
        localStorage.setItem("listaEquipes", JSON.stringify(listaEquipes))

        console.log('Gravando no LocalStorage existente')

    } else {
        
        let listaEquipes = []
        listaEquipes.push(equipe)
        localStorage.setItem("listaEquipes", JSON.stringify(listaEquipes))

        console.log('Gravando em um novo LocalStorage')
    }

    
}

// Carregando dados do local Storage
function carregarLocarStorage(){

    // Mudei aqui
    // Limpar a lista
    lista.innerHTML = ''

    if(localStorage.getItem("listaEquipes")){
        
        let listaEquipes = JSON.parse(localStorage.getItem('listaEquipes'))

        // Mudei aqui
        listaEquipes.forEach((equipe) => {
            addlista(equipe)
        })
        console.log('Carregando do local storage')
    }
}

function imprimirLocalStorage(){
    let listaEquipes = JSON.parse(localStorage.getItem("listaEquipes"))
    console.log(listaEquipes)
}

function limparFormulario(){
    coordenador.value = ""
    dev1.value = ""
    dev2.value = ""
    dev3.value = ""

    coordenador.focus()
    console.log("Limpando Formulário")
}

// evento do clik do botão inserir 
document.querySelector("#btn-inserir").addEventListener("click", () =>{

    event.preventDefault();
    console.log("Pegando os nomes com o clik")

    gravar()

    carregarLocarStorage()
    
    imprimirLocalStorage()

    limparFormulario()  
})