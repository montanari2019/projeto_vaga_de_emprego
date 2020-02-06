let coordenador = document.querySelector('#coordenador')

let dev1 = document.querySelector('#desenvolvedor_1')

let dev2 = document.querySelector('#desenvolvedor_2')

let dev3 = document.querySelector('#desenvolvedor_3')




function addlista(){

    // Buscando dado no HTML
    let ulList = document.querySelector('#lista')

    // Mapeando os dados 
    let linhaCoodenador = document.createElement('li')
    linhaCoodenador.innerHTML = coordenador.value

    let linhaDev1 = document.createElement('li')
    linhaDev1.innerHTML = dev1.value

    let linhaDev2 = document.createElement('li')
    linhaDev2.innerHTML = dev2.value

    let linhaDev3 = document.createElement('li')
    linhaDev3.innerHTML = dev3.value


    let linhaUl = document.createElement('ul')
    
    linhaUl.appendChild(linhaCoodenador)
    linhaUl.appendChild(linhaDev1)
    linhaUl.appendChild(linhaDev2)
    linhaUl.appendChild(linhaDev3)


    ulList.appendChild(linhaUl)

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

    addlista()
    
    imprimirLocalStorage()
    
    
     

    limparFormulario()
})