const Controller = require('../controllers/exam.controllers');

module.exports = app => {
    app.post('/api/pirate/new', Controller.add)
    app.get('/api/pirate/list', Controller.list)
    app.get('/api/pirate/:id', Controller.lookUp)
    app.put('/api/pirate/:id', Controller.update)
    app.delete('/api/pirate/:id', Controller.delete)
}