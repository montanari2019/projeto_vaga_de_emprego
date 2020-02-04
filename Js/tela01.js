let coordenador = document.querySelector('#coordenador')

let dev1 = document.querySelector('#desenvolvedor_1')

let dev2 = document.querySelector('#desenvolvedor_2')

let dev3 = document.querySelector('#desenvolvedor_3')






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
    
    imprimirLocalStorage()
    
    
     

    limparFormulario()
})