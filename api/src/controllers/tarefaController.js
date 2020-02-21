const conexao = require('../config/conexao')

// Listando todas as tarefas
exports.listarTarefas = (req, res) =>{

    const query = 'select * from tarefa'

    conexao.query(query, (err, rows) => {
        if (err){

            console.log(err)
            res.status(500)
            res.json({"message": "Internal Server Error"})

          } else if (rows.length > 0){

            res.status(200)
            res.json(rows)

          } else {

            res.status(404)
            res.json({"message": "Nenhuma Equipe Encontrada"})

          }
    })

}

// Alterando uma tarefa
exports.alterarTarefa = (req, res) => {
  
  const tarefa = {}
  tarefa.id = req.params.id
  tarefa.titulo = req.body.titulo,
  tarefa.descricao = req.body.descricao,
  tarefa.responsavel = req.body.responsavel,
  tarefa.equipe_responsavel = req.body.equipe_responsavel,
  tarefa.id_equipe = req.body.id_equipe

  const query = 'update tarefa set titulo = ?, descricao = ?,  responsavel = ?, equipe_responsavel = ?, id_equipe = ? where id = ?'

  conexao.query(query, [tarefa.titulo, tarefa.descricao, tarefa.responsavel, tarefa.equipe_responsavel, tarefa.id_equipe, tarefa.id], (err, result) =>{

    if (err){

        console.log(err)
        res.status(500)
        res.json({"message": "Internal Server Error"})

      } else if (result.affectedRows > 0){

        res.status(202)
        res.json({"message": "Tarefa alterada"})

      } else {

        res.status(404)
        res.json({"message": "Tarefas não encontrada"})

      }
})
}


// Inserindo uma nova tarefa
exports.inserirTarefa = (req, res) =>{

    console.log(req.body)

    const tarefa = {}
    tarefa.titulo = req.body.titulo,
    tarefa.descricao = req.body.descricao,
    tarefa.responsavel = req.body.responsavel,
    tarefa.equipe_responsavel = req.body.equipe_responsavel,
    tarefa.id_equipe = req.body.id_equipe


    const query = 'insert into tarefa (titulo, descricao, responsavel, equipe_responsavel, id_equipe) values (?, ?, ?, ?, ?)'

    conexao.query(query, [tarefa.titulo, tarefa.descricao, tarefa.responsavel, tarefa.equipe_responsavel, tarefa.id_equipe], (err, result) =>{
        if (err){

          console.log(err)
          res.status(500)
          res.json({'message': 'Internal Server Error'})

        }else{

          res.status(201)
          res.json({"message": result.insertId})

        }
    })
}

// Deleteando uma tarefa
exports.deletarTarefa = (req, res) =>{

    const id = req.params.id

    const query = 'delete from tarefa where id = ?'

    conexao.query(query, [id], (err, result) =>{

      if(err){

          console.log(err)
          res.status(500)
          res.json({'message': 'Internar Server Error'})

      }else if (result.affectedRows > 0){

          res.status(200)
          res.json({'message': 'Tarefa deletada'})

      }else{

          res.status(404)
          res.json({'message': 'Tarefa não encontrada'})

      }
  })
    
}
