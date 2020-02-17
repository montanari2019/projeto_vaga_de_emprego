const conexao = require('../config/conexao')

// Listando todas as equipes
exports.listarEquipes = (req, res) => {
    
        const query = 'select * from equipe'

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
                res.json({"message": "Nenhuma Encontrada"})

              }
        })
    }

// Inserindo uma nova equipe
exports.inserirEquipe = (req, res) => {   

    const equipe = {}
    equipe.nome = req.body.nome,
    equipe.coordenador = req.body.coordenador,
    equipe.dev1 = req.body.dev1,
    equipe.dev2 = req.body.dev2,
    equipe.dev3 = req.body.dev3

    const query = 'insert into equipe (nome, coordenador, dev1, dev2, dev3) values (?,?,?,?,?)'

    conexao.query(query, [equipe.nome, equipe.coordenador, equipe.dev1, equipe.dev2, equipe.dev3], (err, result) =>{

        if (err){

            console.log(err)
            res.status(500)
            res.json({"message": "Internal Server Error"})

          } else {
              
            res.status(201)
            res.json({"message": result.insertId})

          }
    })
}

// Deleteando uma equipe
exports.deletarEquipe = (req, res) => {
    
    const id = req.params.id

    const query = 'delete from equipe where id = ?'

    conexao.query(query, [id], (err, result) =>{

        if(err){

            console.log(err)
            res.status(500)
            res.json({'message': 'Internar Server Error'})

        }else if (result.affectedRows > 0){

            res.status(200)
            res.json({'message': 'Equipe deletada'})

        }else{

            res.status(404)
            res.json({'message': 'Equipe não encontrada'})

        }
    })
}