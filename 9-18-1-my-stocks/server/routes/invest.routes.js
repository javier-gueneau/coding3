const { authenticate } = require('../config/jwt.config');
const PurchaseController = require('../controllers/invest.controllers');

module.exports = app => {
    app.post('/api/invest/create', authenticate, PurchaseController.agregar)
    app.get('/api/invest/list', authenticate, PurchaseController.listar)
    app.get('/api/invest/:id', authenticate, PurchaseController.buscar)
    app.put('/api/invest/:id', authenticate, PurchaseController.editar)
    app.delete('/api/invest/:id', authenticate, PurchaseController.eliminar)
}