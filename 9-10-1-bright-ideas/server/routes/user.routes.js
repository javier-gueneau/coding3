const UserController = require('../controllers/user.controllers');

module.exports = app => {
    app.post('/api/user/register', UserController.registerUser)
    app.post('/api/user/login', UserController.loginUser)

}