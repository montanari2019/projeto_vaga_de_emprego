
1) Para executar a API é necessário que tenha instalado o Nodejs 12 e o MySQL 8.

2) Acesse a pasta api/src e rode o comando npm install para instalar as dependências da API.

3) Instale o nodemon de forma global com o comando sudo npm install -g nodemon.

4) Crie o banco de dados "tarefas_db", e sua estrutura a partir do arquivo database/schema.sql.

5) Configure o acesso da API ao banco de dados no arquivo api/.env

6) Para rodar a API use o comando npm start.

7) Para testar a API acesse com o navegador os endereços http://localhost:3010/api/v1/equipes ou http://localhost:3010/api/v1/tarefas, estes métodos GET vão listar todos as equipes e tarefas.
Também implementei rotas para inserir, alterar e deletar tarefas e equipes.
                                    Equipes

Para inserir equipes, utilizando o método POST enviar o JSON como no exemplo:
  {
    "nome": "Iron Man",
    "coordenador": "Tony Stark",
    "dev1": "Homem Aranha",
    "dev2": "Visão",
    "dev3": "Pantera Negra"
  }
...

Para Alterar equipes, utilizando o método PUT, passando um id na url enviar o JSON como no exemplo:

    http://localhost:3010/api/v1/equipes/9

    {
        "nome": "Iron Man",
        "coordenador": "Tony Stark",
        "dev1": "Homem Aranha",
        "dev2": "Visão",
        "dev3": "Pantera Negra"
    }
...

Para Deletar equipes, utilizando o método DELETE, passando um id na url como no exemplo:
    http://localhost:3010/api/v1/equipes/9
...

                                    Tarefas

Para Inserir tarefas, utilizando o método POST enviar o JSON como no exemplo:
   {
        "titulo": "Node.js",
        "descricao": "Fazer api em node.js com todas as função de listagem para filtros",
        "responsavel": "Ikaro",
        "equipe_responsavel": "Delta",
        "id_equipe": 1
  }
...

Para Alterar tarefas, utilizando o método PUT, passando um id na url enviar o JSON como no exemplo:

    http://localhost:3010/api/v1/tarefas/9

    {
        "titulo": "Node.js",
        "descricao": "Fazer api em node.js com todas as função de listagem para filtros",
        "responsavel": "Ikaro",
        "equipe_responsavel": "Delta",
        "id_equipe": 1
  }
...

Para Deletar equipes, utilizando o método DELETE, passando um id na url como no exemplo:
    http://localhost:3010/api/v1/tarefas/9
...


8) Para testar o front-end abra o arquivo front-end/index.html.
No front-end estou salvando no localStorage as equipes e atividades.
O botão sincronizar apenas mostra no console os dados fornecidos pela API, pois não tive tempo hábil para implementar uma função que sincroniza-se o localStorage com a API.