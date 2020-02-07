let coordenador = document.querySelector('#coordenador')
let dev1 = document.querySelector('#desenvolvedor_1')
let dev2 = document.querySelector('#desenvolvedor_2')
let dev3 = document.querySelector('#desenvolvedor_3')


// Buscando dado no HTML
let lista = document.querySelector('#lista')

function addlista(equipe, indice){

    let novaUl = document.createElement('ul')

    // Mapeando os dados 
    let linhaCoodenador = document.createElement('li')
    linhaCoodenador.innerHTML = equipe.coordenador
    linhaCoodenador.classList.add('lista-item-titulo')

    let linhaDev1 = document.createElement('li')
    linhaDev1.innerHTML = equipe.dev1
    linhaDev1.classList.add('lista-item')

    let linhaDev2 = document.createElement('li')
    linhaDev2.innerHTML = equipe.dev2
    linhaDev2.classList.add('lista-item')

    let linhaDev3 = document.createElement('li')
    linhaDev3.innerHTML = equipe.dev3
    linhaDev3.classList.add('lista-item')

    let btnDeletar = document.createElement('button')
    btnDeletar.innerHTML = ' <img src="assets/imagem/iconfinder_Streamline-70_185090.svg" alt="Deletar">'
    btnDeletar.classList.add('btn-deletar')

    // Deletando equipe
    btnDeletar.addEventListener('click', () =>{
        event.preventDefault()

        let res = confirm('Deseja Deletar Essa equipe')

        if(res == true){
            deletarEquipe(indice)
        }

    })


    novaUl.appendChild(linhaCoodenador)
    novaUl.appendChild(linhaDev1)
    novaUl.appendChild(linhaDev2)
    novaUl.appendChild(linhaDev3)
    novaUl.appendChild(btnDeletar)
    console.log('Deletando')

    lista.appendChild(novaUl)
    
    console.log("Listando os dados Função Addlista")
}


// Função de gravar dados no local Storage
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

    
    // Limpar a lista
    lista.innerHTML = ''

    if(localStorage.getItem("listaEquipes")){
        
        let listaEquipes = JSON.parse(localStorage.getItem('listaEquipes'))

       
        listaEquipes.forEach((equipe, id) => {
            addlista(equipe, id)
        })
        console.log('Carregando do local storage')
        
    }
}

// Função de Deletar 
function deletarEquipe(index){

    

    let equipes = JSON.parse(localStorage.getItem('listaEquipes'))
    equipes.splice(index, 1)

    localStorage.setItem('listaEquipes', JSON.stringify(equipes))
    carregarLocarStorage()
    console.log("Equipe Deletada")

    alert
}

// Função de imprimir o local storage no console
function imprimirLocalStorage(){
    let listaEquipes = JSON.parse(localStorage.getItem("listaEquipes"))
    console.log(listaEquipes)
}

// Função de limpar o formulário
function limparFormulario(){
    coordenador.value = ""
    dev1.value = ""
    dev2.value = ""
    dev3.value = ""

    coordenador.focus()
    console.log("Limpando Formulário")
}

// Envento de click do botão sincronizar
document.querySelector('#btn-sincronizar').addEventListener('click', () =>{
    event.preventDefault();
    console.log("Sincronizando dados com o localStorage")
    carregarLocarStorage()
})

// evento do clik do botão inserir 
document.querySelector("#btn-inserir").addEventListener("click", () =>{

    event.preventDefault();
    console.log("Pegando os nomes com o clik")

    gravar()

    carregarLocarStorage()
    
    imprimirLocalStorage()

    limparFormulario()  
})