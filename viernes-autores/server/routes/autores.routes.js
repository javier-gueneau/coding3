const AutoresController = require('../controllers/autores.controllers');

module.exports = app => {
    app.post('/api/autores/create', AutoresController.agregar)
    app.get('/api/autores/list', AutoresController.listar)
    app.put('/api/autores/:id', AutoresController.editar)
    /* app.delete('/api/product/:id', ProductController.eliminar) */
}