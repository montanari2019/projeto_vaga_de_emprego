let tituloAtividade = document.querySelector('#titulo-atividade')

let descricao = document.querySelector('#descricao_atividade')

let comboEquipe = document.querySelector('#combobox_equipe')

let atividadeVue = document.querySelector('#atividadeVue')

function vueAtividade(atividade){

    let titulo = document.createElement('h1')
    let textitulo = document.createTextNode(atividade.tituloAtividade)
    titulo.innerHTML = textitulo
    

    let descricao = document.createElement('p')
    let texDescricao = document.createTextNode(atividade.descricao)
    descricao.innerHTML = texDescricao
    

    let equipeResponsavel = document.createElement('h6')
    let textEquipe = document.createTextNode(atividade.comboEquipe)
    equipeResponsavel.innerHTML = textEquipe

    
    

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
    vueAtividade(atividade)
}
 

// Função de Limpar Formulário
function limparFormulario(){
    tituloAtividade.value = ''
    descricao.value = ''
    comboEquipe.value = ''

    tituloAtividade.focus()

    console.log('Limpando Formulário')
}


document.querySelector('#btn-inserir').addEventListener('click', () =>{

    event.preventDefault()
    console.log("pegando dados com o click")

    addLocalStorage()

    

    limparFormulario()
    
})