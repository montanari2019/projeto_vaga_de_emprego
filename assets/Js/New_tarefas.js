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

    let linhaResponsavel = document.createElement('p')
    linhaResponsavel.innerHTML = tarefas.responsavel
    linhaResponsavel.classList.add('equipe-tarefa')

    let linhaEquipe = document.createElement('p')
    linhaEquipe.innerHTML = tarefas.equipe
    linhaEquipe.classList.add('equipe-tarefa')

    let btnDeletar = document.createElement('button')
    btnDeletar.innerHTML = ' <img src="assets/imagem/iconfinder_Streamline-70_185090.svg" alt="Deletar">'
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
    novaUlTarefas.appendChild(linhaResponsavel)
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
    }
    else{
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

// Função para preencher o select 
function addSelectComboEquipe(equipe){

    let opitionEquipe = document.createElement('option')
    opitionEquipe.innerHTML = equipe.nomeEquipe

    comboEquipe.appendChild(opitionEquipe)
    console.log('Listando Opções das Equipes')
    console.log("Populando Select")
  

}
comboEquipe.addEventListener('change', (equipe) =>{
    console.log('Acionando a função de carregar membro')
    addSelectComboMembro(equipe)
    
})
function addSelectComboMembro(equipe){
    console.log('Entrando na função carregar Membro')

    for(var i = 0; i <= equipe.lenght; i++){
        console.log('Entrando no laço de Repetição')
        if(equipe.nomeEquipe[i] == comboEquipe.value){

            

            let opitionCoordenador = document.createElement('option')
            opitionCoordenador.innerHTML = equipe.coordenador

            let opitionDev1 = document.createElement('option')
            opitionDev1.innerHTML = equipe.dev1

            let opitionDev2 = document.createElement('option')
            opitionDev2.innerHTML = equipe.dev2
            
            let opitionDev3 = document.createElement('option')
            opitionDev3.innerHTML = equipe.dev3


            comboMembro.appendChild(opitionCoordenador)
            comboMembro.appendChild(opitionDev1)
            comboMembro.appendChild(opitionDev2)
            comboMembro.appendChild(opitionDev3)
            console.log('Populando Membros')
        }
    }
}





// Puxando os dados do localStorage das equipes para popular o select
function carregarEquipe(){
    
      if(localStorage.getItem("listaEquipes")){
          
          let listaEquipes = JSON.parse(localStorage.getItem('listaEquipes'))
  
         
          listaEquipes.forEach((equipe, id) => {
              addSelectComboEquipe(equipe, id)
          })
          console.log('Carregando do local storage equipes')
          
      }
      
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

document.querySelector('#btn-sincronizar').addEventListener('click', () =>{
    event.preventDefault();
        
})

document.querySelector("#btn-inserir").addEventListener('click', () => {

    event.preventDefault()
    console.log('Pegando dados com o Evento o Click')


    
    addLocalStorage()
    carregarLocalStorage()
    limparFormulario()
 

})