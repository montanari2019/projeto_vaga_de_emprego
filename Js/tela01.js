var coordenador = document.getElementById('coordenador')

var dev01 = document.getElementById('desenvolvedor_1')

var dev02 = document.getElementById('desenvolvedor_2')

var dev03 = document.getElementById('desenvolvedor_3')

// 




function addLocalStorage(coord, desenvolvedor01, desenvolvedor02, desenvolvedor03){
    
    
    console.log(coord.value)
    console.log(desenvolvedor01.value)

    let equipe = {
        "coordenador": coord,
        "dev01": desenvolvedor01, 
        "dev02": desenvolvedor02,
        "dev03": desenvolvedor03
    }

   
    
    if(localStorage.getItem("listaEquipes")){

        let listaEquipes = JSON.parse(localStorage.getItem(listaEquipes))
        listaEquipes.push(equipe)
        localStorage.setItem("listaEquipes", JSON.stringify(listaEquipes))

    }else{
        
        let listaEquipes = []
        listaEquipes.push(equipe)
        localStorage.setItem("listaEquipes", JSON.stringify(listaEquipes))
    }

    

    // equipes.add
    // console.log(equipes.value[0])
}

// function addlista(coordenador, dev01,dev02,dev03){
//     let listaCoordenador = document.createElement('ul')
//     listaCoordenador.innerHTML = coordenador

//     let listaDev01 = document.createElement('ul')
//     listaDev01.innerHTML = dev01

//     let listaDev02 = document.createElement('ul')
//     listaDev02.innerHTML = dev02

//     let listaDev03 = document.createElement('ul')
//     listaDev03.innerHTML = dev03

//     console.log("Adicionando na lista")
// }

function limpar_formulario(){
    coordenador.value = ""
    dev01.value = ""
    dev02.value = ""
    dev03.value = ""

    coordenador.focus()
}

// evento do clik do botão inserir 
document.querySelector("#btn-inserir").addEventListener("click", () =>{

    event.preventDefault();
    console.log("Pegando os nomes com o clik")

    addLocalStorage(coordenador.value, dev01.value, dev02.value, dev03.value)
     

    limpar_formulario()
})