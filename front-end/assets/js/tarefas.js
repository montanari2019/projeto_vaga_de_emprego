// Mapeando os dados das tarefas
let tituloTarefa = document.querySelector('#titulo-atividade')
let descricao = document.querySelector('#descricao_atividade')
let comboEquipe = document.querySelector('#selectEquipe')
let comboMembro = document.querySelector('#selectMembro')

// Buscando dado no HTML
let listaTarefa = document.querySelector('#atividadeVue')

function addListaTarefa(tarefas, id){

    let novaUlTarefas = document.createElement('ul')
    novaUlTarefas.classList.add('div_card-tarefa')

    // Mapeando os dados 
    let linhaTitulo = document.createElement('h1')
    linhaTitulo.innerHTML = tarefas.tituloTarefa
    linhaTitulo.classList.add('titulo-tarefa')

    let linhaDescricao = document.createElement('h6')
    linhaDescricao.innerHTML = tarefas.descricao
    linhaDescricao.classList.add('descricao-tarefa')

    let labelResponsavel = document.createElement('label')
    labelResponsavel.innerHTML = 'Desenvolvedor responsável:'
    labelResponsavel.classList.add('label--main--tarefa') 

    let linhaResponsavel = document.createElement('p')
    linhaResponsavel.innerHTML = tarefas.responsavel
    linhaResponsavel.classList.add('equipe-tarefa')

    let labelEquipe = document.createElement('label')
    labelEquipe.innerHTML = 'Equipe do desenvolvedor:'
    labelEquipe.classList.add('label--main--tarefa')

    let linhaEquipe = document.createElement('p')
    linhaEquipe.innerHTML = tarefas.equipe
    linhaEquipe.classList.add('equipe-tarefa')

    let btnDeletar = document.createElement('button')
    btnDeletar.innerHTML = '<img src="assets/imagem/deletar.svg" alt="Deletar">'
    btnDeletar.classList.add('btn-deletar')

      // Deletando Tarefas
      btnDeletar.addEventListener('click', () =>{
        event.preventDefault()

        let res = confirm('Deseja Deletar Essa equipe')

        if(res == true){
            deletarTarefa(id)
        }

    })

    novaUlTarefas.appendChild(linhaTitulo)
    novaUlTarefas.appendChild(linhaDescricao)
    novaUlTarefas.appendChild(labelResponsavel)
    novaUlTarefas.appendChild(linhaResponsavel)
    novaUlTarefas.appendChild(labelEquipe)
    novaUlTarefas.appendChild(linhaEquipe)
    novaUlTarefas.appendChild(btnDeletar)

    listaTarefa.appendChild(novaUlTarefas)
}

// Função para Adicionar no localStorage
function addLocalStorage(){


    let tarefasEquipe = {
        'tituloTarefa': tituloTarefa.value,
        'descricao' : descricao.value,
        'responsavel': comboMembro.value,
        'equipe': comboEquipe.value
    }

    if(localStorage.getItem('tarefas')){

        let tarefas = JSON.parse(localStorage.getItem("tarefas"))
        tarefas.push(tarefasEquipe)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        console.log('Gravando no LocalStorage existente')

    } else {
        
        let tarefas = []
        tarefas.push(tarefasEquipe)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        console.log('Gravando em um novo LocalStorage')

    }
}

// Carregando localStorage das tarefas
function carregarLocalStorage(){

     // Limpar a lista
    listaTarefa.innerHTML = ''

    if(localStorage.getItem("tarefas")){
          
        let listaTarefa = JSON.parse(localStorage.getItem('tarefas'))
       
        listaTarefa.forEach((tarefas, id) => {
            addListaTarefa(tarefas, id)
        })
        console.log('Carregando do local storage TAREFAS')
        
    }
}

// Função de deletar um tarefa
function deletarTarefa(index){

    let tarefas = JSON.parse(localStorage.getItem('tarefas'))
    tarefas.splice(index, 1)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    console.log("Atividade Deletada")
    carregarLocalStorage() 
}

// Puxando os dados do localStorage das equipes para popular o select
function carregarEquipe(){
    
    if(localStorage.getItem("listaEquipes")){
        
        let listaEquipes = JSON.parse(localStorage.getItem('listaEquipes'))
        
        listaEquipes.forEach((equipe) => {
            
            let optionEquipe = document.createElement('option')
            optionEquipe.innerHTML = equipe.nomeEquipe
            optionEquipe.value = equipe.nomeEquipe
            comboEquipe.appendChild(optionEquipe)
            console.log('Carregando equipes')

           
        })
    }
}

// Evento change para acionar a função carregarMembros
comboEquipe.addEventListener('change', () => {
                
    carregarMembros(comboEquipe.value)    
})


// Função para carregar os membros da equipe selecionada
function carregarMembros(nome){

    let listaEquipes = JSON.parse(localStorage.getItem('listaEquipes'))

    let equipeSelecionada = listaEquipes.filter((equipe) => {
        
        return equipe.nomeEquipe == nome
         
    })

    console.log('Membros carregados')

    let optionCoordenador = document.createElement('option')
    optionCoordenador.innerHTML = equipeSelecionada[0].coordenador
    optionCoordenador.value = equipeSelecionada[0].coordenador
    comboMembro.appendChild(optionCoordenador)
    
    let optionDev1 = document.createElement('option')
    optionDev1.innerHTML = equipeSelecionada[0].dev1
    optionDev1.value = equipeSelecionada[0].dev1
    comboMembro.appendChild(optionDev1)

    let optionDev2 = document.createElement('option')
    optionDev2.innerHTML = equipeSelecionada[0].dev2
    optionDev2.value = equipeSelecionada[0].dev2
    comboMembro.appendChild(optionDev2)

    let optionDev3 = document.createElement('option')
    optionDev3.innerHTML = equipeSelecionada[0].dev3
    optionDev3.value = equipeSelecionada[0].dev3
    comboMembro.appendChild(optionDev3)
}



// Função de limpar o formulário
function limparFormulario(){

    tituloTarefa.value = ""
    descricao.value = ""
    comboEquipe.value = ""
    comboMembro.value = ""
    tituloTarefa.focus()
    console.log("Limpando Formulário")
}



// Evento do botão Inserir
document.querySelector("#btn-inserir").addEventListener('click', () => {

    event.preventDefault()
    console.log('Pegando dados com o Evento o Click')
    addLocalStorage()
    carregarLocalStorage()
    limparFormulario()
})

// Evento do Botão sincronizar 
document.querySelector("#btn-sincronismo").addEventListener('click', () => {

    event.preventDefault()
    console.log("Click no botão de sincronizar") 
    
    event.preventDefault()
    getTarefas()
        .then((resposta) => {
            resposta.forEach(r => console.log(r))
            
        })     
})

function getTarefas(){
    
    return fetch('http://localhost:3010/api/v1/tarefas')
        .then(resposta => resposta.json())
        .catch(erro => console.log(erro))
}
 