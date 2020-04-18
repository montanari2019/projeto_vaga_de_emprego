let coordenador = document.querySelector('#coordenador')
let dev1 = document.querySelector('#desenvolvedor_1')
let dev2 = document.querySelector('#desenvolvedor_2')
let dev3 = document.querySelector('#desenvolvedor_3')
let nomeEquipe = document.querySelector('#equipe')


// Buscando dado no HTML
let lista = document.querySelector('#lista')

function addlista(equipe){

   

    let novaUl = document.createElement('ul')
    novaUl.classList.add('div-card')

    // Mapeando os dados 


    let linhaEquipe = document.createElement('li')
    linhaEquipe.innerHTML = equipe.nome
    linhaEquipe.classList.add('lista-item-titulo')

    let linhaCoodenador = document.createElement('li')
    linhaCoodenador.innerHTML = equipe.coordenador
    linhaCoodenador.classList.add('lista-item-coordenador')

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
    btnDeletar.innerHTML = '<img src="assets/imagem/deletar.svg" alt="Deletar">'
    btnDeletar.classList.add('btn-deletar')

    // Deletando equipe
    btnDeletar.addEventListener('click', () =>{
        event.preventDefault()

        let res = confirm('Deseja Deletar Essa equipe')

        if(res == true){
            deleteEquipe(equipe.id)
            console.log('Deletando')
            carregarEquipes()
        }

    })

    novaUl.appendChild(linhaEquipe)
    novaUl.appendChild(linhaCoodenador)
    novaUl.appendChild(linhaDev1)
    novaUl.appendChild(linhaDev2)
    novaUl.appendChild(linhaDev3)
    novaUl.appendChild(btnDeletar)
   

    lista.appendChild(novaUl)

}


// Carregando dados da api
function carregarEquipes(){

    // Buscando da api
    getEquipes()
        .then((resposta) => {
            lista.innerHTML = ''
            resposta.forEach((r) =>{
                addlista(r)
            })
        })   

    
}

// Função de Deletar 
function deletarEquipe(index){

    let equipes = JSON.parse(localStorage.getItem('listaEquipes'))
    equipes.splice(index, 1)

    localStorage.setItem('listaEquipes', JSON.stringify(equipes))
    carregarLocarStorage()
    console.log("Equipe Deletada")
    
}

// Função de limpar o formulário
function limparFormulario(){

    nomeEquipe.value = ""
    coordenador.value = ""
    dev1.value = ""
    dev2.value = ""
    dev3.value = ""

    coordenador.focus()
    console.log("Limpando Formulário")
}

// Envento de click do botão sincronizar com a API
document.querySelector('#btn-sincronizar').addEventListener('click', () =>{
    
    event.preventDefault();  
    
})

// evento do clik do botão inserir 
document.querySelector("#btn-inserir").addEventListener("click", () =>{

    event.preventDefault();

    console.log("Pegando os nomes com o clik")

    postEquipes()
    console.log('Equipe Inserida')
    carregarEquipes() 

    limparFormulario()  
})

function getEquipes(){
    
    return fetch('http://localhost:3010/api/v1/equipes')
            .then(resposta => resposta.json())
            .catch(erro => console.log(erro))
}

function postEquipes(){

    const data = {
        "nome": nomeEquipe.value,
        "coordenador": coordenador.value,
        "dev1": dev1.value, 
        "dev2": dev2.value,
        "dev3": dev3.value
    }

    const opitions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
        
    }
    
   
    return fetch('http://localhost:3010/api/v1/equipes', opitions)

        .then(res => res.json())
        .catch(erro => console.log(erro))
        
}

function deleteEquipe(id){

    fetch(`http://localhost:3010/api/v1/equipes/${id}`, { method: 'DELETE' })
    .then(resposta => resposta.json())
    .catch(erro => console.log(erro))
    console.log('Equipe Deletada id: ', id)

    

}
function alterarEquipe(id){
    

}

