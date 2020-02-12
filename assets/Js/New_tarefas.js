// Mapeando os dados das tarefas
let tituloTarefa = document.querySelector('#titulo-atividade')
let descricao = document.querySelector('#descricao_atividade')
let comboEquipe = document.querySelector('#selectEquipe')
let comboMembro = document.querySelector('#selectMembro')


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


// Função para preencher o select 
function addSelectComboEquipe(equipe, id){

    let opitionEquipe = document.createElement('option')
    opitionEquipe.innerHTML = equipe.nomeEquipe

    comboEquipe.appendChild(opitionEquipe)
    console.log('Listando Opções das Equipes')
    comboEquipe.addEventListener('change', () => {
        let opitionCoordenador = document.createElement('option')
        


        comboMembro.appendChild(opitionCoordenador)

        console.log("Listando Membros")
    })
    
    

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

document.querySelector('#btn-sincronizar').addEventListener('click', () =>{
    event.preventDefault();
    carregarEquipe()
    console.log("Populando Select")
    
})

document.querySelector("#btn-inserir").addEventListener('click', () => {

    event.preventDefault()
    console.log('Pegando dados com o Evento o Click')

    addLocalStorage()

})