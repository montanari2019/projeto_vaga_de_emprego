let tituloAtividade = document.querySelector('#titulo-atividade')

let descricao = document.querySelector('#descricao_atividade')

let comboEquipe = document.querySelector('#combobox_equipe')

let atividadeVue = document.querySelector('#atividadeVue')

function vueAtividade(atividade, indice){

    let novaUl = document.createElement('ul')
    novaUl.classList.add('div_card-tarefa')
    

    let titulo = document.createElement('li')
    titulo.innerHTML = atividade.tituloAtividade
    titulo.classList.add('titulo-tarefa')
    

    let descricao = document.createElement('li')
    descricao.innerHTML = atividade.descricao
    descricao.classList.add('descricao-tarefa')
    

    let equipeResponsavel = document.createElement('li')
    equipeResponsavel.innerHTML = atividade.comboEquipe
    equipeResponsavel.classList.add('equipe-tarefa')

    novaUl.appendChild(titulo)
    novaUl.appendChild(descricao)
    novaUl.appendChild(equipeResponsavel)

    atividadeVue.appendChild(novaUl)

    console.log('Gerando Vue das atividades')
}

// Função de gravar dados no local Storage
function addLocalStorage(){
    let atividade = {
        "tituloAtividade": tituloAtividade.value,
        "descricao": descricao.value,
        "comboEquipe": comboEquipe.value
    }

    if(localStorage.getItem("atividadesList")){

        let atividadesList = JSON.parse(localStorage.getItem("atividadesList"))
        atividadesList.push(atividade)
        localStorage.setItem("atividadesList", JSON.stringify(atividadesList))

        console.log('Gravando no LocalStorage existente')

    }else{

        let atividadesList = []
        atividadesList.push(atividade)
        localStorage.setItem("atividadesList", JSON.stringify(atividadesList))

        console.log('Gravando em um novo LocalStorage')
    }
}
 
function carregarLocalStorage(){

    // Limpando lista
    atividadeVue.innerHTML = ''

    if(localStorage.getItem('atividadesList')){
        
        let atividadeList = JSON.parse(localStorage.getItem('atividadesList'))

        atividadeList.forEach(atividade, id => {
            
        })

        console.log('Carregando do local storage')
    }
}

// Função de Limpar Formulário
function limparFormulario(){
    tituloAtividade.value = ''
    descricao.value = ''
    comboEquipe.value = ''

    tituloAtividade.focus()

    console.log('Limpando Formulário')
}

document.querySelector('#btn-sincronizar').addEventListener('click', () =>{
    event.preventDefault()
    carregarLocalStorage()
    console.log('Sincronizando com o LocalStorage')
})

document.querySelector('#btn-inserir').addEventListener('click', () =>{

    event.preventDefault()
    console.log("pegando dados com o click")

    addLocalStorage()

    // carregarLocalStorage()
    vueAtividade(atividade, id)

    

    limparFormulario()
    
})