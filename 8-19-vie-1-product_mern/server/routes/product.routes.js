const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.post('/api/product/create', ProductController.createProduct)
    app.get('/api/product/list', ProductController.listProduct)
    app.get('/api/product/:id', ProductController.lookUp)
}