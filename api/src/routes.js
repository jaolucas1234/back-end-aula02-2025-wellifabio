const express = require('express');

const routes = express.Router();

const Cliente = require('./controllers/cliente');
const medicos = require('./controllers/medicos');

routes.get('/', (req, res) => {
    res.send('API Clínica Respondendo');
});

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.del);

routes.post('/medicos', medicos.create);
routes.get('/medicos', medicos.read);
routes.put('/medicos/:id', medicos.update);
routes.delete('/medicos/:id', medicos.del);

module.exports = routes;