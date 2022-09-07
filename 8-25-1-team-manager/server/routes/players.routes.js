const PlayersController = require('../controllers/players.controllers');

module.exports = app => {
    app.post('/api/players/create', PlayersController.create)
    /* app.get('/api/players/list', PlayersController.listar)
    app.get('/api/players/:id', PlayersController.buscar)
    app.put('/api/players/:id', PlayersController.editar)
    app.delete('/api/players/:id', PlayersController.eliminar) */
}