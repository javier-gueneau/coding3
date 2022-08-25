const AutoresController = require('../controllers/autores.controllers');

module.exports = app => {
    app.post('/api/autores/create', AutoresController.agregar)
    app.get('/api/autores/list', AutoresController.listar)
    app.get('/api/autores/:id', AutoresController.buscar)
    app.put('/api/autores/:id', AutoresController.editar)
    app.delete('/api/autores/:id', AutoresController.eliminar)
}