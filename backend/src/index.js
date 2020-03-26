const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Busca uma informação do back-end.
 * POST: Cria uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 * 
 * 
 * Tipos de parâmetros
 * 
 * Query Params: São parâmetros nomeados enviados na rota,
 *               após o simbulo "?"(usado para filtros e paginação)
 *      - Exemplo: http://localhost:3333/users?page=2&nome=Rodrigo&idade=26
 * 
 * Route Params: É um recurso usado para identificar um parâmetros
 *               (usado geralmente para um unico parametro).
 *        Exemplo: http://localhost:3333/users/1
 * 
 *        Exemplo no codigo:
 *              const express = require('express');
                const app = express();
 *                  app.post('/users/:id', (request, response) => {
                        return response.json({
                        evento: 'Semana OmniStack 11.0',
                        aluno: 'Rodrigo Dias Soares'
                     });
                });
                app.listen(3333);

    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 * 
 */