const { authenticate } = require('../config/jwt.config');
const PurchaseController = require('../controllers/ideas.controllers');

module.exports = app => {
    app.post('/api/ideas/create', authenticate, PurchaseController.agregar)
    app.get('/api/ideas/list', authenticate, PurchaseController.listar)
    app.get('/api/ideas/:id', authenticate, authenticate, PurchaseController.buscar)
    app.put('/api/ideas/:id', authenticate, PurchaseController.editar)
    app.delete('/api/ideas/:id', authenticate, PurchaseController.eliminar)
}